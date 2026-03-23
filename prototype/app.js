const data = window.PROTOTYPE_DATA;

const state = {
  selectedStudentId: data.defaultStudentId,
  scenarioValues: {},
};

const featureLookup = Object.fromEntries(data.features.map((feature) => [feature.key, feature]));
const studentLookup = Object.fromEntries(data.students.map((student) => [student.id, student]));

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatNumber(value, digits = 1) {
  return Number(value).toFixed(digits);
}

function riskClass(riskBand) {
  return `risk-${riskBand.toLowerCase()}`;
}

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function getSelectedStudent() {
  return studentLookup[state.selectedStudentId];
}

function getScenarioValues() {
  return state.scenarioValues;
}

function setScenarioFromStudent(student) {
  state.scenarioValues = deepCopy(student.values);
}

function encodeValue(featureKey, value) {
  const mapping = data.maps[featureKey];
  return mapping ? mapping[value] : Number(value);
}

function decodeShiftedValue(featureKey, currentValue, delta) {
  const feature = featureLookup[featureKey];
  if (feature.type === "numeric") {
    return clamp(Number(currentValue) + delta, feature.min, feature.max);
  }

  const mapping = data.maps[featureKey];
  const reverseMap = data.reverseMaps[featureKey];
  const shifted = clamp(mapping[currentValue] + delta, 0, Object.keys(mapping).length - 1);
  return reverseMap[String(shifted)];
}

function predictWithModel(values, model) {
  let score = model.intercept;
  data.model.featureOrder.forEach((featureKey) => {
    score += model.coefficients[featureKey] * encodeValue(featureKey, values[featureKey]);
  });
  return score;
}

function getPredictionSamples(values) {
  return data.model.bootstrap.map((model) => predictWithModel(values, model));
}

function summarizeSamples(samples) {
  const sorted = [...samples].sort((left, right) => left - right);
  const mean = sorted.reduce((sum, value) => sum + value, 0) / sorted.length;
  const low = sorted[Math.floor(sorted.length * 0.05)];
  const high = sorted[Math.floor(sorted.length * 0.95)];
  return { mean, low, high };
}

function buildDensity(samples) {
  const points = [];
  const bandwidth = 1.8;
  const normalizer = samples.length * bandwidth * Math.sqrt(2 * Math.PI);
  for (let score = 45; score <= 100; score += 0.5) {
    let density = 0;
    for (const sample of samples) {
      const z = (score - sample) / bandwidth;
      density += Math.exp(-0.5 * z * z);
    }
    points.push({ x: score, y: density / normalizer });
  }
  return points;
}

function getScoreDelta(student, scenarioValues) {
  const baselineScore = predictWithModel(student.values, data.model);
  const scenarioScore = predictWithModel(scenarioValues, data.model);
  return scenarioScore - baselineScore;
}

