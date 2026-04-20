/* Intervention Studio — vanilla JS + D3 */

const data = window.PROTOTYPE_DATA;
const PASSING = 60;
const ACTIONABLE = new Set(["high", "medium"]);
// Keys the school/teacher can't realistically intervene on — hidden from the lever UI
const NON_INTERVENABLE = new Set([
  "Sleep_Hours",
  "Physical_Activity",
  "Motivation_Level",
  "Parental_Involvement",
]);
const isLever = f => ACTIONABLE.has(f.mutable) && !NON_INTERVENABLE.has(f.key);
const DENSITY_BW = 1.8;
const THEME_KEY = "is-theme-v2";

const state = {
  studentId: data.defaultStudentId || data.students[0].id,
  scenario: {},
  lastAction: null,
  search: "",
  theme: "light",
};

const featureLookup = Object.fromEntries(data.features.map(f => [f.key, f]));
const corrLookup = Object.fromEntries((data.topCorrelations || []).map(e => [e.key, e.value]));
const studentLookup = Object.fromEntries(data.students.map(s => [s.id, s]));

/* ---------- utils ---------- */
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const fmt = (v, d = 1) => Number(v).toFixed(d);
const pct = (v, d = 0) => `${(v * 100).toFixed(d)}%`;
const deepCopy = v => JSON.parse(JSON.stringify(v));

function encode(key, value) {
  const m = data.maps[key];
  return m ? m[value] : Number(value);
}

function decodeShift(key, cur, delta) {
  const f = featureLookup[key];
  if (f.type === "numeric") return clamp(Number(cur) + delta, f.min, f.max);
  const m = data.maps[key], rm = data.reverseMaps[key];
  const shifted = clamp(m[cur] + delta, 0, Object.keys(m).length - 1);
  return rm[String(shifted)];
}

function predict(values, model) {
  let s = model.intercept;
  data.model.featureOrder.forEach(k => {
    s += model.coefficients[k] * encode(k, values[k]);
  });
  return s;
}

function samples(values) {
  return data.model.bootstrap.map(m => predict(values, m));
}

function summarize(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mean = sorted.reduce((a, b) => a + b, 0) / sorted.length;
  const low = sorted[Math.floor(sorted.length * 0.05)];
  const high = sorted[Math.floor(sorted.length * 0.95)];
  const fail = arr.filter(v => v < PASSING).length / arr.length;
  return { mean, low, high, fail };
}

function density(arr) {
  const pts = [];
  const norm = arr.length * DENSITY_BW * Math.sqrt(2 * Math.PI);
  for (let x = 40; x <= 105; x += 0.25) {
    let d = 0;
    for (const s of arr) {
      const z = (x - s) / DENSITY_BW;
      d += Math.exp(-0.5 * z * z);
    }
    pts.push({ x, y: d / norm });
  }
  return pts;
}

/* ---------- theme ---------- */
function applyTheme(t) {
  state.theme = t;
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem(THEME_KEY, t); } catch {}
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = t === "light" ? "Dark" : "Light";
}
function initTheme() {
  let t = "light";
  try { t = localStorage.getItem(THEME_KEY) || "light"; } catch {}
  applyTheme(t);
  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(state.theme === "light" ? "dark" : "light");
    renderAll();
  });
}

/* ---------- header stats ---------- */
function renderMeta() {
  document.getElementById("metaRows").textContent = data.meta.rows.toLocaleString();
  document.getElementById("metaR2").textContent = fmt(data.model.rSquared, 3);
  document.getElementById("metaBoot").textContent = data.model.bootstrap.length;
}

/* ---------- roster ---------- */
function setStudent(id) {
  const s = studentLookup[id];
  if (!s) return;
  state.studentId = id;
  state.scenario = deepCopy(s.values);
  state.lastAction = null;
  renderAll();
}

