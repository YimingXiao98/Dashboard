const data = window.PROTOTYPE_DATA;
const PASSING_THRESHOLD = 60;
const ACTIONABLE_MUTABILITY = new Set(["high", "medium"]);

const state = {
  selectedStudentId: data.defaultStudentId,
  scenarioValues: {},
  lastAction: null,
};

const featureLookup = Object.fromEntries(
  data.features.map((feature) => [feature.key, feature]),
);
const studentLookup = Object.fromEntries(
  data.students.map((student) => [student.id, student]),
);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatNumber(value, digits = 1) {
  return Number(value).toFixed(digits);
}

function formatPercent(value, digits = 0) {
  return `${(value * 100).toFixed(digits)}%`;
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
  state.lastAction = null;
}

function formatFeatureValue(featureKey, value) {
  const feature = featureLookup[featureKey];
  if (!feature) {
    return String(value);
  }
  if (feature.type === "numeric" && feature.unit) {
    return feature.unit === "%"
      ? `${value}${feature.unit}`
      : `${value} ${feature.unit}`;
  }
  return String(value);
}

function isFeatureChanged(student, featureKey) {
  const baselineValue = student.values[featureKey];
  const currentValue = state.scenarioValues[featureKey];
  return baselineValue !== currentValue;
}

function getChangedFeatureKeys(student) {
  return data.features
    .filter(
      (feature) =>
        ACTIONABLE_MUTABILITY.has(feature.mutable) &&
        isFeatureChanged(student, feature.key),
    )
    .map((feature) => feature.key);
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
  const shifted = clamp(
    mapping[currentValue] + delta,
    0,
    Object.keys(mapping).length - 1,
  );
  return reverseMap[String(shifted)];
}