function buildRecommendations(student, scenarioValues) {
  const items = data.features
    .map((feature) => {
      const currentValue = scenarioValues[feature.key];
      const nextValue = decodeShiftedValue(feature.key, currentValue, 1);
      if (nextValue === currentValue) {
        return null;
      }

      const shiftedScenario = deepCopy(scenarioValues);
      shiftedScenario[feature.key] = nextValue;
      const delta = predictWithModel(shiftedScenario, data.model) - predictWithModel(scenarioValues, data.model);

      return {
        key: feature.key,
        label: feature.label,
        nextValue,
        delta,
        mutable: feature.mutable,
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.delta - left.delta)
    .slice(0, 5);

  return items;
}

function renderHeroMetrics() {
  const metrics = [
    {
      value: data.meta.rows,
      label: "student records in the CSV",
    },
    {
      value: data.model.rSquared,
      label: "R-squared for the interpretable linear model",
    },
    {
      value: data.model.bootstrap.length,
      label: "bootstrap models powering the uncertainty curves",
    },
  ];

  document.getElementById("heroMetrics").innerHTML = metrics
    .map(
      (metric) => `
        <div class="metric-card">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join("");
}

function renderStudentList() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = data.students
    .map((student) => {
      const activeClass = student.id === state.selectedStudentId ? "active" : "";
      return `
        <button class="student-card ${activeClass}" data-student-id="${student.id}">
          <div class="student-card-top">
            <div>
              <div class="student-card-name">${student.name}</div>
              <div class="student-card-score">Actual ${student.actualScore} | Predicted ${formatNumber(
                student.predictedScore
              )}</div>
            </div>
            <span class="risk-pill ${riskClass(student.riskBand)}">${student.riskBand}</span>
          </div>
        </button>
      `;
    })
    .join("");

  studentList.querySelectorAll("[data-student-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const student = studentLookup[button.dataset.studentId];
      state.selectedStudentId = student.id;
      setScenarioFromStudent(student);
      renderAll();
    });
  });
}

function renderScoreSummary(student, baselineSummary, scenarioSummary) {
  const delta = scenarioSummary.mean - baselineSummary.mean;
  const deltaClass = delta >= 0 ? "delta-positive" : "delta-negative";
  document.getElementById("scoreSummary").innerHTML = `
    <div class="score-tile">
      <strong>${student.actualScore}</strong>
      <span>Actual exam score</span>
    </div>
    <div class="score-tile">
      <strong>${formatNumber(baselineSummary.mean)}</strong>
      <span>Baseline expected score</span>
    </div>
    <div class="score-tile">
      <strong>${formatNumber(scenarioSummary.mean)}</strong>
      <span>Scenario expected score</span>
    </div>
    <div class="score-tile">
      <strong><span class="delta-pill ${deltaClass}">${delta >= 0 ? "+" : ""}${formatNumber(delta)}</span></strong>
      <span>Lift from current intervention plan</span>
    </div>
  `;
}

function renderPredictionChart(student, baselineSummary, scenarioSummary) {
  const baselinePoints = buildDensity(getPredictionSamples(student.values));
  const scenarioPoints = buildDensity(getPredictionSamples(state.scenarioValues));
  const maxY = Math.max(
    ...baselinePoints.map((point) => point.y),
    ...scenarioPoints.map((point) => point.y)
  );
  const width = 860;
  const height = 380;
  const margin = { top: 20, right: 20, bottom: 42, left: 56 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = d3.scaleLinear().domain([45, 100]).range([margin.left, margin.left + plotWidth]);
  const y = d3.scaleLinear().domain([0, maxY * 1.15]).range([margin.top + plotHeight, margin.top]);
  const xTicks = [50, 60, 70, 80, 90, 100];
  const yTicks = [0, maxY * 0.5, maxY];
  const baselineY = margin.top + plotHeight;
  const svg = d3.select("#predictionChart");
  svg.selectAll("*").remove();

  const line = d3
    .line()
    .x((point) => x(point.x))
    .y((point) => y(point.y));

  const area = d3
    .area()
    .x((point) => x(point.x))
    .y0(baselineY)
    .y1((point) => y(point.y));

  svg
    .append("rect")
    .attr("x", x(45))
    .attr("y", margin.top)
    .attr("width", x(60) - x(45))
    .attr("height", plotHeight)
    .attr("fill", "rgba(185, 28, 28, 0.09)");

  svg
    .append("g")
    .selectAll("line")
    .data(xTicks)
    .join("line")
    .attr("class", "grid-line")
    .attr("x1", (tick) => x(tick))
    .attr("x2", (tick) => x(tick))
    .attr("y1", margin.top)
    .attr("y2", baselineY);

  svg
    .append("g")
    .selectAll("line")
    .data(yTicks)
    .join("line")
    .attr("class", "grid-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + plotWidth)
    .attr("y1", (tick) => y(tick))
    .attr("y2", (tick) => y(tick));

  svg
    .append("line")
    .attr("class", "axis-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + plotWidth)
    .attr("y1", baselineY)
    .attr("y2", baselineY);

  svg
    .append("line")
    .attr("class", "axis-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left)
    .attr("y1", margin.top)
    .attr("y2", baselineY);

  svg.append("path").datum(baselinePoints).attr("class", "baseline-fill").attr("d", area);
  svg.append("path").datum(scenarioPoints).attr("class", "scenario-fill").attr("d", area);
  svg.append("path").datum(baselinePoints).attr("class", "baseline-line").attr("d", line);
  svg.append("path").datum(scenarioPoints).attr("class", "scenario-line").attr("d", line);

  [
    { xValue: baselineSummary.mean, stroke: "#d97706", dash: "6 6" },
    { xValue: scenarioSummary.mean, stroke: "#0f766e", dash: "6 6" },
    { xValue: student.actualScore, stroke: "#123247", width: 2 },
  ].forEach((marker) => {
    const selection = svg
      .append("line")
      .attr("x1", x(marker.xValue))
      .attr("x2", x(marker.xValue))
      .attr("y1", margin.top)
      .attr("y2", baselineY)
      .attr("stroke", marker.stroke);

    if (marker.dash) {
      selection.attr("stroke-dasharray", marker.dash);
    }
    if (marker.width) {
      selection.attr("stroke-width", marker.width);
    }
  });

  svg
    .append("g")
    .selectAll("text")
    .data(xTicks)
    .join("text")
    .attr("class", "axis-label")
    .attr("x", (tick) => x(tick))
    .attr("y", height - 14)
    .attr("text-anchor", "middle")
    .text((tick) => tick);

  svg
    .append("text")
    .attr("class", "chart-title")
    .attr("x", margin.left)
    .attr("y", 12)
    .text("Red zone: predicted failing range below 60");

  svg
    .append("text")
    .attr("class", "chart-label")
    .attr("x", x(60) - 8)
    .attr("y", margin.top + 18)
    .attr("text-anchor", "end")
    .text("Fail threshold");

  [
    { xValue: baselineSummary.mean, yValue: margin.top + 32, text: `Baseline ${formatNumber(baselineSummary.mean)}` },
    { xValue: scenarioSummary.mean, yValue: margin.top + 48, text: `Scenario ${formatNumber(scenarioSummary.mean)}` },
    { xValue: student.actualScore, yValue: margin.top + 64, text: `Actual ${student.actualScore}` },
  ].forEach((label) => {
    svg
      .append("text")
      .attr("class", "chart-label")
      .attr("x", x(label.xValue))
      .attr("y", label.yValue)
      .attr("text-anchor", "middle")
      .text(label.text);
  });

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("x", margin.left + plotWidth / 2)
    .attr("y", height - 2)
    .attr("text-anchor", "middle")
    .text("Predicted exam score");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", `translate(16 ${margin.top + plotHeight / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .text("Density from bootstrap predictions");
}

function renderRecommendations(student, scenarioValues) {
  const recommendations = buildRecommendations(student, scenarioValues);
  document.getElementById("recommendations").innerHTML = recommendations
    .map(
      (item, index) => `
        <div class="recommendation-card">
          <div class="recommendation-card-header">
            <strong>${index + 1}. ${item.label}</strong>
            <span class="tag-pill ${item.delta >= 0 ? "delta-positive" : "delta-negative"}">
              ${item.delta >= 0 ? "+" : ""}${formatNumber(item.delta)}
            </span>
          </div>
          <p>Next reasonable move: set <strong>${item.label}</strong> to <strong>${item.nextValue}</strong>.</p>
        </div>
      `
    )
    .join("");

  document.getElementById("coefficientList").innerHTML = data.model.coefficientSummary
    .slice(0, 6)
    .map(
      (item) => `
        <div class="coefficient-card">
          <div class="coefficient-card-header">
            <strong>${item.label}</strong>
            <span class="tag-pill ${item.coefficient >= 0 ? "delta-positive" : "delta-negative"}">
              ${item.coefficient >= 0 ? "+" : ""}${item.coefficient}
            </span>
          </div>
          <p>Bootstrap interval: ${item.ciLow} to ${item.ciHigh}</p>
        </div>
      `
    )
    .join("");
}

function renderControls(student) {
  const controlsGrid = document.getElementById("controlsGrid");
  controlsGrid.innerHTML = data.features
    .map((feature) => {
      const baselineValue = student.values[feature.key];
      const currentValue = state.scenarioValues[feature.key];
      const mutabilityLabel =
        feature.mutable === "high"
          ? "Directly actionable"
          : feature.mutable === "medium"
          ? "Counseling or resource lever"
          : "Context lever";
      const header = `
        <div class="control-top">
          <div>
            <strong>${feature.label}</strong>
            <p>${mutabilityLabel}</p>
          </div>
          <div class="control-value">${currentValue}</div>
        </div>
      `;

      if (feature.type === "numeric") {
        return `
          <div class="control-card">
            ${header}
            <input
              type="range"
              min="${feature.min}"
              max="${feature.max}"
              step="${feature.step}"
              value="${currentValue}"
              data-feature="${feature.key}"
            />
            <p>Baseline: ${baselineValue}${feature.unit ? ` ${feature.unit}` : ""}</p>
          </div>
        `;
      }

      return `
        <div class="control-card">
          ${header}
          <select data-feature="${feature.key}">
            ${feature.options
              .map(
                (option) =>
                  `<option value="${option}" ${option === currentValue ? "selected" : ""}>${option}</option>`
              )
              .join("")}
          </select>
          <p>Baseline: ${baselineValue}</p>
        </div>
      `;
    })
    .join("");

  controlsGrid.querySelectorAll("[data-feature]").forEach((element) => {
    element.addEventListener("input", (event) => {
      const featureKey = event.target.dataset.feature;
      const feature = featureLookup[featureKey];
      state.scenarioValues[featureKey] =
        feature.type === "numeric" ? Number(event.target.value) : event.target.value;
      renderAll(false);
    });
  });
}

function renderPresets(student) {
  const presetBar = document.getElementById("presetBar");
  presetBar.innerHTML =
    data.presets
      .map(
        (preset) => `
          <button class="preset-button" data-preset-id="${preset.id}" title="${preset.description}">
            ${preset.label}
          </button>
        `
      )
      .join("") + `<button class="reset-button" id="resetScenario">Reset to baseline</button>`;

  presetBar.querySelectorAll("[data-preset-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = data.presets.find((item) => item.id === button.dataset.presetId);
      const nextValues = deepCopy(student.values);
      Object.entries(preset.changes).forEach(([featureKey, delta]) => {
        nextValues[featureKey] = decodeShiftedValue(featureKey, nextValues[featureKey], delta);
      });
      state.scenarioValues = nextValues;
      renderAll(false);
    });
  });

  document.getElementById("resetScenario").addEventListener("click", () => {
    setScenarioFromStudent(student);
    renderAll(false);
  });
}

function renderContext(student) {
  document.getElementById("contextGrid").innerHTML = data.contextKeys
    .map(
      (key) => `
        <div class="context-card">
          <div class="context-card-header">
            <strong>${data.labels[key]}</strong>
            <span class="tag-pill">${student.values[key]}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderScatterChart(student) {
  const width = 560;
  const height = 300;
  const margin = { top: 16, right: 16, bottom: 36, left: 46 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = d3.scaleLinear().domain([60, 100]).range([margin.left, margin.left + plotWidth]);
  const y = d3.scaleLinear().domain([55, 101]).range([margin.top + plotHeight, margin.top]);
  const colors = {
    Low: "#b91c1c",
    Medium: "#d97706",
    High: "#0f766e",
  };
  const svg = d3.select("#scatterChart");
  svg.selectAll("*").remove();

  svg
    .append("line")
    .attr("class", "axis-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + plotWidth)
    .attr("y1", margin.top + plotHeight)
    .attr("y2", margin.top + plotHeight);

  svg
    .append("line")
    .attr("class", "axis-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left)
    .attr("y1", margin.top)
    .attr("y2", margin.top + plotHeight);

  const xTicks = [60, 70, 80, 90, 100];
  const yTicks = [55, 65, 75, 85, 95];

  svg
    .append("g")
    .selectAll("line")
    .data(xTicks)
    .join("line")
    .attr("class", "grid-line")
    .attr("x1", (tick) => x(tick))
    .attr("x2", (tick) => x(tick))
    .attr("y1", margin.top)
    .attr("y2", margin.top + plotHeight);

  svg
    .append("g")
    .selectAll("text")
    .data(xTicks)
    .join("text")
    .attr("class", "axis-label")
    .attr("x", (tick) => x(tick))
    .attr("y", height - 12)
    .attr("text-anchor", "middle")
    .text((tick) => tick);

  svg
    .append("g")
    .selectAll("line")
    .data(yTicks)
    .join("line")
    .attr("class", "grid-line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + plotWidth)
    .attr("y1", (tick) => y(tick))
    .attr("y2", (tick) => y(tick));

  svg
    .append("g")
    .selectAll("text")
    .data(yTicks)
    .join("text")
    .attr("class", "axis-label")
    .attr("x", margin.left - 8)
    .attr("y", (tick) => y(tick) + 4)
    .attr("text-anchor", "end")
    .text((tick) => tick);

  svg
    .append("g")
    .selectAll("circle")
    .data(data.cohortScatter)
    .join("circle")
    .attr("cx", (point) => x(point.attendance))
    .attr("cy", (point) => y(point.score))
    .attr("r", 4)
    .attr("fill", (point) => colors[point.parentalInvolvement])
    .attr("opacity", 0.38);

  svg
    .append("line")
    .attr("x1", x(student.values.Attendance))
    .attr("x2", x(student.values.Attendance))
    .attr("y1", margin.top)
    .attr("y2", margin.top + plotHeight)
    .attr("stroke", "#123247")
    .attr("stroke-dasharray", "5 5");

  svg
    .append("line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + plotWidth)
    .attr("y1", y(student.actualScore))
    .attr("y2", y(student.actualScore))
    .attr("stroke", "#123247")
    .attr("stroke-dasharray", "5 5");

  svg
    .append("circle")
    .attr("cx", x(student.values.Attendance))
    .attr("cy", y(student.actualScore))
    .attr("r", 7)
    .attr("fill", "#123247");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("x", margin.left + plotWidth / 2)
    .attr("y", height - 2)
    .attr("text-anchor", "middle")
    .text("Attendance");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", `translate(16 ${margin.top + plotHeight / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .text("Exam score");
}

function renderCorrelationChart() {
  const width = 560;
  const height = 300;
  const margin = { top: 18, right: 52, bottom: 28, left: 180 };
  const plotWidth = width - margin.left - margin.right;
  const barHeight = 18;
  const gap = 8;
  const maxAbs = Math.max(...data.topCorrelations.map((item) => Math.abs(item.value)));
  const paddedMaxAbs = maxAbs * 1.16;
  const x = d3
    .scaleLinear()
    .domain([-paddedMaxAbs, paddedMaxAbs])
    .range([margin.left, margin.left + plotWidth]);

  function formatCorrelation(value) {
    return value.toFixed(3).replace(/\.?0+$/, "");
  }
  const svg = d3.select("#correlationChart");
  svg.selectAll("*").remove();

  svg
    .append("line")
    .attr("class", "axis-line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", margin.top - 8)
    .attr("y2", height - margin.bottom);

  const groups = svg
    .append("g")
    .selectAll("g")
    .data(data.topCorrelations)
    .join("g")
    .attr("transform", (_, index) => `translate(0, ${margin.top + index * (barHeight + gap)})`);

  groups
    .append("text")
    .attr("class", "axis-label")
    .attr("x", margin.left - 10)
    .attr("y", 13)
    .attr("text-anchor", "end")
    .text((item) => item.label);

  groups
    .append("rect")
    .attr("x", (item) => x(Math.min(0, item.value)))
    .attr("y", 0)
    .attr("width", (item) => Math.abs(x(Math.max(0, item.value)) - x(Math.min(0, item.value))))
    .attr("height", barHeight)
    .attr("rx", 9)
    .attr("fill", (item) =>
      item.value >= 0 ? "rgba(15, 118, 110, 0.78)" : "rgba(185, 28, 28, 0.72)"
    );

  groups
    .append("text")
    .attr("class", "axis-label")
    .attr("x", (item) => {
      const start = x(Math.min(0, item.value));
      const end = x(Math.max(0, item.value));
      return item.value >= 0 ? end + 12 : start - 12;
    })
    .attr("y", 13)
    .attr("text-anchor", (item) => (item.value >= 0 ? "start" : "end"))
    .text((item) => formatCorrelation(item.value));
}

function renderAll(rebuildLists = true) {
  const student = getSelectedStudent();
  const baselineSamples = getPredictionSamples(student.values);
  const scenarioSamples = getPredictionSamples(state.scenarioValues);
  const baselineSummary = summarizeSamples(baselineSamples);
  const scenarioSummary = summarizeSamples(scenarioSamples);

  renderHeroMetrics();
  if (rebuildLists) {
    renderStudentList();
  } else {
    renderStudentList();
  }
  renderScoreSummary(student, baselineSummary, scenarioSummary);
  renderPredictionChart(student, baselineSummary, scenarioSummary);
  renderRecommendations(student, state.scenarioValues);
  renderPresets(student);
  renderControls(student);
  renderContext(student);
  renderScatterChart(student);
  renderCorrelationChart();
}

function initialize() {
  setScenarioFromStudent(getSelectedStudent());
  renderAll();
}

initialize();
