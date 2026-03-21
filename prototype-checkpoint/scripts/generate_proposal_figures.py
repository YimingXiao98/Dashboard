from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from scipy.stats import norm


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "raw" / "StudentPerformanceFactors.csv"
OUTPUT_DIR = ROOT / "docs" / "assets" / "proposal-figures"


def style_plots() -> None:
    plt.style.use("seaborn-v0_8-whitegrid")
    sns.set_palette("deep")
    plt.rcParams["font.family"] = "sans-serif"
    plt.rcParams["axes.titlesize"] = 16
    plt.rcParams["axes.labelsize"] = 14
    plt.rcParams["xtick.labelsize"] = 12
    plt.rcParams["ytick.labelsize"] = 12


def build_status_quo_scatter(df: pd.DataFrame) -> None:
    plt.figure(figsize=(10, 6))
    subset = df.dropna(
        subset=["Attendance", "Exam_Score", "Parental_Involvement"]
    ).sample(n=min(2000, len(df)), random_state=42)

    jittered_attendance = subset["Attendance"] + np.random.normal(0, 0.75, size=len(subset))
    jittered_score = subset["Exam_Score"] + np.random.normal(0, 1.0, size=len(subset))

    sns.scatterplot(
        x=jittered_attendance,
        y=jittered_score,
        hue=subset["Parental_Involvement"],
        hue_order=["Low", "Medium", "High"],
        palette="Set1",
        alpha=0.7,
        edgecolor="w",
        linewidth=0.2,
        s=40,
    )

    sns.regplot(
        x=jittered_attendance,
        y=jittered_score,
        scatter=False,
        color="black",
        line_kws={"linestyle": "--", "alpha": 0.8, "lw": 2},
    )

    plt.title(
        "The Status Quo: Current Dashboards Only Show Past Trends\n"
        "(Attendance vs. Exam Score)",
        pad=20,
    )
    plt.xlabel("Attendance (%)")
    plt.ylabel("Exam Score")
    plt.legend(title="Parental Involvement", title_fontsize=12)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "fig1_status_quo_scatter.png", dpi=300)
    plt.close()


def build_complexity_heatmap(df: pd.DataFrame) -> None:
    encode_df = df.copy()

    ordinal_maps = {
        "Parental_Involvement": {"Low": 0, "Medium": 1, "High": 2},
        "Access_to_Resources": {"Low": 0, "Medium": 1, "High": 2},
        "Motivation_Level": {"Low": 0, "Medium": 1, "High": 2},
        "Family_Income": {"Low": 0, "Medium": 1, "High": 2},
        "Teacher_Quality": {"Low": 0, "Medium": 1, "High": 2},
        "Parental_Education_Level": {"High School": 0, "College": 1, "Postgraduate": 2},
        "Distance_from_Home": {"Near": 0, "Moderate": 1, "Far": 2},
        "Peer_Influence": {"Negative": 0, "Neutral": 1, "Positive": 2},
    }
    binary_maps = {
        "Extracurricular_Activities": {"No": 0, "Yes": 1},
        "Internet_Access": {"No": 0, "Yes": 1},
        "Learning_Disabilities": {"No": 0, "Yes": 1},
        "School_Type": {"Public": 0, "Private": 1},
        "Gender": {"Female": 0, "Male": 1},
    }

    for col, mapping in {**ordinal_maps, **binary_maps}.items():
        encode_df[col] = encode_df[col].map(mapping)

    encode_df = encode_df.dropna()
    full_corr = encode_df.corr(numeric_only=True)["Exam_Score"].drop("Exam_Score").abs()
    full_corr = full_corr.sort_values(ascending=False)

    top_features = full_corr.head(10).index.tolist() + ["Exam_Score"]
    top_corr = encode_df[top_features].corr(numeric_only=True)

    rename = {
        "Hours_Studied": "Hours Studied",
        "Attendance": "Attendance",
        "Sleep_Hours": "Sleep Hours",
        "Previous_Scores": "Previous Scores",
        "Tutoring_Sessions": "Tutoring Sessions",
        "Physical_Activity": "Physical Activity",
        "Exam_Score": "Exam Score",
        "Motivation_Level": "Motivation Level",
        "Access_to_Resources": "Access to Resources",
        "Family_Income": "Family Income",
        "Teacher_Quality": "Teacher Quality",
    }
    top_corr = top_corr.rename(index=rename, columns=rename)

    plt.figure(figsize=(11, 9))
    sns.heatmap(
        top_corr,
        cmap=sns.diverging_palette(230, 20, as_cmap=True),
        vmax=1.0,
        vmin=-1.0,
        center=0,
        square=True,
        linewidths=0.6,
        cbar_kws={"shrink": 0.5, "label": "Correlation Coefficient"},
        annot=True,
        fmt=".2f",
        annot_kws={"size": 10},
    )
    plt.title(
        "The Complexity Problem: Top Factors Correlated with Exam Score\n"
        "(All 20 variables encoded; top 10 shown)",
        pad=20,
    )
    plt.xticks(rotation=45, ha="right")
    plt.yticks(rotation=0)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "fig2_complexity_heatmap.png", dpi=300)
    plt.close()