function predictWithModel(values, model) {
  let score = model.intercept;
  data.model.featureOrder.forEach((featureKey) => {
    score +=
      model.coefficients[featureKey] *
      encodeValue(featureKey, values[featureKey]);
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
  const failProbability =
    samples.filter((value) => value < PASSING_THRESHOLD).length /
    samples.length;
  return { mean, low, high, failProbability };
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
  const currentPrediction = predictWithModel(scenarioValues, data.model);
  const items = data.features
    .filter((feature) => ACTIONABLE_MUTABILITY.has(feature.mutable))
    .map((feature) => {
      const currentValue = scenarioValues[feature.key];
      const nextValue = decodeShiftedValue(feature.key, currentValue, 1);
      if (nextValue === currentValue) {
        return null;
      }

      const shiftedScenario = deepCopy(scenarioValues);
      shiftedScenario[feature.key] = nextValue;
      const delta =
        predictWithModel(shiftedScenario, data.model) - currentPrediction;

      return {
        key: feature.key,
        label: feature.label,
        nextValue,
        delta,
        mutable: feature.mutable,
      };
    })
    .filter((item) => item && item.delta > 0.01)
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
      `,
    )
    .join("");
}

function renderStudentList() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = data.students
    .map((student) => {
      const activeClass =
        student.id === state.selectedStudentId ? "active" : "";
      return `
        <button class="student-card ${activeClass}" data-student-id="${student.id}">
          <div class="student-card-top">
            <div>
              <div class="student-card-name">${student.name}</div>
              <div class="student-card-score">Actual ${student.actualScore} | Predicted ${formatNumber(
                student.predictedScore,
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
  const failRiskDelta =
    (scenarioSummary.failProbability - baselineSummary.failProbability) * 100;
  const failRiskDeltaClass =
    failRiskDelta <= 0 ? "delta-positive" : "delta-negative";
  const changedCount = getChangedFeatureKeys(student).length;
  document.getElementById("scoreSummary").innerHTML = `
    <div class="score-tile">
      <strong>${student.actualScore}</strong>
      <span>Actual exam score</span>
      <div class="score-meta">
        <div>
          <label>Baseline expected</label>
          <b>${formatNumber(baselineSummary.mean)}</b>
        </div>
        <div>
          <label>Observed band</label>
          <b>${student.riskBand}</b>
        </div>
      </div>
    </div>
    <div class="score-tile">
      <strong>${formatNumber(scenarioSummary.mean)}</strong>
      <span>Scenario expected score</span>
      <div class="score-meta">
        <div>
          <label>90% interval</label>
          <b>${formatNumber(scenarioSummary.low)} to ${formatNumber(scenarioSummary.high)}</b>
        </div>
        <div>
          <label>Risk below ${PASSING_THRESHOLD}</label>
          <b>${formatPercent(scenarioSummary.failProbability)}</b>
        </div>
      </div>
    </div>
    <div class="score-tile">
      <strong><span class="delta-pill ${deltaClass}">${delta >= 0 ? "+" : ""}${formatNumber(delta)}</span></strong>
      <span>Lift from current intervention plan</span>
      <div class="score-meta">
        <div>
          <label>Fail-risk change</label>
          <span class="tag-pill ${failRiskDeltaClass}">
            ${failRiskDelta > 0 ? "+" : ""}${formatNumber(failRiskDelta, 0)} pts
          </span>
        </div>
        <div>
          <label>Changed levers</label>
          <b>${changedCount}</b>
        </div>
      </div>
    </div>
  `;
}

function renderScenarioFeedback(student) {
  const feedback = document.getElementById("scenarioFeedback");
  const changedKeys = getChangedFeatureKeys(student);
  const changedCount = changedKeys.length;

  if (!state.lastAction) {
    feedback.className = `scenario-feedback ${changedCount === 0 ? "is-neutral" : "is-edited"}`;
    feedback.innerHTML =
      changedCount === 0
        ? `<strong>Scenario is at baseline.</strong><span>Use a preset, adjust a control, or apply a suggested lever to compare an intervention plan.</span>`
        : `<strong>Scenario has ${changedCount} edited ${changedCount === 1 ? "lever" : "levers"}.</strong><span>Scroll through the control band to review what differs from baseline.</span>`;
    return;
  }

  feedback.className = `scenario-feedback ${state.lastAction.tone || "is-edited"}`;
  feedback.innerHTML = `
    <strong>${state.lastAction.title}</strong>
    <span>${state.lastAction.message}</span>
  `;
}

function renderPredictionChart(
  student,
  baselineSamples,
  scenarioSamples,
  baselineSummary,
  scenarioSummary,
) {
  const baselinePoints = buildDensity(baselineSamples);
  const scenarioPoints = buildDensity(scenarioSamples);
  const maxY = Math.max(
    ...baselinePoints.map((point) => point.y),
    ...scenarioPoints.map((point) => point.y),
  );
  const width = 860;
  const height = 430;
  const margin = { top: 22, right: 20, bottom: 46, left: 58 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = d3
    .scaleLinear()
    .domain([45, 100])
    .range([margin.left, margin.left + plotWidth]);
  const y = d3
    .scaleLinear()
    .domain([0, maxY * 1.15])
    .range([margin.top + plotHeight, margin.top]);
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

  svg
    .append("path")
    .datum(baselinePoints)
    .attr("class", "baseline-fill")
    .attr("d", area);
  svg
    .append("path")
    .datum(scenarioPoints)
    .attr("class", "scenario-fill")
    .attr("d", area);
  svg
    .append("path")
    .datum(baselinePoints)
    .attr("class", "baseline-line")
    .attr("d", line);
  svg
    .append("path")
    .datum(scenarioPoints)
    .attr("class", "scenario-line")
    .attr("d", line);

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
    .attr("y", height - 16)
    .attr("text-anchor", "middle")
    .text((tick) => tick);

  svg
    .append("text")
    .attr("class", "chart-title")
    .attr("x", margin.left)
    .attr("y", 12)
    .text("Red zone: predicted failing range below 60");

  const legendItems = [
    {
      color: "#b91c1c",
      dash: "6 3",
      text: "Fail threshold (60)",
      strokeWidth: 1.5,
    },
    {
      color: "#d97706",
      dash: "6 6",
      text: `Baseline ${formatNumber(baselineSummary.mean)}`,
      strokeWidth: 2,
    },
    {
      color: "#0f766e",
      dash: "6 6",
      text: `Scenario ${formatNumber(scenarioSummary.mean)}`,
      strokeWidth: 2,
    },
    {
      color: "#123247",
      dash: null,
      text: `Actual ${student.actualScore}`,
      strokeWidth: 2,
    },
  ];

  const legendX = margin.left + plotWidth - 8;
  const legendLineX1 = legendX - 148;
  const legendLineX2 = legendX - 122;
  const legendTextX = legendX - 116;
  const legendStartY = margin.top + 20;
  const legendGap = 22;

  svg
    .append("rect")
    .attr("x", legendLineX1 - 10)
    .attr("y", legendStartY - 14)
    .attr("width", legendX - legendLineX1 + 18)
    .attr("height", legendItems.length * legendGap + 4)
    .attr("rx", 8)
    .attr("fill", "rgba(255,251,245,0.82)")
    .attr("stroke", "rgba(31,41,51,0.10)")
    .attr("stroke-width", 1);

  legendItems.forEach((item, i) => {
    const ly = legendStartY + i * legendGap;
    const line = svg
      .append("line")
      .attr("x1", legendLineX1)
      .attr("x2", legendLineX2)
      .attr("y1", ly)
      .attr("y2", ly)
      .attr("stroke", item.color)
      .attr("stroke-width", item.strokeWidth);
    if (item.dash) line.attr("stroke-dasharray", item.dash);

    svg
      .append("text")
      .attr("class", "chart-label")
      .attr("x", legendTextX)
      .attr("y", ly + 5)
      .attr("text-anchor", "start")
      .text(item.text);
  });

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("x", margin.left + plotWidth / 2)
    .attr("y", height - 4)
    .attr("text-anchor", "middle")
    .text("Predicted exam score");

  svg
    .append("text")
    .attr("class", "axis-label")
    .attr(
      "transform",
      `translate(16 ${margin.top + plotHeight / 2}) rotate(-90)`,
    )
    .attr("text-anchor", "middle")
    .text("Density from bootstrap predictions");
}

function renderRecommendations(student, scenarioValues) {
  const recommendations = buildRecommendations(student, scenarioValues);
  document.getElementById("recommendations").innerHTML = recommendations.length
    ? recommendations
        .map(
          (item, index) => `
            <div class="recommendation-card">
              <div class="recommendation-card-header">
                <strong>${index + 1}. ${item.label}</strong>
                <span class="tag-pill ${item.delta >= 0 ? "delta-positive" : "delta-negative"}">
                  ${item.delta >= 0 ? "+" : ""}${formatNumber(item.delta)}
                </span>
              </div>
              <p>set to <strong>${item.nextValue}</strong></p>
              <div class="recommendation-actions">
                <button class="recommendation-apply" data-recommendation-index="${index}">
                  Apply This Lever
                </button>
              </div>
            </div>
          `,
        )
        .join("")
    : `
      <div class="recommendation-card recommendation-card-empty">
        <strong>No higher-value actionable levers remain.</strong>
        <p>The current scenario is already using the available editable variables near their helpful range.</p>
      </div>
    `;

  document.querySelectorAll("[data-recommendation-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const recommendation =
        recommendations[Number(button.dataset.recommendationIndex)];
      const previousValue = state.scenarioValues[recommendation.key];
      state.scenarioValues[recommendation.key] = recommendation.nextValue;
      const changedCount = getChangedFeatureKeys(student).length;
      state.lastAction = {
        tone: "is-success",
        featureKey: recommendation.key,
        title: `Applied recommendation: ${recommendation.label}`,
        message: `${recommendation.label} moved from ${formatFeatureValue(
          recommendation.key,
          previousValue,
        )} to ${formatFeatureValue(recommendation.key, recommendation.nextValue)}. ${changedCount} ${
          changedCount === 1 ? "lever now differs" : "levers now differ"
        } from baseline.`,
      };
      renderAll(false);
    });
  });

  document.getElementById("coefficientList").innerHTML =
    data.model.coefficientSummary
      .slice(0, 5)
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
      `,
      )
      .join("");
}

function renderControls(student) {
  const controlsGrid = document.getElementById("controlsGrid");
  controlsGrid.innerHTML = data.features
    .filter((feature) => ACTIONABLE_MUTABILITY.has(feature.mutable))
    .map((feature) => {
      const baselineValue = student.values[feature.key];
      const currentValue = state.scenarioValues[feature.key];
      const isChanged = baselineValue !== currentValue;
      const isLastTouched = state.lastAction?.featureKey === feature.key;
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
          <div class="control-side">
            <span class="tag-pill control-state ${isChanged ? "delta-positive" : ""}">
              ${isChanged ? "Edited" : "Baseline"}
            </span>
            <div class="control-value">${formatFeatureValue(feature.key, currentValue)}</div>
          </div>
        </div>
      `;

      if (feature.type === "numeric") {
        return `
          <div class="control-card ${isChanged ? "changed" : ""} ${isLastTouched ? "focused" : ""}">
            ${header}
            <input
              type="range"
              min="${feature.min}"
              max="${feature.max}"
              step="${feature.step}"
              value="${currentValue}"
              data-feature="${feature.key}"
            />
            <p>Baseline: ${formatFeatureValue(feature.key, baselineValue)}</p>
          </div>
        `;
      }

      return `
        <div class="control-card ${isChanged ? "changed" : ""} ${isLastTouched ? "focused" : ""}">
          ${header}
          <select data-feature="${feature.key}">
            ${feature.options
              .map(
                (option) =>
                  `<option value="${option}" ${option === currentValue ? "selected" : ""}>${option}</option>`,
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
      const previousValue = state.scenarioValues[featureKey];
      state.scenarioValues[featureKey] =
        feature.type === "numeric"
          ? Number(event.target.value)
          : event.target.value;
      const changedCount = getChangedFeatureKeys(student).length;
      state.lastAction = {
        tone: "is-edited",
        featureKey,
        title: `Updated scenario: ${feature.label}`,
        message: `${feature.label} changed from ${formatFeatureValue(featureKey, previousValue)} to ${formatFeatureValue(
          featureKey,
          state.scenarioValues[featureKey],
        )}. ${changedCount} ${changedCount === 1 ? "lever now differs" : "levers now differ"} from baseline.`,
      };
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
        `,
      )
      .join("") +
    `<button class="reset-button" id="resetScenario">Reset to baseline</button>`;

  presetBar.querySelectorAll("[data-preset-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = data.presets.find(
        (item) => item.id === button.dataset.presetId,
      );
      const nextValues = deepCopy(student.values);
      Object.entries(preset.changes).forEach(([featureKey, delta]) => {
        nextValues[featureKey] = decodeShiftedValue(
          featureKey,
          nextValues[featureKey],
          delta,
        );
      });
      state.scenarioValues = nextValues;
      const changedCount = getChangedFeatureKeys(student).length;
      state.lastAction = {
        tone: "is-success",
        title: `Applied preset: ${preset.label}`,
        message: `${preset.description}. ${changedCount} ${
          changedCount === 1 ? "lever now differs" : "levers now differ"
        } from baseline.`,
      };
      renderAll(false);
    });
  });

  document.getElementById("resetScenario").addEventListener("click", () => {
    setScenarioFromStudent(student);
    state.lastAction = {
      tone: "is-neutral",
      title: "Scenario reset to baseline",
      message:
        "The editable controls now match the selected student's original values again.",
    };
    renderAll(false);
  });
}

