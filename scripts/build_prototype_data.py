from __future__ import annotations

import json
from pathlib import Path

import numpy as np
import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "raw" / "StudentPerformanceFactors.csv"
OUTPUT_PATH = ROOT / "prototype" / "data" / "prototype-data.js"

RNG = np.random.default_rng(42)

LABELS = {
    "Hours_Studied": "Hours studied",
    "Attendance": "Attendance",
    "Parental_Involvement": "Parental involvement",
    "Access_to_Resources": "Access to resources",
    "Extracurricular_Activities": "Extracurriculars",
    "Sleep_Hours": "Sleep hours",
    "Previous_Scores": "Previous score",
    "Motivation_Level": "Motivation level",
    "Internet_Access": "Internet access",
    "Tutoring_Sessions": "Tutoring sessions",
    "Family_Income": "Family income",
    "Teacher_Quality": "Teacher quality",
    "School_Type": "School type",
    "Peer_Influence": "Peer influence",
    "Physical_Activity": "Physical activity",
    "Learning_Disabilities": "Learning disabilities",
    "Parental_Education_Level": "Parental education",
    "Distance_from_Home": "Distance from home",
    "Gender": "Gender",
    "Exam_Score": "Exam score",
}

ORDINAL_MAPS = {
    "Parental_Involvement": {"Low": 0, "Medium": 1, "High": 2},
    "Access_to_Resources": {"Low": 0, "Medium": 1, "High": 2},
    "Motivation_Level": {"Low": 0, "Medium": 1, "High": 2},
    "Family_Income": {"Low": 0, "Medium": 1, "High": 2},
    "Teacher_Quality": {"Low": 0, "Medium": 1, "High": 2},
    "Parental_Education_Level": {"High School": 0, "College": 1, "Postgraduate": 2},
    "Distance_from_Home": {"Near": 0, "Moderate": 1, "Far": 2},
    "Peer_Influence": {"Negative": 0, "Neutral": 1, "Positive": 2},
}

BINARY_MAPS = {
    "Extracurricular_Activities": {"No": 0, "Yes": 1},
    "Internet_Access": {"No": 0, "Yes": 1},
    "Learning_Disabilities": {"No": 0, "Yes": 1},
    "School_Type": {"Public": 0, "Private": 1},
    "Gender": {"Female": 0, "Male": 1},
}

FEATURE_CONFIG = [
    {"key": "Attendance", "type": "numeric", "mutable": "high", "control": "slider", "step": 1, "unit": "%"},
    {"key": "Hours_Studied", "type": "numeric", "mutable": "high", "control": "slider", "step": 1, "unit": "hrs"},
    {"key": "Tutoring_Sessions", "type": "numeric", "mutable": "high", "control": "slider", "step": 1, "unit": "/wk"},
    {"key": "Sleep_Hours", "type": "numeric", "mutable": "medium", "control": "slider", "step": 1, "unit": "hrs"},
    {"key": "Physical_Activity", "type": "numeric", "mutable": "medium", "control": "slider", "step": 1, "unit": "days"},
    {"key": "Motivation_Level", "type": "categorical", "mutable": "medium", "control": "select"},
    {"key": "Access_to_Resources", "type": "categorical", "mutable": "medium", "control": "select"},
    {"key": "Extracurricular_Activities", "type": "categorical", "mutable": "medium", "control": "select"},
    {"key": "Internet_Access", "type": "categorical", "mutable": "medium", "control": "select"},
    {"key": "Parental_Involvement", "type": "categorical", "mutable": "context", "control": "select"},
]

CONTEXT_KEYS = [
    "Previous_Scores",
    "Family_Income",
    "Teacher_Quality",
    "Peer_Influence",
    "Parental_Education_Level",
    "Distance_from_Home",
    "Gender",
    "School_Type",
    "Learning_Disabilities",
]

FEATURE_ORDER = [key for key in LABELS if key != "Exam_Score"]
ENCODING_MAPS = {**ORDINAL_MAPS, **BINARY_MAPS}
REVERSE_ENCODING_MAPS = {
    key: {value: label for label, value in mapping.items()}
    for key, mapping in ENCODING_MAPS.items()
}


def prepare_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    prepared = df.copy()
    for column in prepared.columns:
        if prepared[column].isna().any():
            if prepared[column].dtype == object:
                prepared[column] = prepared[column].fillna(prepared[column].mode().iloc[0])
            else:
                prepared[column] = prepared[column].fillna(prepared[column].median())
    return prepared


