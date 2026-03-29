# Proposal Presentation Slides (~7 Minutes)

---

## Slide 1 — Title (0:00–0:30)

### On-Slide Content

**Title:** Counterfactual Visual Analytics for Targeted Student Interventions

**Subtitle:** Moving from "What Happened?" to "What Should We Do?"

**Team:** [Names] | Data Visualization Course | Feb 2026

---

**Speaker Notes:**
"We want to move educational dashboards from showing us *what* happened, to telling us *how to fix it*."

---

## Slide 2 — The Problem with Current Dashboards (0:30–1:30)

### On-Slide Content

**Heading:** Why Existing Dashboards Fall Short

- Canvas, Blackboard: show grades, attendance, averages
- All **descriptive** — they look backward, not forward
- An advisor sees a failing student… but then what?
- No guidance on *which action* will actually help

**Figure:** `fig1_status_quo_scatter.png`
*(Attendance vs. Exam Score, colored by Parental Involvement)*

> "Scores are not only determined by how hard a student studies."

---

**Speaker Notes:**
"Imagine you are an academic advisor looking at a standard Canvas dashboard. You see a scatterplot like this: attendance versus grades. It’s entirely descriptive; it just tells you what *already happened*. The dots are colored by parental involvement—a structural factor outside the student's control. While it's interesting that engaged parents correlate with higher scores even at the same attendance level, this insight isn't actionable. The advisor knows the student is failing, but this backward-looking chart offers absolutely no guidance on *how* to fix it or *which intervention* will actually work."

---

## Slide 3 — The Dataset (Student Academic Performance) (1:30–2:00)

### On-Slide Content

**Heading:** Dataset

[Link to Student Academic Performance Dataset by Ayesha Siddiqa on Kaggle]

| Feature Category | Variables (Examples) | Data Type | Counterfactual Actionability |
| :--- | :--- | :--- | :--- |
| **Academic History** | Previous_Scores, Exam_Score (Target) | Numeric | <span style="color:red">**Immutable**</span> (Baseline Metrics) |
| **Student Behavior** | Hours_Studied, Attendance | Numeric | <span style="color:green">**Highly Mutable**</span> (Direct Intervention) |
| **Lifestyle & Habits** | Sleep_Hours, Extracurricular_Activities | Numeric / Cat. | <span style="color="orange">**Mutable**</span> (Counseling Focus) |
| **Environment & Support** | Tutoring_Sessions, Parental_Involvement | Categorical | <span style="color:blue">**Partially Mutable**</span> (Resource Focus) |

---

**Speaker Notes:**
"For our data source, we are utilizing the Student Academic Performance Dataset from Kaggle. What makes this dataset perfect for our visualization is how cleanly its variables map to real-world intervention strategies.

We can categorize the features by their 'Counterfactual Actionability'. Academic history is immutable—we can't change past grades. But student behaviors like Attendance are highly mutable through direct intervention. Things like Tutoring and Extracurriculars are partially mutable through resource allocation and counseling. Our visual analytics tool leverages this exact distinction: it holds the immutable factors constant as a baseline, and allows the advisor to manipulate the mutable factors using sliders to see the predicted outcome."

---

## Slide 4 — The Complexity of Student Success (2:00–3:00)

### On-Slide Content

**Heading:** Student Success is Highly Multivariate

- 20 factors recorded per student (behavioral + structural + demographic)
- Behavioral: Hours Studied, Attendance, Sleep Hours, Tutoring Sessions
- Structural: Parental Involvement, Family Income, School Type
- **No single factor explains the full picture**
- A regression model is needed to weigh them together

**Figure:** `fig2_complexity_heatmap.png`
*(Top 10 factors most correlated with Exam Score — encoded from all 20 variables)*

---

**Speaker Notes:**
"We encoded all 20 variables, including categoricals like Parental Involvement and Teacher Quality, and computed their correlations with Exam Score. This heatmap shows the top 10. Attendance and Hours Studied are strongest, but smaller factors still matter. No human advisor can manually balance all these interactions — that's where the regression model helps."

---

## Slide 5 — Our Proposed Solution (3:00–4:00)

### On-Slide Content

**Heading:** Causal-Predictive Visual Analytics

**What Exists (Gap):**

- LMS tools → descriptive only, no action suggested
- EDM research → predicts risk, but gives opaque labels

**Our Contribution:**