function renderRoster() {
  const list = document.getElementById("rosterList");
  const q = state.search.trim().toLowerCase();
  const items = data.students
    .filter(s => !q || s.name.toLowerCase().includes(q) || s.riskBand.toLowerCase().includes(q));

  list.innerHTML = items.map(s => {
    const band = s.riskBand.toLowerCase();
    const bandClass = band === "critical" ? "critical" : band === "watch" ? "watch" : "stable";
    const pct = clamp(s.predictedScore, 30, 100);
    return `
      <button class="rs-item ${s.id === state.studentId ? "active" : ""}" data-id="${s.id}">
        <div>
          <div class="rs-name">${s.name}</div>
          <div class="rs-meta">actual ${s.actualScore} · pred ${fmt(s.predictedScore)}</div>
        </div>
        <span class="rs-band ${bandClass}">${s.riskBand}</span>
        <div class="rs-bar">
          <i style="width: ${pct}%"></i>
          <span class="fail-mark" style="left: ${PASSING}%"></span>
        </div>
      </button>
    `;
  }).join("");

  list.querySelectorAll(".rs-item").forEach(btn => {
    btn.addEventListener("click", () => setStudent(btn.dataset.id));
  });
}

/* ---------- headline ---------- */
function renderHeadline(student, base, scen) {
  document.getElementById("studentTitle").textContent = student.name;
  const changed = changedKeys(student).length;
  document.getElementById("studentSubline").textContent =
    `${student.riskBand.toUpperCase()} · ${changed} lever${changed === 1 ? "" : "s"} edited · actual ${student.actualScore}`;

  document.getElementById("scoreActual").textContent = student.actualScore;
  document.getElementById("scoreBaseline").textContent = fmt(base.mean);
  document.getElementById("scoreScenario").textContent = fmt(scen.mean);

  const delta = scen.mean - base.mean;
  const de = document.getElementById("scoreDelta");
  de.textContent = `${delta >= 0 ? "+" : ""}${fmt(delta)}`;
  de.className = "score-delta " + (delta > 0.05 ? "up" : delta < -0.05 ? "down" : "");

  document.getElementById("scoreFail").textContent = pct(scen.fail);
  const fd = (scen.fail - base.fail) * 100;
  const fe = document.getElementById("failDelta");
  fe.textContent = `${fd >= 0 ? "+" : ""}${fmt(fd, 1)}pp`;
  fe.className = "score-delta " + (fd < -0.1 ? "up" : fd > 0.1 ? "down" : "");
}

/* ---------- diff ribbon ---------- */
function renderDiff(student) {
  const el = document.getElementById("diffRibbon");
  const keys = changedKeys(student);
  if (!keys.length) {
    el.innerHTML = `<span class="diff-empty">Scenario matches baseline. Adjust a lever below or apply a suggestion →</span>`;
    return;
  }
  el.innerHTML = keys.map(k => {
    const f = featureLookup[k];
    const a = formatVal(k, student.values[k]);
    const b = formatVal(k, state.scenario[k]);
    return `<span class="diff-chip">${f.label} <span class="arrow">·</span> ${a} <span class="arrow">→</span> <b>${b}</b></span>`;
  }).join("");
}