def encode_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    encoded = df.copy()
    for column, mapping in ENCODING_MAPS.items():
        encoded[column] = encoded[column].map(mapping)
    return encoded


def fit_linear_model(x_matrix: np.ndarray, y_vector: np.ndarray) -> tuple[float, dict[str, float]]:
    design = np.column_stack([np.ones(len(x_matrix)), x_matrix]).astype(float)
    target = y_vector.astype(float)
    with np.errstate(over="ignore", divide="ignore", invalid="ignore"):
        xtx = design.T @ design
        ridge = np.eye(xtx.shape[0]) * 1e-6
        ridge[0, 0] = 0.0
        beta = np.linalg.solve(xtx + ridge, design.T @ target)
    intercept = float(beta[0])
    coefficients = {
        feature: round(float(value), 6)
        for feature, value in zip(FEATURE_ORDER, beta[1:])
    }
    return intercept, coefficients


def score_record(values: dict[str, object], model: dict[str, object]) -> float:
    score = float(model["intercept"])
    for feature in FEATURE_ORDER:
        value = values[feature]
        if feature in ENCODING_MAPS:
            value = ENCODING_MAPS[feature][value]
        score += model["coefficients"][feature] * float(value)
    return score


def quantile(values: np.ndarray, q: float) -> float:
    return float(np.quantile(values, q))


def risk_label(score: float) -> str:
    if score < 60:
        return "Critical"
    if score < 67:
        return "Watch"
    if score < 75:
        return "Stable"
    return "Strong"


def build_feature_definitions(df: pd.DataFrame) -> list[dict[str, object]]:
    features = []
    for definition in FEATURE_CONFIG:
        record = dict(definition)
        key = record["key"]
        record["label"] = LABELS[key]
        if record["type"] == "numeric":
            record["min"] = int(df[key].min())
            record["max"] = int(df[key].max())
        else:
            record["options"] = list(ENCODING_MAPS[key].keys())
        features.append(record)
    return features


def build_student_cards(df: pd.DataFrame, model: dict[str, object]) -> list[dict[str, object]]:
    focus = pd.concat(
        [
            df[df["Exam_Score"] < 60].sort_values(["Exam_Score", "Attendance", "Hours_Studied"]).head(12),
            df[df["Exam_Score"].between(60, 64)].sort_values(
                ["Exam_Score", "Attendance", "Previous_Scores"]
            ).head(8),
        ]
    ).drop_duplicates().head(18)

    students = []
    for index, row in focus.reset_index().iterrows():
        values = {feature: row[feature] for feature in FEATURE_ORDER}
        predicted = score_record(values, model)
        students.append(
            {
                "id": f"student-{int(row['index']) + 1:04d}",
                "name": f"Student {int(row['index']) + 1:04d}",
                "actualScore": int(row["Exam_Score"]),
                "predictedScore": round(predicted, 1),
                "riskBand": risk_label(row["Exam_Score"]),
                "values": values,
            }
        )
    return students


def build_bootstrap_models(encoded_df: pd.DataFrame, iterations: int = 220) -> list[dict[str, object]]:
    x_matrix = encoded_df[FEATURE_ORDER].to_numpy(dtype=float)
    y_vector = encoded_df["Exam_Score"].to_numpy(dtype=float)

    models = []
    for _ in range(iterations):
        indices = RNG.integers(0, len(encoded_df), len(encoded_df))
        intercept, coefficients = fit_linear_model(x_matrix[indices], y_vector[indices])
        models.append({"intercept": round(intercept, 6), "coefficients": coefficients})
    return models


def build_top_correlations(encoded_df: pd.DataFrame) -> list[dict[str, object]]:
    corr = encoded_df.corr(numeric_only=True)["Exam_Score"].drop("Exam_Score")
    corr = corr.sort_values(key=lambda series: series.abs(), ascending=False).head(10)
    return [
        {"key": feature, "label": LABELS[feature], "value": round(float(value), 3)}
        for feature, value in corr.items()
    ]


def build_cohort_scatter(df: pd.DataFrame) -> list[dict[str, object]]:
    sample = df.sample(n=min(500, len(df)), random_state=42).copy()
    return [
        {
            "attendance": int(row["Attendance"]),
            "score": int(row["Exam_Score"]),
            "parentalInvolvement": row["Parental_Involvement"],
        }
        for _, row in sample.iterrows()
    ]