- ✅ Multiple linear regression model with bootstrapped confidence intervals
- ✅ Interactive sliders for actionable variables (Tutoring, Attendance…)
- ✅ Real-time update of predicted score distribution
- ✅ Transparent: each coefficient readable as "+X pts per tutoring session"
- ✅ Designed *with* educators, not just *for* them

---

**Speaker Notes:**
"Our novelty is the combination of a transparent regression backend and interactive counterfactual visualization. Unlike black-box ML outputs, our model explains itself: every slider movement comes with a readable coefficient. The advisor isn't just told 'this student is high risk' — they're shown what will change the outcome."

---

## Slide 6 — The Proposed Interface (4:00–5:00)

### On-Slide Content

**Heading:** Counterfactual "What-If" Visualization

**Student Profile:** Low parental involvement | Previous score: 65 | Tutoring: 0/week
**Intervention:** Advisor drags slider → Tutoring Sessions: 0 → 2/week

**Figure:** `fig3_counterfactual_curves.png`
*(Red: baseline prediction → Green: post-intervention prediction)*

| | Baseline | After Intervention |
|---|---|---|
| Expected Score | 65 | 78 |
| Above Failing Threshold? | ❌ | ✅ |

---

**Speaker Notes:**
"This mockup shows what the advisor actually sees. On the left is the student's base profile. Based on those inputs, the transparent regression model generates the red baseline curve — showing this student is heavily skewed into the red failing zone.

But at the bottom, there is an interactive control panel. The advisor uses the slider to simulate adding 2 tutoring sessions. Because the regression model updates live, the green curve instantly appears, shifting the expected score from a 65 to a 78 — completely escaping the failing threshold. The advisor sees the expected benefit *before* committing, turning data into a decision."

---

## Slide 7 — Target Users & Design Requirements (5:00–6:00)

### On-Slide Content

**Heading:** Designing For Real Users, Not Imagined Ones

**Target Users:**

- Academic advisors
- High school counselors
- Classroom teachers

**How We Gather Requirements:**

- Semi-structured interviews with 2–3 university advisors
- Show low-fidelity wireframes of the interface
- Ask: "Walk me through how you advise a struggling student today"
- Identify which variables they actually use → map to dashboard design

> "Without understanding real workflows, we risk building a tool nobody uses."

---

**Speaker Notes:**
"We target academic advisors and counselors. Before writing a single line of code, we will interview 2–3 of them to understand *their* current process and *their* data needs. Their feedback will directly shape which variables appear as sliders and how the predicted score curve is presented."

---

## Slide 8 — Evaluation & Timeline (5:45–7:00)

### On-Slide Content

**Heading:** Evaluation Plan & Development Timeline

**Evaluation (A/B User Study):**

- **The Setup:** Compare Baseline (spreadsheet) vs. Our Innovation (interactive dashboard)
- **The Task:** "You have 5 minutes. Formulate an intervention plan for 3 at-risk students."
- **Quantitative Metrics:**
  - *Time-to-Decision* (measured via stopwatch)
  - *Confidence Level* (1-10 self-reported scale)
- **Qualitative Feedback:** "Think-aloud" protocol using the ICE heuristic (Insight, Confidence, Ease-of-use)

**Timeline:**

| Weeks | Task |
| --- | --- |
| 1–2 | User interviews + data preprocessing + regression model fitting |
| 3–4 | Frontend dashboard (D3.js). **Prototype Presentation: Week of Mar 23** |
| 5–6 | Integrate regression backend + bootstrapping + slider interactions |
| 7–8 | User evaluation + final report. **Final Presentation: Week of Apr 20** |

> "We expect lower decision time and higher advisor confidence vs. a static dashboard."

---

**Speaker Notes:**
"We'll evaluate by giving proxy users (like our grad student peers) a realistic advising scenario and timing their decisions, then comparing confidence levels between our tool and a baseline. This tests the core claim: that counterfactual visualization makes decision-making faster and more confident."

---

## Handling Audience Questions

**Q: Isn't this dataset synthetic?**
> "Correct — it shows signs of synthetic generation (integer floors, tight score distribution). For a visualization prototype, this is acceptable and common in HCI research. Our research question is about the *interface*, not about making real predictions. A real school deployment would simply use their live student data."

**Q: Why not just use a simple average or lookup table?**
> "A lookup table can't handle the combination of 20 variables simultaneously for a specific student. The regression model computes a personalized prediction, not a group average."
