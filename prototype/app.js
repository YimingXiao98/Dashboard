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

function buildPath(points, scales, baselineY) {
  return points
    .map((point, index) => {
      const x = scales.x(point.x);
      const y = scales.y(point.y);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function buildAreaPath(points, scales, baselineY) {
  const line = buildPath(points, scales, baselineY);
  const startX = scales.x(points[0].x);
  const endX = scales.x(points[points.length - 1].x);
  return `${line} L ${endX} ${baselineY} L ${startX} ${baselineY} Z`;
}

function scaleLinear(domainMin, domainMax, rangeMin, rangeMax) {
  const domainSpan = domainMax - domainMin;
  const rangeSpan = rangeMax - rangeMin;
  return (value) => rangeMin + ((value - domainMin) / domainSpan) * rangeSpan;
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
  const svg = document.getElementById("predictionChart");
  const width = 860;
  const height = 380;
  const margin = { top: 20, right: 20, bottom: 42, left: 56 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = scaleLinear(45, 100, margin.left, margin.left + plotWidth);
  const y = scaleLinear(0, maxY * 1.15, margin.top + plotHeight, margin.top);

  const xTicks = [50, 60, 70, 80, 90, 100];
  const yTicks = [0, maxY * 0.5, maxY];

  const baselineY = margin.top + plotHeight;
  const baselineArea = buildAreaPath(baselinePoints, { x, y }, baselineY);
  const baselineLine = buildPath(baselinePoints, { x, y }, baselineY);
  const scenarioArea = buildAreaPath(scenarioPoints, { x, y }, baselineY);
  const scenarioLine = buildPath(scenarioPoints, { x, y }, baselineY);

  svg.innerHTML = `
    <rect x="${x(45)}" y="${margin.top}" width="${x(60) - x(45)}" height="${plotHeight}" fill="rgba(185, 28, 28, 0.09)"></rect>
    ${xTicks
      .map(
        (tick) => `
          <line class="grid-line" x1="${x(tick)}" y1="${margin.top}" x2="${x(tick)}" y2="${baselineY}"></line>
          <text class="axis-label" x="${x(tick)}" y="${height - 14}" text-anchor="middle">${tick}</text>
        `
      )
      .join("")}
    ${yTicks
      .map(
        (tick) => `
          <line class="grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${margin.left + plotWidth}" y2="${y(tick)}"></line>
        `
      )
      .join("")}
    <line class="axis-line" x1="${margin.left}" y1="${baselineY}" x2="${margin.left + plotWidth}" y2="${baselineY}"></line>
    <line class="axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${baselineY}"></line>
    <path class="baseline-fill" d="${baselineArea}"></path>
    <path class="scenario-fill" d="${scenarioArea}"></path>
    <path class="baseline-line" d="${baselineLine}"></path>
    <path class="scenario-line" d="${scenarioLine}"></path>
    <line x1="${x(baselineSummary.mean)}" y1="${margin.top}" x2="${x(
      baselineSummary.mean
    )}" y2="${baselineY}" stroke="#d97706" stroke-dasharray="6 6"></line>
    <line x1="${x(scenarioSummary.mean)}" y1="${margin.top}" x2="${x(
      scenarioSummary.mean
    )}" y2="${baselineY}" stroke="#0f766e" stroke-dasharray="6 6"></line>
    <line x1="${x(student.actualScore)}" y1="${margin.top}" x2="${x(
      student.actualScore
    )}" y2="${baselineY}" stroke="#123247" stroke-width="2"></line>
    <text class="chart-title" x="${margin.left}" y="12">Red zone: predicted failing range below 60</text>
    <text class="chart-label" x="${x(60) - 8}" y="${margin.top + 18}" text-anchor="end">Fail threshold</text>
    <text class="chart-label" x="${x(baselineSummary.mean)}" y="${margin.top + 32}" text-anchor="middle">Baseline ${formatNumber(
      baselineSummary.mean
    )}</text>
    <text class="chart-label" x="${x(scenarioSummary.mean)}" y="${margin.top + 48}" text-anchor="middle">Scenario ${formatNumber(
      scenarioSummary.mean
    )}</text>
    <text class="chart-label" x="${x(student.actualScore)}" y="${margin.top + 64}" text-anchor="middle">Actual ${student.actualScore}</text>
    <text class="axis-label" x="${margin.left + plotWidth / 2}" y="${height - 2}" text-anchor="middle">Predicted exam score</text>
    <text class="axis-label" transform="translate(16 ${margin.top + plotHeight / 2}) rotate(-90)" text-anchor="middle">Density from bootstrap predictions</text>
  `;
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
  const svg = document.getElementById("scatterChart");
  const width = 560;
  const height = 300;
  const margin = { top: 16, right: 16, bottom: 36, left: 46 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = scaleLinear(60, 100, margin.left, margin.left + plotWidth);
  const y = scaleLinear(55, 101, margin.top + plotHeight, margin.top);
  const colors = {
    Low: "#b91c1c",
    Medium: "#d97706",
    High: "#0f766e",
  };

  svg.innerHTML = `
    <line class="axis-line" x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${margin.left + plotWidth}" y2="${margin.top + plotHeight}"></line>
    <line class="axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + plotHeight}"></line>
    ${[60, 70, 80, 90, 100]
      .map(
        (tick) => `
          <line class="grid-line" x1="${x(tick)}" y1="${margin.top}" x2="${x(tick)}" y2="${margin.top + plotHeight}"></line>
          <text class="axis-label" x="${x(tick)}" y="${height - 12}" text-anchor="middle">${tick}</text>
        `
      )
      .join("")}
    ${[55, 65, 75, 85, 95]
      .map(
        (tick) => `
          <line class="grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${margin.left + plotWidth}" y2="${y(tick)}"></line>
          <text class="axis-label" x="${margin.left - 8}" y="${y(tick) + 4}" text-anchor="end">${tick}</text>
        `
      )
      .join("")}
    ${data.cohortScatter
      .map(
        (point) => `
          <circle cx="${x(point.attendance)}" cy="${y(point.score)}" r="4" fill="${colors[point.parentalInvolvement]}" opacity="0.38"></circle>
        `
      )
      .join("")}
    <line x1="${x(student.values.Attendance)}" y1="${margin.top}" x2="${x(student.values.Attendance)}" y2="${margin.top + plotHeight}" stroke="#123247" stroke-dasharray="5 5"></line>
    <line x1="${margin.left}" y1="${y(student.actualScore)}" x2="${margin.left + plotWidth}" y2="${y(student.actualScore)}" stroke="#123247" stroke-dasharray="5 5"></line>
    <circle cx="${x(student.values.Attendance)}" cy="${y(student.actualScore)}" r="7" fill="#123247"></circle>
    <text class="axis-label" x="${margin.left + plotWidth / 2}" y="${height - 2}" text-anchor="middle">Attendance</text>
    <text class="axis-label" transform="translate(16 ${margin.top + plotHeight / 2}) rotate(-90)" text-anchor="middle">Exam score</text>
  `;
}

function renderCorrelationChart() {
  const svg = document.getElementById("correlationChart");
  const width = 560;
  const height = 300;
  const margin = { top: 18, right: 16, bottom: 28, left: 180 };
  const plotWidth = width - margin.left - margin.right;
  const barHeight = 18;
  const gap = 8;
  const maxAbs = Math.max(...data.topCorrelations.map((item) => Math.abs(item.value)));
  const x = scaleLinear(-maxAbs, maxAbs, margin.left, margin.left + plotWidth);

  svg.innerHTML = `
    <line class="axis-line" x1="${x(0)}" y1="${margin.top - 8}" x2="${x(0)}" y2="${height - margin.bottom}"></line>
    ${data.topCorrelations
      .map((item, index) => {
        const y = margin.top + index * (barHeight + gap);
        const start = x(Math.min(0, item.value));
        const end = x(Math.max(0, item.value));
        const widthValue = Math.abs(end - start);
        const fill = item.value >= 0 ? "rgba(15, 118, 110, 0.78)" : "rgba(185, 28, 28, 0.72)";
        return `
          <text class="axis-label" x="${margin.left - 10}" y="${y + 13}" text-anchor="end">${item.label}</text>
          <rect x="${start}" y="${y}" width="${widthValue}" height="${barHeight}" rx="9" fill="${fill}"></rect>
          <text class="axis-label" x="${end + (item.value >= 0 ? 8 : -8)}" y="${y + 13}" text-anchor="${
            item.value >= 0 ? "start" : "end"
          }">${item.value}</text>
        `;
      })
      .join("")}
  `;
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