def build_score_histogram(df: pd.DataFrame) -> list[dict[str, object]]:
    counts, edges = np.histogram(df["Exam_Score"], bins=np.arange(54.5, 102.5, 2))
    histogram = []
    for count, left, right in zip(counts, edges[:-1], edges[1:]):
        histogram.append(
            {"start": round(float(left), 1), "end": round(float(right), 1), "count": int(count)}
        )
    return histogram


def build_model_summary(
    df: pd.DataFrame,
    encoded_df: pd.DataFrame,
    bootstrap_models: list[dict[str, object]],
) -> dict[str, object]:
    x_matrix = encoded_df[FEATURE_ORDER].to_numpy(dtype=float)
    y_vector = encoded_df["Exam_Score"].to_numpy(dtype=float)
    intercept, coefficients = fit_linear_model(x_matrix, y_vector)
    base_model = {"intercept": intercept, "coefficients": coefficients}
    predictions = np.array([score_record(row, base_model) for row in df[FEATURE_ORDER].to_dict("records")])

    residuals = encoded_df["Exam_Score"].to_numpy(dtype=float) - predictions
    total = encoded_df["Exam_Score"].to_numpy(dtype=float)
    r_squared = 1.0 - float(np.sum(residuals ** 2) / np.sum((total - total.mean()) ** 2))

    coefficient_summary = []
    for feature in FEATURE_ORDER:
        samples = np.array([model["coefficients"][feature] for model in bootstrap_models])
        coefficient_summary.append(
            {
                "key": feature,
                "label": LABELS[feature],
                "coefficient": round(coefficients[feature], 3),
                "ciLow": round(quantile(samples, 0.05), 3),
                "ciHigh": round(quantile(samples, 0.95), 3),
            }
        )

    coefficient_summary.sort(key=lambda item: abs(item["coefficient"]), reverse=True)

    return {
        "intercept": round(intercept, 6),
        "coefficients": coefficients,
        "bootstrap": bootstrap_models,
        "featureOrder": FEATURE_ORDER,
        "rSquared": round(r_squared, 3),
        "residualStd": round(float(np.std(residuals)), 3),
        "coefficientSummary": coefficient_summary,
    }


def main() -> None:
    df = prepare_dataframe(pd.read_csv(DATA_PATH))
    encoded_df = encode_dataframe(df)
    bootstrap_models = build_bootstrap_models(encoded_df)
    model = build_model_summary(df, encoded_df, bootstrap_models)
    students = build_student_cards(df, model)

    payload = {
        "meta": {
            "title": "Counterfactual Visual Analytics for Targeted Student Interventions",
            "subtitle": "Prototype checkpoint built from the class proposal and the Student Performance Factors dataset.",
            "rows": int(len(df)),
            "generatedFrom": str(DATA_PATH.relative_to(ROOT)),
        },
        "features": build_feature_definitions(df),
        "contextKeys": CONTEXT_KEYS,
        "students": students,
        "defaultStudentId": students[0]["id"],
        "cohortScatter": build_cohort_scatter(df),
        "scoreHistogram": build_score_histogram(df),
        "topCorrelations": build_top_correlations(encoded_df),
        "model": model,
        "maps": ENCODING_MAPS,
        "reverseMaps": {
            key: {str(inner_key): inner_value for inner_key, inner_value in mapping.items()}
            for key, mapping in REVERSE_ENCODING_MAPS.items()
        },
        "labels": LABELS,
        "presets": [
            {
                "id": "attendance-recovery",
                "label": "Attendance recovery",
                "description": "Raise attendance and sleep slightly to stabilize the student.",
                "changes": {"Attendance": 6, "Sleep_Hours": 1},
            },
            {
                "id": "tutoring-boost",
                "label": "Tutoring boost",
                "description": "Add tutoring and improve access to resources.",
                "changes": {"Tutoring_Sessions": 2, "Access_to_Resources": 1},
            },
            {
                "id": "study-plan",
                "label": "Study plan",
                "description": "Increase study time, motivation, and extracurricular balance.",
                "changes": {
                    "Hours_Studied": 4,
                    "Motivation_Level": 1,
                    "Extracurricular_Activities": 1,
                },
            },
        ],
    }

    script = "window.PROTOTYPE_DATA = " + json.dumps(payload, indent=2) + ";\n"
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(script, encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