/* ---------- hero chart ---------- */
function renderHero(student, baseArr, scenArr, base, scen) {
  const svg = d3.select("#heroChart");
  svg.selectAll("*").remove();

  const W = 960, H = 380;
  const M = { top: 40, right: 36, bottom: 64, left: 52 };
  const pw = W - M.left - M.right;
  const ph = H - M.top - M.bottom;

  const basePts = density(baseArr);
  const scenPts = density(scenArr);
  const maxY = Math.max(...basePts.map(p => p.y), ...scenPts.map(p => p.y));

  const x = d3.scaleLinear().domain([50, 80]).range([M.left, M.left + pw]);
  const y = d3.scaleLinear().domain([0, maxY * 1.18]).range([M.top + ph, M.top]);

  // fail zone
  svg.append("rect")
    .attr("class", "fail-zone")
    .attr("x", x(50)).attr("y", M.top)
    .attr("width", x(PASSING) - x(50)).attr("height", ph);

  svg.append("text")
    .attr("class", "fail-label")
    .attr("x", x(50) + 6).attr("y", M.top + 12)
    .attr("font-size", 9)
    .text("Fail zone");

  // grid
  const xTicks = [50, 55, 60, 65, 70, 75, 80];
  const g = svg.append("g").attr("class", "grid");
  xTicks.forEach(t => {
    g.append("line")
      .attr("x1", x(t)).attr("x2", x(t))
      .attr("y1", M.top).attr("y2", M.top + ph);
  });

  // baseline / axis
  svg.append("line").attr("class", "axis-line")
    .attr("x1", M.left).attr("x2", M.left + pw)
    .attr("y1", M.top + ph).attr("y2", M.top + ph)
    .attr("stroke", "var(--line-2)");

  // areas + lines
  const line = d3.line().x(p => x(p.x)).y(p => y(p.y)).curve(d3.curveCatmullRom.alpha(0.5));
  const area = d3.area().x(p => x(p.x)).y0(M.top + ph).y1(p => y(p.y)).curve(d3.curveCatmullRom.alpha(0.5));

  svg.append("path").datum(basePts).attr("class", "baseline-area").attr("d", area);
  svg.append("path").datum(scenPts).attr("class", "scenario-area").attr("d", area);
  svg.append("path").datum(basePts).attr("class", "baseline-line").attr("d", line);
  const scenPath = svg.append("path").datum(scenPts).attr("class", "scenario-line").attr("d", line);

  // animate scenario path length
  const total = scenPath.node().getTotalLength();
  scenPath
    .attr("stroke-dasharray", total)
    .attr("stroke-dashoffset", total)
    .transition().duration(540).ease(d3.easeCubicOut)
    .attr("stroke-dashoffset", 0);

  // x-axis labels
  svg.append("g").selectAll("text")
    .data(xTicks)
    .join("text")
    .attr("class", "axis-label")
    .attr("x", d => x(d))
    .attr("y", M.top + ph + 18)
    .attr("text-anchor", "middle")
    .text(d => d);

  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", M.left + pw / 2)
    .attr("y", H - 4)
    .attr("text-anchor", "middle")
    .attr("font-size", 10)
    .text("PREDICTED EXAM SCORE");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", `translate(16 ${M.top + ph / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", 10)
    .text("DENSITY · BOOTSTRAP PREDICTIONS");

  // markers
  function marker(val, cls, label, labelClass, above = true) {
    svg.append("line")
      .attr("class", `mean-marker ${cls}`)
      .attr("x1", x(val)).attr("x2", x(val))
      .attr("y1", M.top).attr("y2", M.top + ph);

    const labelY = above ? M.top - 16 : M.top + ph + 32;
    const labelX = x(val);
    const padH = 6, padV = 3;
    const text = `${label} ${fmt(val)}`;
    const approxW = text.length * 6.5 + padH * 2;

    svg.append("rect")
      .attr("x", labelX - approxW / 2)
      .attr("y", labelY - 11)
      .attr("width", approxW)
      .attr("height", 16)
      .attr("rx", 3)
      .attr("fill", "var(--paper-2)")
      .attr("stroke", "var(--line)");

    svg.append("text")
      .attr("class", `marker-label ${labelClass}`)
      .attr("x", labelX)
      .attr("y", labelY)
      .attr("text-anchor", "middle")
      .text(text);
  }

  // stack labels to avoid overlap — when too close, merge into one label
  const delta = scen.mean - base.mean;
  const nearZero = Math.abs(delta) < 0.15;
  const tooClose = Math.abs(delta) < 2.5;

  if (nearZero) {
    // draw a single combined marker
    marker(base.mean, "scen", "BASE = SCEN", "scen", true);
  } else if (tooClose) {
    // stagger: lower value above, higher value below
    const ordered = [
      { v: base.mean, c: "base", label: "BASELINE", cls: "base" },
      { v: scen.mean, c: "scen", label: "SCENARIO", cls: "scen" },
    ].sort((a, b) => a.v - b.v);
    marker(ordered[0].v, ordered[0].c, ordered[0].label, ordered[0].cls, true);
    // second label below, but above the actual-marker row
    markerBelow(ordered[1].v, ordered[1].c, ordered[1].label, ordered[1].cls);
  } else {
    marker(base.mean, "base", "BASELINE", "base", true);
    marker(scen.mean, "scen", "SCENARIO", "scen", true);
  }

  // helper for below-the-chart secondary label (row 1, above actual row)
  function markerBelow(val, cls, label, labelClass) {
    svg.append("line")
      .attr("class", `mean-marker ${cls}`)
      .attr("x1", x(val)).attr("x2", x(val))
      .attr("y1", M.top).attr("y2", M.top + ph);
    const labelY = M.top + ph + 16;
    const text = `${label} ${fmt(val)}`;
    const approxW = text.length * 6.5 + 12;
    svg.append("rect")
      .attr("x", x(val) - approxW / 2)
      .attr("y", labelY - 11)
      .attr("width", approxW).attr("height", 16).attr("rx", 3)
      .attr("fill", "var(--paper-2)").attr("stroke", "var(--line)");
    svg.append("text")
      .attr("class", `marker-label ${labelClass}`)
      .attr("x", x(val)).attr("y", labelY)
      .attr("text-anchor", "middle")
      .text(text);
  }

  // actual score — placed on a dedicated row further below so it doesn't collide with tick labels
  svg.append("line")
    .attr("class", "actual-marker")
    .attr("x1", x(student.actualScore)).attr("x2", x(student.actualScore))
    .attr("y1", M.top).attr("y2", M.top + ph);

  const actualY = M.top + ph + 34;
  const actualText = `ACTUAL ${student.actualScore}`;
  const actualW = actualText.length * 6.5 + 14;
  svg.append("rect")
    .attr("x", x(student.actualScore) - actualW / 2)
    .attr("y", actualY - 11)
    .attr("width", actualW).attr("height", 16).attr("rx", 3)
    .attr("fill", "var(--ink)").attr("stroke", "var(--ink)");

  svg.append("text")
    .attr("class", "marker-label actual")
    .attr("x", x(student.actualScore))
    .attr("y", actualY)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--paper)")
    .text(actualText);
}

