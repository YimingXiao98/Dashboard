# Counterfactual Student Dashboard Prototype

This workspace now separates the class deliverables from the runnable prototype.

## Structure

- `paper/`: original LaTeX paper source, bibliography, and figure assets
- `docs/proposal/`: proposal report source and PDFs
- `docs/slides/`: slide outline used for the proposal presentation
- `docs/assets/proposal-figures/`: static figures referenced by the proposal
- `data/raw/`: original CSV dataset
- `scripts/`: Python scripts for rebuilding the figures and the prototype data bundle
- `prototype/`: self-contained HTML/CSS/JS checkpoint prototype

## Prototype

Open `prototype/index.html` in a browser. The page is self-contained and reads its data from `prototype/data/prototype-data.js`, so it does not need a backend server.

## How To Interact With The Webpage

1. Open `prototype/index.html` and start in the left sidebar under `Focus Students`.
2. Click a student card to load that student's baseline profile.
3. Look at `Predicted Score Distribution` in the center panel:
   this compares the student's baseline prediction with your edited intervention scenario.
4. Use the controls in `Editable Variables` to change actionable factors such as attendance, hours studied, tutoring sessions, sleep hours, and motivation level.
5. Watch the center chart and summary tiles update immediately as you move sliders or change dropdowns.
6. Use the preset buttons for quick demo scenarios such as attendance recovery or a tutoring boost.
7. Read `Best Next Levers` on the right for suggested next interventions based on the current scenario.
8. Use the bottom panels for context:
   `Immutable And Structural Factors` shows the student's background profile,
   `Attendance vs Exam Score` shows where that student sits in the cohort,
   and `Top Correlations With Exam Score` shows the strongest global factors in the dataset.

### Good Demo Flow

1. Select a low-performing student from the left panel.
2. Point out the baseline expected score and whether it is near the failing threshold.
3. Increase tutoring, attendance, or study time.
4. Show the scenario curve shifting to the right and the expected score increasing.
5. Use the recommendation panel to explain which interventions appear most helpful.

To rebuild the prototype data bundle after changing the CSV or the model logic:

```bash
python3 scripts/build_prototype_data.py
```

To regenerate the proposal figures:

```bash
python3 scripts/generate_proposal_figures.py
```

## Notes

- The model is a transparent linear regression fit over encoded features from the CSV.
- Uncertainty curves are generated from bootstrap model samples so the prototype still reflects the proposal's "distribution shift" idea.
- The prototype focuses on at-risk and borderline students to make the checkpoint demo concrete.
