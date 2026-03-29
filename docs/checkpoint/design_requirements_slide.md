# Design Requirements Slide Draft

## Title
Design Requirements From Early User Input

## Slide Content

- We gathered early requirements through short Slack-based questionnaires and semi-structured outreach to 2-3 instructors/TAs in teaching-support roles.
- We asked:
  - what they look at first when a student seems to be struggling
  - which factors feel actionable in practice
  - which outputs would be most useful for decision making
  - which interface elements would be easiest to use

- From this input, we derived the following design requirements:
  - `D1` Quickly identify at-risk students
  - `D2` Separate actionable intervention levers from background/context factors
  - `D3` Compare baseline vs. intervention scenario directly
  - `D4` Show uncertainty and pass/fail risk, not only one predicted score
  - `D5` Recommend the most promising next intervention lever
  - `D6` Support easy interaction through sliders, dropdowns, and presets
  - `D7` Provide cohort-level context for interpreting one student
  - `D8` Keep the model behavior interpretable and transparent

- These requirements directly motivated the prototype:
  - `F1` Focus Students panel supports `D1`
  - `F2` Prediction distribution chart supports `D3, D4`
  - `F3` Editable intervention controls support `D2, D6`
  - `F4` Best Next Levers supports `D5, D8`
  - `F5-F7` Context and cohort views support `D7, D8`

## Short Speaker Script

We used early user input from instructors and TAs to ground the prototype design rather than building the interface only from our own assumptions. The responses suggested that users need to quickly identify at-risk students, distinguish actionable factors from background context, compare a baseline against a hypothetical intervention, and receive interpretable guidance about which next lever to try. These findings were translated into design requirements D1 through D8 and then mapped to our prototype features such as the student selection panel, the baseline-versus-scenario distribution chart, the editable controls, and the recommendation panel.