/* ---------- lever impact ---------- */
function buildImpact(student) {
  const curPred = predict(state.scenario, data.model);
  const items = data.features
    .filter(isLever)
    .map(f => {
      const cur = state.scenario[f.key];
      const next = decodeShift(f.key, cur, 1);
      if (next === cur) return null;
      const shift = deepCopy(state.scenario);
      shift[f.key] = next;
      const delta = predict(shift, data.model) - curPred;
      return { key: f.key, label: f.label, next, delta };
    })
    .filter(x => x && x.delta > 0.01)
    .sort((a, b) => b.delta - a.delta);
  return items;
}

function renderImpact(student) {
  const items = buildImpact(student);
  const list = document.getElementById("impactList");
  if (!items.length) {
    list.innerHTML = `<div class="impact-empty">No positive +1 moves remain — this scenario is near the actionable ceiling.</div>`;
    return;
  }
  const maxDelta = items[0].delta;
  list.innerHTML = items.slice(0, 5).map((it, i) => `
    <div class="impact-row" data-apply="${it.key}">
      <div class="impact-rank">${String(i + 1).padStart(2, "0")}</div>
      <div class="impact-main">
        <div class="impact-label">${it.label} <span class="next">→ ${formatVal(it.key, it.next)}</span></div>
        <div class="impact-bar"><i style="width: ${(it.delta / maxDelta) * 100}%"></i></div>
      </div>
      <div class="impact-right">
        <div class="impact-delta">+${fmt(it.delta, 2)}</div>
        <button class="impact-apply" type="button">Apply</button>
      </div>
    </div>
  `).join("");

  list.querySelectorAll("[data-apply]").forEach(row => {
    row.addEventListener("click", () => applyLever(row.dataset.apply));
  });
}