def build_counterfactual_mockup() -> None:
    fig = plt.figure(figsize=(11, 8))
    gs = fig.add_gridspec(4, 1)
    ax_plot = fig.add_subplot(gs[0:3, 0])
    ax_ui = fig.add_subplot(gs[3, 0])

    mu_baseline = 65
    sigma_baseline = np.sqrt(15)
    mu_intervention = 78
    sigma_intervention = np.sqrt(10)
    x = np.linspace(40, 100, 1000)

    ax_plot.plot(
        x,
        norm.pdf(x, mu_baseline, sigma_baseline),
        color="#d65d0e",
        lw=3,
        alpha=0.9,
        label="Baseline: Current Trajectory",
    )
    ax_plot.fill_between(x, norm.pdf(x, mu_baseline, sigma_baseline), color="#d65d0e", alpha=0.2)
    ax_plot.plot(
        x,
        norm.pdf(x, mu_intervention, sigma_intervention),
        color="#0f766e",
        lw=3,
        alpha=0.9,
        label="Simulation: +2 Tutoring Sessions",
    )
    ax_plot.fill_between(
        x,
        norm.pdf(x, mu_intervention, sigma_intervention),
        color="#0f766e",
        alpha=0.2,
    )

    ax_plot.axvline(mu_baseline, color="#9a3412", linestyle="--", alpha=0.8)
    ax_plot.axvline(mu_intervention, color="#115e59", linestyle="--", alpha=0.8)
    ax_plot.axvline(60, color="#b91c1c", linestyle="-", lw=2)
    ax_plot.axvspan(40, 60, color="#b91c1c", alpha=0.1, zorder=0)

    ax_plot.text(
        mu_baseline - 1,
        0.05,
        f"Expected\nScore: {mu_baseline}",
        color="#7c2d12",
        ha="right",
        va="center",
        fontsize=12,
        fontweight="bold",
        bbox={"facecolor": "white", "alpha": 0.9, "edgecolor": "none", "pad": 3},
    )
    ax_plot.text(
        mu_intervention + 1,
        0.05,
        f"Expected\nScore: {mu_intervention}",
        color="#134e4a",
        ha="left",
        va="center",
        fontsize=12,
        fontweight="bold",
        bbox={"facecolor": "white", "alpha": 0.9, "edgecolor": "none", "pad": 3},
    )

    ax_plot.set_title("Proposed UI: Real-Time Counterfactual Prediction", pad=20, fontsize=18, fontweight="bold")
    ax_plot.set_xlabel("Predicted Exam Score", fontsize=14)
    ax_plot.set_ylabel("Probability Density", fontsize=14)
    ax_plot.legend(loc="upper right", fontsize=12, frameon=True, shadow=True)
    ax_plot.set_xlim(40, 100)
    ax_plot.set_ylim(0, 0.15)
    ax_plot.set_yticks([])
    ax_plot.text(59.5, 0.13, "Failing Zone\n(Score < 60)", color="#991b1b", fontsize=12, fontweight="bold", ha="right")

    profile_text = (
        "Student Base Profile:\n"
        "-------------------------\n"
        "* Attendance: 65% (Low)\n"
        "* Previous Score: 62\n"
        "* Parent Involvement: Low\n"
        "* Sleep/Night: 5h\n"
        "* Current Tutoring: 0\n"
    )
    ax_plot.text(
        42,
        0.10,
        profile_text,
        fontsize=11,
        family="monospace",
        color="#334155",
        bbox={"boxstyle": "round", "facecolor": "#f8fafc", "alpha": 0.95, "edgecolor": "#cbd5e1", "lw": 1.5},
        va="center",
    )

    ax_ui.axis("off")
    ax_ui.add_patch(
        plt.Rectangle((0, 0), 1, 1, facecolor="#ecfeff", edgecolor="#a5f3fc", lw=2, transform=ax_ui.transAxes)
    )
    ax_ui.text(0.02, 0.85, "Intervention Simulator (Beta)", fontsize=14, fontweight="bold", color="#134e4a", transform=ax_ui.transAxes)
    ax_ui.plot([0.05, 0.45], [0.4, 0.4], color="#cbd5e1", lw=6, solid_capstyle="round", transform=ax_ui.transAxes)
    ax_ui.plot([0.05, 0.15], [0.4, 0.4], color="#0ea5e9", lw=6, solid_capstyle="round", transform=ax_ui.transAxes)
    ax_ui.scatter(0.15, 0.4, s=250, color="white", edgecolor="#0369a1", lw=3, zorder=5, transform=ax_ui.transAxes)
    ax_ui.text(0.05, 0.6, "Tutoring Sessions / Week", fontsize=12, fontweight="bold", color="#334155", transform=ax_ui.transAxes)
    ax_ui.text(0.05, 0.2, "0", fontsize=10, color="#64748b", transform=ax_ui.transAxes, ha="center")
    ax_ui.text(0.45, 0.2, "8+", fontsize=10, color="#64748b", transform=ax_ui.transAxes, ha="center")
    ax_ui.text(
        0.15,
        0.65,
        "2",
        fontsize=12,
        fontweight="bold",
        color="white",
        bbox={"facecolor": "#0ea5e9", "edgecolor": "none", "boxstyle": "round,pad=0.3"},
        transform=ax_ui.transAxes,
        ha="center",
    )

    ax_ui.add_patch(
        plt.Rectangle((0.55, 0.3), 0.25, 0.35, facecolor="white", edgecolor="#cbd5e1", lw=1.5, transform=ax_ui.transAxes)
    )
    ax_ui.text(0.55, 0.75, "Peer Influence Environment", fontsize=12, fontweight="bold", color="#334155", transform=ax_ui.transAxes)
    ax_ui.text(0.57, 0.45, "Neutral", fontsize=12, color="#0f172a", transform=ax_ui.transAxes, va="center")
    ax_ui.text(0.77, 0.45, "v", fontsize=10, color="#64748b", transform=ax_ui.transAxes, va="center")

    ax_ui.add_patch(
        plt.Rectangle((0.85, 0.3), 0.12, 0.35, facecolor="#0f766e", edgecolor="#115e59", lw=1.5, transform=ax_ui.transAxes)
    )
    ax_ui.text(0.91, 0.47, "Update", fontsize=13, fontweight="bold", color="white", transform=ax_ui.transAxes, ha="center", va="center")

    plt.tight_layout()
    fig.subplots_adjust(hspace=0.5)
    plt.savefig(OUTPUT_DIR / "fig3_counterfactual_curves.png", dpi=300, bbox_inches="tight")
    plt.close()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    style_plots()
    df = pd.read_csv(DATA_PATH)
    build_status_quo_scatter(df)
    build_complexity_heatmap(df)
    build_counterfactual_mockup()
    print(f"Saved proposal figures in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