function renderContext(student) {
  const contextKeys = [
    ...new Set([
      ...data.contextKeys,
      ...data.features
        .filter((feature) => !ACTIONABLE_MUTABILITY.has(feature.mutable))
        .map((feature) => feature.key),
    ]),
  ];

  document.getElementById("contextGrid").innerHTML = contextKeys
    .map(
      (key) => `
        <div class="context-card">
          <div class="context-card-header">
            <strong>${data.labels[key]}</strong>
            <span class="tag-pill">${student.values[key]}</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderScatterChart(student) {
  const width = 560;
  const height = 300;
  const margin = { top: 16, right: 16, bottom: 36, left: 46 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = d3
    .scaleLinear()
    .domain([60, 100])
    .range([margin.left, margin.left + plotWidth]);
  const y = d3
    .scaleLinear()
    .domain([55, 101])
    .range([margin.top + plotHeight, margin.top]);
  const colors = {
    Low: "#b91c1c",
    Medium: "#d97706",
    High: "#0f766e",
  };
  const svg = d3.select("#scatterChart");
  svg.selectAll("*").remove();

  const tooltip = document.getElementById("tooltip");
  const svgEl = document.getElementById("scatterChart");

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
    .attr("opacity", 0.38)
    .style("cursor", "pointer")
    .on("mouseenter", function (event, d) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("r", 7)
        .attr("opacity", 0.85);
      tooltip.innerHTML = `<span style="color:#888">Attendance</span> <strong>${d.attendance.toFixed(1)}</strong><br><span style="color:#888">Score</span> <strong>${d.score.toFixed(1)}</strong>`;
      tooltip.style.opacity = "1";
    })
    .on("mousemove", function (event) {
      const rect = svgEl.getBoundingClientRect();
      const ex = event.clientX - rect.left;
      const ey = event.clientY - rect.top;
      const tw = tooltip.offsetWidth;
      tooltip.style.left =
        (ex + 12 + tw > rect.width ? ex - tw - 12 : ex + 12) + "px";
      tooltip.style.top = ey - 36 + "px";
    })
    .on("mouseleave", function () {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("r", 4)
        .attr("opacity", 0.38);
      tooltip.style.opacity = "0";
    });
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
    .attr("fill", "#123247")
    .style("cursor", "pointer")
    .on("mouseenter", function (event) {
      d3.select(this).transition().duration(100).attr("r", 10);
      tooltip.innerHTML = `<span style="color:#888">Attendance</span> <strong>${student.values.Attendance}</strong><br><span style="color:#888">Score</span> <strong>${student.actualScore}</strong>`;
      tooltip.style.opacity = "1";
    })
    .on("mousemove", function (event) {
      const rect = svgEl.getBoundingClientRect();
      const ex = event.clientX - rect.left;
      const ey = event.clientY - rect.top;
      const tw = tooltip.offsetWidth;
      tooltip.style.left =
        (ex + 12 + tw > rect.width ? ex - tw - 12 : ex + 12) + "px";
      tooltip.style.top = ey - 36 + "px";
    })
    .on("mouseleave", function () {
      d3.select(this).transition().duration(100).attr("r", 7);
      tooltip.style.opacity = "0";
    });

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
    .attr(
      "transform",
      `translate(16 ${margin.top + plotHeight / 2}) rotate(-90)`,
    )
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

  const minVal = Math.min(...data.topCorrelations.map((d) => d.value));
  const maxVal = Math.max(...data.topCorrelations.map((d) => d.value));

  const leftPad = 1.15;
  const rightPad = 1.08;
  // amke the coorelation bar fill the chart
  const x = d3
    .scaleLinear()
    .domain([minVal * leftPad, maxVal * rightPad])
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
    .attr(
      "transform",
      (_, index) => `translate(0, ${margin.top + index * (barHeight + gap)})`,
    );

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
    .attr("width", (item) =>
      Math.abs(x(Math.max(0, item.value)) - x(Math.min(0, item.value))),
    )
    .attr("height", barHeight)
    .attr("rx", 9)
    .attr("fill", (item) =>
      item.value >= 0 ? "rgba(15, 118, 110, 0.78)" : "rgba(185, 28, 28, 0.72)",
    );

  groups
    .append("text")
    .attr("class", "axis-label")
    .attr("x", (item) => x(Math.max(0, item.value)) + 12)
    .attr("text-anchor", "start")
    .attr("y", 13)
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
  renderScenarioFeedback(student);
  renderPredictionChart(
    student,
    baselineSamples,
    scenarioSamples,
    baselineSummary,
    scenarioSummary,
  );
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