function applyLever(key) {
  const student = studentLookup[state.studentId];
  const cur = state.scenario[key];
  const next = decodeShift(key, cur, 1);
  state.scenario[key] = next;
  state.lastAction = { key };
  renderAll();
  const card = document.querySelector(`.ctrl[data-key="${key}"]`);
  if (card) {
    card.classList.add("pulse");
    setTimeout(() => card.classList.remove("pulse"), 450);
  }
}

/* ---------- coefficients ---------- */
function renderCoef() {
  const list = document.getElementById("coefList");
  const top = data.model.coefficientSummary.slice(0, 8);
  const maxAbs = Math.max(...top.map(c => Math.abs(c.coefficient)));
  list.innerHTML = top.map(c => {
    const w = Math.abs(c.coefficient) / maxAbs * 46; // % of half
    const side = c.coefficient >= 0 ? "right" : "left";
    const fill = c.coefficient >= 0
      ? `left: 50%; width: ${w}%;`
      : `right: 50%; width: ${w}%;`;
    return `
      <div class="coef-row">
        <div>
          <div class="coef-label">${c.label}</div>
          <div class="coef-viz">
            <div class="coef-axis"></div>
            <div class="coef-fill ${c.coefficient < 0 ? "neg" : ""}" style="${fill}"></div>
          </div>
        </div>
        <div class="coef-val">${c.coefficient >= 0 ? "+" : ""}${c.coefficient}</div>
      </div>
    `;
  }).join("");
}

/* ---------- controls ---------- */
function formatVal(key, v) {
  const f = featureLookup[key];
  if (!f) return String(v);
  if (f.type === "numeric" && f.unit) {
    return f.unit === "%" ? `${v}%` : `${v} ${f.unit}`;
  }
  return String(v);
}

function changedKeys(student) {
  return data.features
    .filter(f => isLever(f) && student.values[f.key] !== state.scenario[f.key])
    .map(f => f.key);
}

function renderControls(student) {
  const grid = document.getElementById("controlsGrid");
  const html = data.features
    .filter(isLever)
    .map(f => {
      const baseV = student.values[f.key];
      const curV = state.scenario[f.key];
      const changed = baseV !== curV;
      const mutLabel = f.mutable === "high" ? "Direct" : "Counseling";
      const corr = corrLookup[f.key];
      const corrStr = corr != null ? `${corr >= 0 ? "+" : ""}${fmt(corr, 2)}` : "—";

      const isNumeric = f.type === "numeric";
      const control = isNumeric
        ? `<input type="range" min="${f.min}" max="${f.max}" step="${f.step}" value="${curV}" data-key="${f.key}" />`
        : `
          <div class="ctrl-seg" data-key="${f.key}">
            ${f.options.map(o => `<button type="button" class="${o === curV ? "active" : ""}" data-opt="${o}">${o}</button>`).join("")}
          </div>
        `;

      // Numeric sliders need a readout above the track; segmented controls
      // already show the active choice, so no extra value row.
      const valueRow = isNumeric
        ? `<div class="ctrl-value-row"><span class="ctrl-value">${formatVal(f.key, curV)}</span></div>`
        : "";

      const baselineLine = changed
        ? `<span class="ctrl-baseline diff">${formatVal(f.key, baseV)}</span>`
        : `<span class="ctrl-baseline">${formatVal(f.key, baseV)}</span>`;

      return `
        <div class="ctrl ${changed ? "changed" : ""}" data-key="${f.key}">
          <div class="ctrl-head">
            <span class="ctrl-label">${f.label}</span>
            <span class="ctrl-mut">${mutLabel}</span>
          </div>
          ${valueRow}
          ${control}
          <div class="ctrl-foot">
            ${baselineLine}
            <span class="ctrl-corr">r <b>${corrStr}</b></span>
          </div>
        </div>
      `;
    }).join("");

  grid.innerHTML = html;

  grid.querySelectorAll("input[type='range']").forEach(el => {
    el.addEventListener("input", e => {
      const k = e.target.dataset.key;
      state.scenario[k] = Number(e.target.value);
      state.lastAction = { key: k };
      renderScenarioBits();
    });
    el.addEventListener("change", renderAll);
  });
  grid.querySelectorAll(".ctrl-seg").forEach(seg => {
    seg.addEventListener("click", e => {
      const btn = e.target.closest("button[data-opt]");
      if (!btn) return;
      const k = seg.dataset.key;
      state.scenario[k] = btn.dataset.opt;
      state.lastAction = { key: k };
      renderAll();
    });
  });
}

