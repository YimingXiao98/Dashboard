# Counterfactual Student Dashboard Prototype

This workspace now separates the class deliverables from the runnable prototype.

## Structure

- `docs/proposal/`: proposal report source and PDFs
- `docs/slides/`: slide outline used for the proposal presentation
- `docs/assets/proposal-figures/`: static figures referenced by the proposal
- `data/raw/`: original CSV dataset
- `scripts/`: Python scripts for rebuilding the figures and the prototype data bundle
- `prototype/`: self-contained HTML/CSS/JS checkpoint prototype

## Prototype

Open `prototype/index.html` in a browser. The page is self-contained and reads its data from `prototype/data/prototype-data.js`, so it does not need a backend server.

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
