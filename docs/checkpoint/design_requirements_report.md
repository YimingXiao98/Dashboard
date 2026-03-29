# Design Requirement Analysis Draft

## 1. Requirement-Gathering Method

For the checkpoint prototype, we conducted early requirement gathering through short Slack-based questionnaires and semi-structured outreach to instructors and TAs in teaching-support roles. The goal was not a formal user evaluation yet, but rather to understand how potential users currently identify struggling students, which student variables they actually use in practice, and what kinds of visual outputs would help them reason about interventions.

The questions focused on four themes:

1. Current workflow for identifying students who may be struggling.
2. Which factors feel realistically actionable for intervention.
3. Which outputs would be most useful in a decision-support dashboard.
4. Which interaction styles, such as sliders, dropdowns, or recommendation cards, would be easiest to use.

This input was combined with the project’s literature review and the design goals stated in the original proposal. From these sources, we extracted the following design requirements.

## 2. Design Requirements

### D1. Support fast identification of at-risk students

Respondents indicated that the first step in intervention planning is recognizing which students need attention now. Attendance and grades were repeatedly treated as early warning signals. Therefore, the system should allow users to immediately focus on at-risk or borderline students rather than scanning an entire cohort table.

Design implication:
The interface should foreground a curated list of target students and make risk status legible at a glance.

Mapped feature:
`F1. Focus Students panel`

### D2. Distinguish actionable variables from structural or contextual variables

Users described an important difference between variables they can realistically influence, such as attendance, tutoring, and study behavior, and variables that are useful for understanding a student but are not direct intervention levers. This distinction is central to the credibility of the tool.

Design implication:
Editable controls should be limited to plausible intervention levers, while background factors should remain visible but not treated as direct knobs.

Mapped features:
`F3. Editable intervention controls`
`F5. Immutable and Structural Factors`

### D3. Compare the student’s current trajectory with a hypothetical intervention scenario

Users need more than a single prediction; they need to know how the expected outcome changes if an intervention is applied. The system should therefore support explicit before/after comparison rather than isolated values.

Design implication:
The primary chart should visually compare the baseline condition and the hypothetical intervention condition in the same view.

Mapped feature:
`F2. Predicted Score Distribution`

### D4. Communicate uncertainty and risk, not just a point estimate

Respondents and prior literature both suggest that decision-makers are more likely to trust model-based outputs when uncertainty is visible. Showing only one predicted score can imply unjustified certainty, especially for intervention planning.

Design implication:
The dashboard should show a distribution or interval-based summary, along with passing-risk information, rather than only one score.

Mapped feature:
`F2. Predicted Score Distribution`

### D5. Suggest the most promising next intervention levers

Potential users may not know which variable to try first. Several interview questions were designed to understand which intervention factors matter most in real advising practice. This supports the need for a recommendation component that helps prioritize next actions.

Design implication:
The system should rank plausible next intervention levers based on their estimated effect on the modeled outcome.

Mapped feature:
`F4. Best Next Levers`

### D6. Make interaction lightweight and low-friction

Users preferred interface elements that are quick to understand and easy to manipulate, especially in an exploratory scenario. Sliders, dropdowns, and preset buttons are easier to use than forcing users to type custom numerical parameters.

Design implication:
The prototype should use direct-manipulation controls and preset intervention templates.

Mapped feature:
`F3. Editable intervention controls`

### D7. Provide cohort-level context for interpreting one student

Users do not reason about students in complete isolation. A student’s attendance, score, or support factors become more meaningful when compared with broader class patterns.

Design implication:
The interface should include at least one cohort view that situates the selected student within the larger dataset.

Mapped features:
`F6. Attendance vs. Exam Score`
`F7. Top Correlations With Exam Score`

### D8. Keep the model logic interpretable

Trust in the tool depends not only on output quality but also on whether users can understand why the system is recommending a change. Respondents emphasized the importance of clear and interpretable signals rather than opaque automation.

Design implication:
The dashboard should expose model signals, coefficient summaries, and recommendation rationale in accessible language.

Mapped features:
`F4. Best Next Levers`
`F7. Top Correlations With Exam Score`

## 3. Requirement-to-Feature Mapping

| Requirement | Description | Prototype Features |
| --- | --- | --- |
| D1 | Quickly identify at-risk students | F1 |
| D2 | Separate actionable and contextual factors | F3, F5 |
| D3 | Compare baseline vs. intervention scenario | F2 |
| D4 | Show uncertainty and pass/fail risk | F2 |
| D5 | Recommend the next best intervention lever | F4 |
| D6 | Keep interaction simple and direct | F3 |
| D7 | Provide cohort context | F6, F7 |
| D8 | Make the model interpretable | F4, F7 |

## 4. Prototype Feature Labels

- `F1` Focus Students panel
- `F2` Predicted Score Distribution
- `F3` Editable intervention controls
- `F4` Best Next Levers
- `F5` Immutable and Structural Factors
- `F6` Attendance vs. Exam Score
- `F7` Top Correlations With Exam Score

## 5. Suggested Short Report Paragraph

We derived the checkpoint prototype requirements from early user input and the literature review rather than designing the interface purely from our own assumptions. Short Slack-based questionnaires and semi-structured outreach to instructors and TAs in teaching-support roles suggested that users need to quickly identify at-risk students, distinguish actionable intervention levers from contextual factors, compare current and hypothetical scenarios directly, and see uncertainty-aware outputs rather than only a single prediction. These findings were formalized as design requirements D1-D8 and mapped to prototype features F1-F7, including the student selection panel, the baseline-versus-scenario distribution chart, editable intervention controls, a ranked recommendation panel, and cohort-level context views.

## 6. Suggested Limitation Statement

Because this was an early checkpoint, the requirement analysis should be interpreted as preliminary rather than as a full-scale user study. The interview/questionnaire sample was small and focused on proxy users in teaching-support roles. Nevertheless, it provided useful design guidance for the prototype and helped ground the interface in plausible advising workflows.
