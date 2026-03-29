# Project Proposal: Counterfactual Visual Analytics for Targeted Student Interventions

## 1. Research Questions, Background, and Motivation

**Reasons for choosing a certain domain?**
Educational Data Mining (EDM) and Learning Analytics is a critical domain where data-driven decisions can directly impact student success. Teachers and academic counselors often have limited time and resources to allocate towards struggling students. While traditional dashboards effectively summarize past performance (grades, attendance), they do not assist educators in the decision-making process regarding future actions or personalized interventions.

**What are the potential domain tasks?**
The primary domain task is to triage students who require assistance and to formulate a personalized intervention plan (e.g., recommending tutoring, addressing attendance, or discussing extracurricular balance) that maximizes the probability of academic improvement.

**What are the potential data types and visualization tasks?**
We will utilize the **Student Performance Factors** dataset (sourced from Kaggle), which contains synthesized records of 6,607 high school students with 20 distinct features. The system scales to this mixed-type multivariate tabular data. This includes the target outcome (`Exam_Score`), categorical variables (e.g., `Learning_Disabilities`, `Family_Income`, `Extracurricular_Activities`), and continuous/discrete behavioral metrics (e.g., `Hours_Studied`, `Sleep_Hours`, `Attendance`).
The core visualization tasks involve:

- Comparing an individual student's multivariate profile to overall cohort distributions.
- Supporting visual counterfactual analysis ("If we intervene to increase this student's resources or tutoring, what is the expected change in their score distribution?").

**Research Question:**
How can interactive visual analytics, backed by predictive models, support educators in exploring "what-if" counterfactual scenarios to identify the most effective interventions for at-risk students?

## 2. Works that have been done before and the novelty of the proposed solution

**What are the existing systems/research work?**
Existing Learning Management Systems (LMS) such as Canvas or Blackboard predominantly provide descriptive analytics—static trend lines, bar charts of assignment grades, and class averages. Academic research in EDM frequently builds predictive models (e.g., logistic regression, Random Forests) to flag at-risk students, but these model outputs are typically presented as binary risk labels or opaque scores — lacking actionable interpretability for educators who need to know *what to do*, not just *who is at risk*.

**What are the potential novelty of your system?**
Our proposed solution introduces a "Causal-Predictive" interactive visual interface. Rather than presenting static historical charts, our system integrates a backend **multiple linear regression model with bootstrapped confidence intervals** linked to an interactive dashboard. Given that student performance data exhibits largely linear relationships among its predictors (as confirmed by correlation analysis of the dataset), a regression model is both statistically appropriate and — critically — fully interpretable: each model coefficient can be expressed verbatim to an educator as "one additional tutoring session is associated with an expected +X points on the exam." The interface features visual controls (sliders and toggles) for modifiable behavioral variables such as `Tutoring_Sessions` or `Attendance`. As the user adjusts these controls, the visual encoding (a probability density curve derived from the bootstrapped prediction interval) updates in real-time. This allows educators to visually weigh the expected benefit of specific interventions, making counterfactual reasoning accessible and directly applicable — without hiding the logic inside a black box.

## 3. Access to target users to understand the design requirements

**Who are your target users?**
The target users are academic counselors, high school teachers, and university academic advisors who are responsible for guiding student success.

**How will you interact with the target users to understand the design requirements?**
We plan to conduct semi-structured interviews with 2 to 3 academic advisors or teaching assistants within the university. We will present low-fidelity sketches of our interface to gather concrete requirements regarding which data points they prioritize when advising a struggling student, and how they currently synthesize that information to make recommendations.

## 4. Development Plans (Tasks and Timeline)

*(Note: Please fill in specific team member names prior to submission)*

- **Week 1-2:** Conduct user interviews and finalize design requirements. Pre-process the Kaggle `StudentPerformanceFactors` dataset and train the backend regression/predictive model (Assigned to: [Team Member 1]).
- **Week 3-4 (includes Mar 23):** Develop the frontend interactive dashboard using D3.js. Integrate the backend predictive model with the frontend UI sliders. **Prototype Presentation on the week of Mar 23.** (Assigned to: [Team Member 2]).
- **Week 5-6:** Refine visual encodings, implement smooth transitions for the counterfactual updates, and ensure the UI is intuitive. Prepare the evaluation protocol (Assigned to: [Team Member 3]).
- **Week 7-8 (includes Apr 20):** Conduct user evaluation, synthesize results, and finalize the project report. **Final Presentation on the week of Apr 20.** (Assigned to: All).

## 5. Evaluation Plans

We will conduct a controlled, within-subjects user study with 3–5 proxy users (graduate students or classmates acting in the role of academic advisors). The task will be scenario-based: "Given these 3 specific at-risk student profiles, formulate an intervention plan for each." Participants will complete this task using our proposed visual analytics system and a baseline system (a standard spreadsheet or static dashboard of the same data). We will measure and compare the *time-to-decision* and the *user's self-reported confidence level* in their intervention plan. Additionally, we will use the ICE (Insight, Confidence, Ease-of-use) heuristic during a think-aloud protocol to gather qualitative feedback on the visual encodings.

## 6. Expected Results

We expect that the interactive counterfactual visualization will significantly reduce the time required for educators to formulate an intervention plan. Because we use a transparent regression model, advisors can also directly inspect which variables carry the highest weight — building trust in the tool. Furthermore, we hypothesize that users will report higher confidence in their recommendations, as the real-time visual feedback of the prediction interval will make the expected impact of their advice concrete and legible, compared to static data tables.