/* ---------- presets ---------- */
function renderPresets() {
  const bar = document.getElementById("presetBar");
  bar.innerHTML = `
    <button class="preset-btn" data-preset="reset">Reset</button>
    ${data.presets.map(p => `<button class="preset-btn" data-preset="${p.id}" title="${p.description}">${p.label}</button>`).join("")}
  `;
  bar.querySelectorAll("[data-preset]").forEach(b => {
    b.addEventListener("click", () => applyPreset(b.dataset.preset));
  });
  document.getElementById("resetScenario").addEventListener("click", () => applyPreset("reset"));
}

function applyPreset(id) {
  const student = studentLookup[state.studentId];
  if (id === "reset") {
    state.scenario = deepCopy(student.values);
    state.lastAction = null;
    renderAll();
    return;
  }
  const preset = data.presets.find(p => p.id === id);
  if (!preset) return;
  // reset first
  state.scenario = deepCopy(student.values);
  Object.entries(preset.changes).forEach(([k, delta]) => {
    const f = featureLookup[k];
    if (!f) return;
    if (f.type === "numeric") {
      state.scenario[k] = clamp(Number(state.scenario[k]) + delta, f.min, f.max);
    } else {
      const m = data.maps[k], rm = data.reverseMaps[k];
      const cur = m[state.scenario[k]];
      const shifted = clamp(cur + delta, 0, Object.keys(m).length - 1);
      state.scenario[k] = rm[String(shifted)];
    }
  });
  state.lastAction = null;
  renderAll();
}

/* ---------- render pipeline ---------- */
function renderScenarioBits() {
  const student = studentLookup[state.studentId];
  const baseArr = samples(student.values);
  const scenArr = samples(state.scenario);
  const base = summarize(baseArr);
  const scen = summarize(scenArr);
  renderHeadline(student, base, scen);
  renderHero(student, baseArr, scenArr, base, scen);
  renderDiff(student);
  renderImpact(student);
  // live-update only the active card value
  document.querySelectorAll(".ctrl").forEach(c => {
    const k = c.dataset.key;
    const cur = state.scenario[k];
    const baseV = student.values[k];
    c.classList.toggle("changed", cur !== baseV);
    const v = c.querySelector(".ctrl-value");
    if (v) v.textContent = formatVal(k, cur);
  });
}

function renderAll() {
  const student = studentLookup[state.studentId];
  renderRoster();
  renderControls(student);
  renderScenarioBits();
  renderCoef();
}

/* ---------- init ---------- */
function init() {
  initTheme();
  renderMeta();
  renderPresets();
  const s = studentLookup[state.studentId];
  state.scenario = deepCopy(s.values);
  renderAll();

  document.getElementById("rosterSearch").addEventListener("input", e => {
    state.search = e.target.value;
    renderRoster();
  });
}

document.addEventListener("DOMContentLoaded", init);
