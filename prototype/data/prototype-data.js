window.PROTOTYPE_DATA = {
  "meta": {
    "title": "Counterfactual Visual Analytics for Targeted Student Interventions",
    "subtitle": "Prototype checkpoint built from the class proposal and the Student Performance Factors dataset.",
    "rows": 6607,
    "generatedFrom": "data/raw/StudentPerformanceFactors.csv"
  },
  "features": [
    {
      "key": "Attendance",
      "type": "numeric",
      "mutable": "high",
      "control": "slider",
      "step": 1,
      "unit": "%",
      "label": "Attendance",
      "min": 60,
      "max": 100
    },
    {
      "key": "Hours_Studied",
      "type": "numeric",
      "mutable": "high",
      "control": "slider",
      "step": 1,
      "unit": "hrs",
      "label": "Hours studied",
      "min": 1,
      "max": 44
    },
    {
      "key": "Tutoring_Sessions",
      "type": "numeric",
      "mutable": "high",
      "control": "slider",
      "step": 1,
      "unit": "/wk",
      "label": "Tutoring sessions",
      "min": 0,
      "max": 8
    },
    {
      "key": "Sleep_Hours",
      "type": "numeric",
      "mutable": "medium",
      "control": "slider",
      "step": 1,
      "unit": "hrs",
      "label": "Sleep hours",
      "min": 4,
      "max": 10
    },
    {
      "key": "Physical_Activity",
      "type": "numeric",
      "mutable": "medium",
      "control": "slider",
      "step": 1,
      "unit": "days",
      "label": "Physical activity",
      "min": 0,
      "max": 6
    },
    {
      "key": "Motivation_Level",
      "type": "categorical",
      "mutable": "medium",
      "control": "select",
      "label": "Motivation level",
      "options": [
        "Low",
        "Medium",
        "High"
      ]
    },
    {
      "key": "Access_to_Resources",
      "type": "categorical",
      "mutable": "medium",
      "control": "select",
      "label": "Access to resources",
      "options": [
        "Low",
        "Medium",
        "High"
      ]
    },
    {
      "key": "Extracurricular_Activities",
      "type": "categorical",
      "mutable": "medium",
      "control": "select",
      "label": "Extracurriculars",
      "options": [
        "No",
        "Yes"
      ]
    },
    {
      "key": "Internet_Access",
      "type": "categorical",
      "mutable": "medium",
      "control": "select",
      "label": "Internet access",
      "options": [
        "No",
        "Yes"
      ]
    },
    {
      "key": "Parental_Involvement",
      "type": "categorical",
      "mutable": "context",
      "control": "select",
      "label": "Parental involvement",
      "options": [
        "Low",
        "Medium",
        "High"
      ]
    }
  ],
  "contextKeys": [
    "Previous_Scores",
    "Family_Income",
    "Teacher_Quality",
    "Peer_Influence",
    "Parental_Education_Level",
    "Distance_from_Home",
    "Gender",
    "School_Type",
    "Learning_Disabilities"
  ],
  "students": [
    {
      "id": "student-1102",
      "name": "Student 1102",
      "actualScore": 55,
      "predictedScore": 55.4,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 3,
        "Attendance": 62,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 6,
        "Previous_Scores": 67,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 1,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Negative",
        "Physical_Activity": 3,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-5508",
      "name": "Student 5508",
      "actualScore": 56,
      "predictedScore": 56.7,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 5,
        "Attendance": 65,
        "Parental_Involvement": "Low",
        "Access_to_Resources": "High",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 7,
        "Previous_Scores": 71,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Private",
        "Peer_Influence": "Negative",
        "Physical_Activity": 2,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "College",
        "Distance_from_Home": "Far",
        "Gender": "Male"
      }
    },
    {
      "id": "student-5908",
      "name": "Student 5908",
      "actualScore": 57,
      "predictedScore": 57.3,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 3,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 6,
        "Previous_Scores": 78,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 1,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 1,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "Postgraduate",
        "Distance_from_Home": "Near",
        "Gender": "Female"
      }
    },
    {
      "id": "student-5720",
      "name": "Student 5720",
      "actualScore": 57,
      "predictedScore": 57.7,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 9,
        "Attendance": 64,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 10,
        "Previous_Scores": 68,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Medium",
        "Teacher_Quality": "Medium",
        "School_Type": "Private",
        "Peer_Influence": "Negative",
        "Physical_Activity": 3,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-2881",
      "name": "Student 2881",
      "actualScore": 57,
      "predictedScore": 58.0,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 7,
        "Attendance": 66,
        "Parental_Involvement": "High",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 8,
        "Previous_Scores": 68,
        "Motivation_Level": "High",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Negative",
        "Physical_Activity": 2,
        "Learning_Disabilities": "Yes",
        "Parental_Education_Level": "College",
        "Distance_from_Home": "Moderate",
        "Gender": "Male"
      }
    },
    {
      "id": "student-3544",
      "name": "Student 3544",
      "actualScore": 57,
      "predictedScore": 58.0,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 14,
        "Attendance": 67,
        "Parental_Involvement": "Low",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 7,
        "Previous_Scores": 66,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Neutral",
        "Physical_Activity": 4,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Far",
        "Gender": "Female"
      }
    },
    {
      "id": "student-4636",
      "name": "Student 4636",
      "actualScore": 58,
      "predictedScore": 57.9,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 3,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Medium",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 5,
        "Previous_Scores": 76,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Medium",
        "Teacher_Quality": "High",
        "School_Type": "Private",
        "Peer_Influence": "Neutral",
        "Physical_Activity": 4,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Moderate",
        "Gender": "Female"
      }
    },
    {
      "id": "student-6432",
      "name": "Student 6432",
      "actualScore": 58,
      "predictedScore": 58.1,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 4,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Medium",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 7,
        "Previous_Scores": 55,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 2,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Private",
        "Peer_Influence": "Neutral",
        "Physical_Activity": 2,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "Postgraduate",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-6001",
      "name": "Student 6001",
      "actualScore": 58,
      "predictedScore": 58.0,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 13,
        "Attendance": 60,
        "Parental_Involvement": "Low",
        "Access_to_Resources": "Medium",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 5,
        "Previous_Scores": 67,
        "Motivation_Level": "High",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 1,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 4,
        "Learning_Disabilities": "Yes",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Far",
        "Gender": "Male"
      }
    },
    {
      "id": "student-5199",
      "name": "Student 5199",
      "actualScore": 58,
      "predictedScore": 58.8,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 15,
        "Attendance": 60,
        "Parental_Involvement": "High",
        "Access_to_Resources": "Medium",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 7,
        "Previous_Scores": 63,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "High",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 1,
        "Learning_Disabilities": "Yes",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Far",
        "Gender": "Female"
      }
    },
    {
      "id": "student-3494",
      "name": "Student 3494",
      "actualScore": 58,
      "predictedScore": 58.6,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 17,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 6,
        "Previous_Scores": 66,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 2,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Far",
        "Gender": "Female"
      }
    },
    {
      "id": "student-1751",
      "name": "Student 1751",
      "actualScore": 58,
      "predictedScore": 58.5,
      "riskBand": "Critical",
      "values": {
        "Hours_Studied": 4,
        "Attendance": 61,
        "Parental_Involvement": "Low",
        "Access_to_Resources": "High",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 7,
        "Previous_Scores": 71,
        "Motivation_Level": "High",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Low",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 1,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "Postgraduate",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-3177",
      "name": "Student 3177",
      "actualScore": 60,
      "predictedScore": 60.8,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 11,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "High",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 7,
        "Previous_Scores": 59,
        "Motivation_Level": "High",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 2,
        "Family_Income": "Low",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 1,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "College",
        "Distance_from_Home": "Moderate",
        "Gender": "Male"
      }
    },
    {
      "id": "student-0017",
      "name": "Student 0017",
      "actualScore": 60,
      "predictedScore": 60.3,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 14,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 10,
        "Previous_Scores": 65,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "High",
        "Teacher_Quality": "Medium",
        "School_Type": "Private",
        "Peer_Influence": "Positive",
        "Physical_Activity": 3,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "College",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-3606",
      "name": "Student 3606",
      "actualScore": 60,
      "predictedScore": 59.9,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 15,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 9,
        "Previous_Scores": 65,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 1,
        "Family_Income": "Medium",
        "Teacher_Quality": "High",
        "School_Type": "Public",
        "Peer_Influence": "Negative",
        "Physical_Activity": 5,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "College",
        "Distance_from_Home": "Moderate",
        "Gender": "Male"
      }
    },
    {
      "id": "student-4510",
      "name": "Student 4510",
      "actualScore": 60,
      "predictedScore": 60.6,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 20,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 4,
        "Previous_Scores": 73,
        "Motivation_Level": "Medium",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Low",
        "School_Type": "Public",
        "Peer_Influence": "Neutral",
        "Physical_Activity": 1,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "Postgraduate",
        "Distance_from_Home": "Moderate",
        "Gender": "Female"
      }
    },
    {
      "id": "student-5092",
      "name": "Student 5092",
      "actualScore": 60,
      "predictedScore": 59.7,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 16,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "No",
        "Sleep_Hours": 8,
        "Previous_Scores": 87,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 0,
        "Family_Income": "Low",
        "Teacher_Quality": "Low",
        "School_Type": "Public",
        "Peer_Influence": "Positive",
        "Physical_Activity": 5,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Near",
        "Gender": "Male"
      }
    },
    {
      "id": "student-1317",
      "name": "Student 1317",
      "actualScore": 60,
      "predictedScore": 60.5,
      "riskBand": "Watch",
      "values": {
        "Hours_Studied": 14,
        "Attendance": 60,
        "Parental_Involvement": "Medium",
        "Access_to_Resources": "Low",
        "Extracurricular_Activities": "Yes",
        "Sleep_Hours": 7,
        "Previous_Scores": 89,
        "Motivation_Level": "Low",
        "Internet_Access": "Yes",
        "Tutoring_Sessions": 2,
        "Family_Income": "Medium",
        "Teacher_Quality": "Medium",
        "School_Type": "Public",
        "Peer_Influence": "Neutral",
        "Physical_Activity": 3,
        "Learning_Disabilities": "No",
        "Parental_Education_Level": "High School",
        "Distance_from_Home": "Moderate",
        "Gender": "Male"
      }
    }
  ],
  "defaultStudentId": "student-1102",
  "cohortScatter": [
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 91,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 63,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 79,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 73,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 98,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 94,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 68,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 60,
      "score": 63,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 60,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 74,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 79,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 82,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 69,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 98,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 94,
      "score": 74,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 100,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 70,
      "score": 89,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 95,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 62,
      "score": 55,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 97,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 86,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 97,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 78,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 74,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 63,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 75,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 60,
      "score": 62,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 85,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 61,
      "score": 61,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 100,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 70,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 60,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 63,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 85,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 93,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 61,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 70,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 82,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 93,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 87,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 64,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 69,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 62,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 81,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 61,
      "score": 60,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 70,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 88,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 91,
      "score": 73,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 82,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 83,
      "score": 63,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 72,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 78,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 94,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 93,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 97,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 73,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 75,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 92,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 63,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 87,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 82,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 70,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 86,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 88,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 62,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 93,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 61,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 92,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 95,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 86,
      "score": 74,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 96,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 85,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 70,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 86,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 94,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 76,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 87,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 82,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 59,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 78,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 65,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 87,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 70,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 68,
      "score": 62,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 88,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 92,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 66,
      "score": 63,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 65,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 75,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 82,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 80,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 93,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 60,
      "score": 59,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 64,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 82,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 68,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 85,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 84,
      "score": 61,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 87,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 67,
      "score": 59,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 73,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 61,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 62,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 75,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 77,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 62,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 90,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 89,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 89,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 62,
      "score": 58,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 69,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 85,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 98,
      "score": 74,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 94,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 81,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 73,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 94,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 91,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 66,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 60,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 87,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 61,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 72,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 96,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 92,
      "score": 75,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 87,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 98,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 65,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 73,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 63,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 63,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 89,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 60,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 68,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 94,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 91,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 89,
      "score": 73,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 83,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 93,
      "score": 73,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 71,
      "score": 61,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 64,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 72,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 74,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 71,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 99,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 66,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 60,
      "score": 61,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 89,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 67,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 63,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 97,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 99,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 92,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 62,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 82,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 62,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 89,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 72,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 62,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 74,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 74,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 72,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 74,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 99,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 87,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 63,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 88,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 69,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 98,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 90,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 74,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 74,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 97,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 65,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 85,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 97,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 61,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 94,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 66,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 73,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 89,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 99,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 95,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 86,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 94,
      "score": 71,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 69,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 63,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 98,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 67,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 69,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 93,
      "score": 69,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 89,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 86,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 66,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 71,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 70,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 73,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 64,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 87,
      "score": 73,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 88,
      "score": 73,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 90,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 83,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 77,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 99,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 73,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 79,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 64,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 65,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 82,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 76,
      "score": 69,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 73,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 69,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 72,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 69,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 66,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 88,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 75,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 83,
      "score": 67,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 63,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 74,
      "score": 61,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 96,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 62,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 92,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 74,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 79,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 92,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 97,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 89,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 76,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 100,
      "score": 74,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 99,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 85,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 91,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 99,
      "score": 74,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 88,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 67,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 78,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 68,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 62,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 75,
      "score": 65,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 77,
      "score": 69,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 88,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 96,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 70,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 80,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 78,
      "score": 66,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 84,
      "score": 68,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 100,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 76,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 83,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 78,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 80,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 65,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 73,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 66,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 87,
      "score": 60,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 84,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 70,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 90,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 61,
      "score": 60,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 85,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 72,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 61,
      "score": 60,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 84,
      "score": 71,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 86,
      "score": 66,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 75,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 64,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 91,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 63,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 91,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 70,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 68,
      "score": 66,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 72,
      "score": 65,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 98,
      "score": 67,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 93,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 76,
      "score": 68,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 86,
      "score": 88,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 71,
      "score": 69,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 95,
      "score": 75,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 71,
      "score": 67,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 90,
      "score": 74,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 60,
      "score": 63,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 99,
      "score": 70,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 62,
      "score": 62,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 71,
      "score": 64,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 86,
      "score": 65,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 97,
      "score": 72,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 98,
      "score": 73,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 67,
      "score": 57,
      "parentalInvolvement": "Low"
    },
    {
      "attendance": 75,
      "score": 69,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 96,
      "score": 72,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 61,
      "score": 64,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 81,
      "score": 70,
      "parentalInvolvement": "Medium"
    },
    {
      "attendance": 69,
      "score": 64,
      "parentalInvolvement": "High"
    },
    {
      "attendance": 79,
      "score": 69,
      "parentalInvolvement": "Medium"
    }
  ],
  "scoreHistogram": [
    {
      "start": 54.5,
      "end": 56.5,
      "count": 2
    },
    {
      "start": 56.5,
      "end": 58.5,
      "count": 26
    },
    {
      "start": 58.5,
      "end": 60.5,
      "count": 117
    },
    {
      "start": 60.5,
      "end": 62.5,
      "count": 435
    },
    {
      "start": 62.5,
      "end": 64.5,
      "count": 872
    },
    {
      "start": 64.5,
      "end": 66.5,
      "count": 1430
    },
    {
      "start": 66.5,
      "end": 68.5,
      "count": 1476
    },
    {
      "start": 68.5,
      "end": 70.5,
      "count": 1166
    },
    {
      "start": 70.5,
      "end": 72.5,
      "count": 712
    },
    {
      "start": 72.5,
      "end": 74.5,
      "count": 247
    },
    {
      "start": 74.5,
      "end": 76.5,
      "count": 64
    },
    {
      "start": 76.5,
      "end": 78.5,
      "count": 9
    },
    {
      "start": 78.5,
      "end": 80.5,
      "count": 8
    },
    {
      "start": 80.5,
      "end": 82.5,
      "count": 4
    },
    {
      "start": 82.5,
      "end": 84.5,
      "count": 4
    },
    {
      "start": 84.5,
      "end": 86.5,
      "count": 5
    },
    {
      "start": 86.5,
      "end": 88.5,
      "count": 5
    },
    {
      "start": 88.5,
      "end": 90.5,
      "count": 3
    },
    {
      "start": 90.5,
      "end": 92.5,
      "count": 3
    },
    {
      "start": 92.5,
      "end": 94.5,
      "count": 6
    },
    {
      "start": 94.5,
      "end": 96.5,
      "count": 3
    },
    {
      "start": 96.5,
      "end": 98.5,
      "count": 6
    },
    {
      "start": 98.5,
      "end": 100.5,
      "count": 3
    }
  ],
  "topCorrelations": [
    {
      "key": "Attendance",
      "label": "Attendance",
      "value": 0.581
    },
    {
      "key": "Hours_Studied",
      "label": "Hours studied",
      "value": 0.445
    },
    {
      "key": "Previous_Scores",
      "label": "Previous score",
      "value": 0.175
    },
    {
      "key": "Access_to_Resources",
      "label": "Access to resources",
      "value": 0.17
    },
    {
      "key": "Parental_Involvement",
      "label": "Parental involvement",
      "value": 0.157
    },
    {
      "key": "Tutoring_Sessions",
      "label": "Tutoring sessions",
      "value": 0.157
    },
    {
      "key": "Parental_Education_Level",
      "label": "Parental education",
      "value": 0.104
    },
    {
      "key": "Peer_Influence",
      "label": "Peer influence",
      "value": 0.1
    },
    {
      "key": "Family_Income",
      "label": "Family income",
      "value": 0.095
    },
    {
      "key": "Distance_from_Home",
      "label": "Distance from home",
      "value": -0.089
    }
  ],
  "model": {
    "intercept": 34.950979,
    "coefficients": {
      "Hours_Studied": 0.294884,
      "Attendance": 0.198893,
      "Parental_Involvement": 0.996065,
      "Access_to_Resources": 1.02545,
      "Extracurricular_Activities": 0.554398,
      "Sleep_Hours": -0.001377,
      "Previous_Scores": 0.048902,
      "Motivation_Level": 0.529492,
      "Internet_Access": 0.927461,
      "Tutoring_Sessions": 0.497326,
      "Family_Income": 0.531684,
      "Teacher_Quality": 0.533144,
      "School_Type": -0.032935,
      "Peer_Influence": 0.513673,
      "Physical_Activity": 0.187855,
      "Learning_Disabilities": -0.853602,
      "Parental_Education_Level": 0.487864,
      "Distance_from_Home": -0.471575,
      "Gender": -0.040807
    },
    "bootstrap": [
      {
        "intercept": 35.474549,
        "coefficients": {
          "Hours_Studied": 0.295695,
          "Attendance": 0.195504,
          "Parental_Involvement": 0.984204,
          "Access_to_Resources": 1.042714,
          "Extracurricular_Activities": 0.559898,
          "Sleep_Hours": 0.029939,
          "Previous_Scores": 0.044814,
          "Motivation_Level": 0.584085,
          "Internet_Access": 0.856842,
          "Tutoring_Sessions": 0.506658,
          "Family_Income": 0.461048,
          "Teacher_Quality": 0.448757,
          "School_Type": -0.032824,
          "Peer_Influence": 0.5131,
          "Physical_Activity": 0.151671,
          "Learning_Disabilities": -0.728521,
          "Parental_Education_Level": 0.521945,
          "Distance_from_Home": -0.422022,
          "Gender": -0.002578
        }
      },
      {
        "intercept": 35.06405,
        "coefficients": {
          "Hours_Studied": 0.289666,
          "Attendance": 0.197804,
          "Parental_Involvement": 1.0002,
          "Access_to_Resources": 1.079735,
          "Extracurricular_Activities": 0.59083,
          "Sleep_Hours": -0.005802,
          "Previous_Scores": 0.05014,
          "Motivation_Level": 0.571662,
          "Internet_Access": 0.747627,
          "Tutoring_Sessions": 0.527292,
          "Family_Income": 0.567475,
          "Teacher_Quality": 0.570325,
          "School_Type": 0.027501,
          "Peer_Influence": 0.493677,
          "Physical_Activity": 0.185076,
          "Learning_Disabilities": -0.710759,
          "Parental_Education_Level": 0.4697,
          "Distance_from_Home": -0.453345,
          "Gender": -0.125876
        }
      },
      {
        "intercept": 34.921336,
        "coefficients": {
          "Hours_Studied": 0.294819,
          "Attendance": 0.197152,
          "Parental_Involvement": 0.917225,
          "Access_to_Resources": 1.042929,
          "Extracurricular_Activities": 0.589449,
          "Sleep_Hours": 0.026052,
          "Previous_Scores": 0.049686,
          "Motivation_Level": 0.468068,
          "Internet_Access": 0.809748,
          "Tutoring_Sessions": 0.489993,
          "Family_Income": 0.561693,
          "Teacher_Quality": 0.51923,
          "School_Type": -0.090703,
          "Peer_Influence": 0.552487,
          "Physical_Activity": 0.203919,
          "Learning_Disabilities": -0.893471,
          "Parental_Education_Level": 0.543177,
          "Distance_from_Home": -0.412585,
          "Gender": -0.048841
        }
      },
      {
        "intercept": 34.862287,
        "coefficients": {
          "Hours_Studied": 0.293096,
          "Attendance": 0.199559,
          "Parental_Involvement": 0.989797,
          "Access_to_Resources": 1.030999,
          "Extracurricular_Activities": 0.57252,
          "Sleep_Hours": -0.024043,
          "Previous_Scores": 0.051702,
          "Motivation_Level": 0.489379,
          "Internet_Access": 0.916015,
          "Tutoring_Sessions": 0.482123,
          "Family_Income": 0.543882,
          "Teacher_Quality": 0.53133,
          "School_Type": -0.030753,
          "Peer_Influence": 0.544295,
          "Physical_Activity": 0.195422,
          "Learning_Disabilities": -0.852778,
          "Parental_Education_Level": 0.475063,
          "Distance_from_Home": -0.445977,
          "Gender": -0.06073
        }
      },
      {
        "intercept": 35.034401,
        "coefficients": {
          "Hours_Studied": 0.295513,
          "Attendance": 0.197662,
          "Parental_Involvement": 1.043253,
          "Access_to_Resources": 1.015305,
          "Extracurricular_Activities": 0.650321,
          "Sleep_Hours": -0.025097,
          "Previous_Scores": 0.049183,
          "Motivation_Level": 0.454234,
          "Internet_Access": 1.010777,
          "Tutoring_Sessions": 0.486677,
          "Family_Income": 0.628634,
          "Teacher_Quality": 0.522635,
          "School_Type": -0.087474,
          "Peer_Influence": 0.526843,
          "Physical_Activity": 0.19047,
          "Learning_Disabilities": -0.932744,
          "Parental_Education_Level": 0.517231,
          "Distance_from_Home": -0.467241,
          "Gender": -0.05829
        }
      },
      {
        "intercept": 34.419776,
        "coefficients": {
          "Hours_Studied": 0.294662,
          "Attendance": 0.200218,
          "Parental_Involvement": 1.001394,
          "Access_to_Resources": 1.035441,
          "Extracurricular_Activities": 0.551564,
          "Sleep_Hours": 0.010123,
          "Previous_Scores": 0.054725,
          "Motivation_Level": 0.461733,
          "Internet_Access": 0.903385,
          "Tutoring_Sessions": 0.490526,
          "Family_Income": 0.528254,
          "Teacher_Quality": 0.534076,
          "School_Type": 0.045272,
          "Peer_Influence": 0.490703,
          "Physical_Activity": 0.202894,
          "Learning_Disabilities": -0.944183,
          "Parental_Education_Level": 0.52418,
          "Distance_from_Home": -0.523791,
          "Gender": -0.135613
        }
      },
      {
        "intercept": 34.94398,
        "coefficients": {
          "Hours_Studied": 0.29862,
          "Attendance": 0.19962,
          "Parental_Involvement": 0.919448,
          "Access_to_Resources": 0.974326,
          "Extracurricular_Activities": 0.549194,
          "Sleep_Hours": -0.003255,
          "Previous_Scores": 0.048984,
          "Motivation_Level": 0.505081,
          "Internet_Access": 0.958977,
          "Tutoring_Sessions": 0.498176,
          "Family_Income": 0.559442,
          "Teacher_Quality": 0.476741,
          "School_Type": -0.070646,
          "Peer_Influence": 0.518023,
          "Physical_Activity": 0.233003,
          "Learning_Disabilities": -0.948816,
          "Parental_Education_Level": 0.477997,
          "Distance_from_Home": -0.480335,
          "Gender": -0.130701
        }
      },
      {
        "intercept": 34.924901,
        "coefficients": {
          "Hours_Studied": 0.294745,
          "Attendance": 0.198484,
          "Parental_Involvement": 0.990431,
          "Access_to_Resources": 1.006841,
          "Extracurricular_Activities": 0.617107,
          "Sleep_Hours": -0.037991,
          "Previous_Scores": 0.052017,
          "Motivation_Level": 0.544969,
          "Internet_Access": 0.961946,
          "Tutoring_Sessions": 0.460077,
          "Family_Income": 0.511128,
          "Teacher_Quality": 0.663191,
          "School_Type": -0.136105,
          "Peer_Influence": 0.529289,
          "Physical_Activity": 0.18117,
          "Learning_Disabilities": -0.94094,
          "Parental_Education_Level": 0.507477,
          "Distance_from_Home": -0.490372,
          "Gender": -0.084078
        }
      },
      {
        "intercept": 34.578104,
        "coefficients": {
          "Hours_Studied": 0.299137,
          "Attendance": 0.202935,
          "Parental_Involvement": 0.967364,
          "Access_to_Resources": 0.999198,
          "Extracurricular_Activities": 0.604056,
          "Sleep_Hours": 0.005442,
          "Previous_Scores": 0.048007,
          "Motivation_Level": 0.536259,
          "Internet_Access": 0.676971,
          "Tutoring_Sessions": 0.575845,
          "Family_Income": 0.548137,
          "Teacher_Quality": 0.541838,
          "School_Type": -0.023287,
          "Peer_Influence": 0.524924,
          "Physical_Activity": 0.189946,
          "Learning_Disabilities": -0.883146,
          "Parental_Education_Level": 0.520809,
          "Distance_from_Home": -0.467823,
          "Gender": -0.00765
        }
      },
      {
        "intercept": 35.050642,
        "coefficients": {
          "Hours_Studied": 0.29691,
          "Attendance": 0.200333,
          "Parental_Involvement": 0.959659,
          "Access_to_Resources": 1.068325,
          "Extracurricular_Activities": 0.543805,
          "Sleep_Hours": -0.020934,
          "Previous_Scores": 0.049193,
          "Motivation_Level": 0.538312,
          "Internet_Access": 0.928736,
          "Tutoring_Sessions": 0.476589,
          "Family_Income": 0.492714,
          "Teacher_Quality": 0.548154,
          "School_Type": -0.113301,
          "Peer_Influence": 0.510676,
          "Physical_Activity": 0.178283,
          "Learning_Disabilities": -1.094867,
          "Parental_Education_Level": 0.46811,
          "Distance_from_Home": -0.474626,
          "Gender": -0.090311
        }
      },
      {
        "intercept": 35.021939,
        "coefficients": {
          "Hours_Studied": 0.294332,
          "Attendance": 0.199344,
          "Parental_Involvement": 1.008886,
          "Access_to_Resources": 1.065395,
          "Extracurricular_Activities": 0.506806,
          "Sleep_Hours": -0.006614,
          "Previous_Scores": 0.050478,
          "Motivation_Level": 0.49291,
          "Internet_Access": 0.765043,
          "Tutoring_Sessions": 0.473917,
          "Family_Income": 0.584708,
          "Teacher_Quality": 0.582656,
          "School_Type": -0.030952,
          "Peer_Influence": 0.502593,
          "Physical_Activity": 0.171142,
          "Learning_Disabilities": -0.693221,
          "Parental_Education_Level": 0.425778,
          "Distance_from_Home": -0.474569,
          "Gender": -0.019869
        }
      },
      {
        "intercept": 35.137954,
        "coefficients": {
          "Hours_Studied": 0.296512,
          "Attendance": 0.200872,
          "Parental_Involvement": 1.021276,
          "Access_to_Resources": 1.014808,
          "Extracurricular_Activities": 0.555361,
          "Sleep_Hours": -0.031248,
          "Previous_Scores": 0.048036,
          "Motivation_Level": 0.564042,
          "Internet_Access": 0.92008,
          "Tutoring_Sessions": 0.464964,
          "Family_Income": 0.540762,
          "Teacher_Quality": 0.519541,
          "School_Type": -0.033596,
          "Peer_Influence": 0.553084,
          "Physical_Activity": 0.132743,
          "Learning_Disabilities": -0.707635,
          "Parental_Education_Level": 0.5081,
          "Distance_from_Home": -0.446234,
          "Gender": -0.014542
        }
      },
      {
        "intercept": 35.027817,
        "coefficients": {
          "Hours_Studied": 0.294446,
          "Attendance": 0.196792,
          "Parental_Involvement": 1.018633,
          "Access_to_Resources": 1.085169,
          "Extracurricular_Activities": 0.653271,
          "Sleep_Hours": 0.014011,
          "Previous_Scores": 0.049177,
          "Motivation_Level": 0.495882,
          "Internet_Access": 0.856631,
          "Tutoring_Sessions": 0.482159,
          "Family_Income": 0.447217,
          "Teacher_Quality": 0.5482,
          "School_Type": -0.007962,
          "Peer_Influence": 0.559331,
          "Physical_Activity": 0.178579,
          "Learning_Disabilities": -0.875075,
          "Parental_Education_Level": 0.461264,
          "Distance_from_Home": -0.408162,
          "Gender": -0.090091
        }
      },
      {
        "intercept": 35.224703,
        "coefficients": {
          "Hours_Studied": 0.293058,
          "Attendance": 0.199158,
          "Parental_Involvement": 1.021286,
          "Access_to_Resources": 1.010498,
          "Extracurricular_Activities": 0.624424,
          "Sleep_Hours": -0.027992,
          "Previous_Scores": 0.048882,
          "Motivation_Level": 0.531862,
          "Internet_Access": 0.925617,
          "Tutoring_Sessions": 0.518972,
          "Family_Income": 0.533012,
          "Teacher_Quality": 0.505065,
          "School_Type": 0.042222,
          "Peer_Influence": 0.489213,
          "Physical_Activity": 0.160196,
          "Learning_Disabilities": -0.821637,
          "Parental_Education_Level": 0.427115,
          "Distance_from_Home": -0.467285,
          "Gender": -0.000966
        }
      },
      {
        "intercept": 34.306067,
        "coefficients": {
          "Hours_Studied": 0.297283,
          "Attendance": 0.201366,
          "Parental_Involvement": 1.003747,
          "Access_to_Resources": 1.067455,
          "Extracurricular_Activities": 0.625332,
          "Sleep_Hours": 0.005959,
          "Previous_Scores": 0.050405,
          "Motivation_Level": 0.532638,
          "Internet_Access": 0.972793,
          "Tutoring_Sessions": 0.529869,
          "Family_Income": 0.555515,
          "Teacher_Quality": 0.514982,
          "School_Type": -0.0636,
          "Peer_Influence": 0.527103,
          "Physical_Activity": 0.200294,
          "Learning_Disabilities": -0.924239,
          "Parental_Education_Level": 0.498297,
          "Distance_from_Home": -0.453881,
          "Gender": -0.017473
        }
      },
      {
        "intercept": 35.082779,
        "coefficients": {
          "Hours_Studied": 0.298198,
          "Attendance": 0.197648,
          "Parental_Involvement": 1.060344,
          "Access_to_Resources": 1.020064,
          "Extracurricular_Activities": 0.568897,
          "Sleep_Hours": -0.043284,
          "Previous_Scores": 0.05078,
          "Motivation_Level": 0.488957,
          "Internet_Access": 0.989356,
          "Tutoring_Sessions": 0.504565,
          "Family_Income": 0.48277,
          "Teacher_Quality": 0.511728,
          "School_Type": -0.004937,
          "Peer_Influence": 0.555534,
          "Physical_Activity": 0.161045,
          "Learning_Disabilities": -0.772947,
          "Parental_Education_Level": 0.497807,
          "Distance_from_Home": -0.410713,
          "Gender": -0.024238
        }
      },
      {
        "intercept": 34.875631,
        "coefficients": {
          "Hours_Studied": 0.298286,
          "Attendance": 0.19693,
          "Parental_Involvement": 1.036064,
          "Access_to_Resources": 1.049625,
          "Extracurricular_Activities": 0.499049,
          "Sleep_Hours": -0.004333,
          "Previous_Scores": 0.051279,
          "Motivation_Level": 0.503278,
          "Internet_Access": 0.987801,
          "Tutoring_Sessions": 0.458896,
          "Family_Income": 0.487666,
          "Teacher_Quality": 0.526514,
          "School_Type": -0.064888,
          "Peer_Influence": 0.534616,
          "Physical_Activity": 0.188826,
          "Learning_Disabilities": -0.820859,
          "Parental_Education_Level": 0.504437,
          "Distance_from_Home": -0.465311,
          "Gender": -0.032147
        }
      },
      {
        "intercept": 35.027257,
        "coefficients": {
          "Hours_Studied": 0.300987,
          "Attendance": 0.198235,
          "Parental_Involvement": 1.056732,
          "Access_to_Resources": 0.990078,
          "Extracurricular_Activities": 0.510832,
          "Sleep_Hours": 0.003886,
          "Previous_Scores": 0.046881,
          "Motivation_Level": 0.54114,
          "Internet_Access": 0.954706,
          "Tutoring_Sessions": 0.508487,
          "Family_Income": 0.515755,
          "Teacher_Quality": 0.548976,
          "School_Type": -0.129596,
          "Peer_Influence": 0.494687,
          "Physical_Activity": 0.15144,
          "Learning_Disabilities": -0.749378,
          "Parental_Education_Level": 0.466695,
          "Distance_from_Home": -0.513431,
          "Gender": 0.061777
        }
      },
      {
        "intercept": 34.772027,
        "coefficients": {
          "Hours_Studied": 0.297673,
          "Attendance": 0.199015,
          "Parental_Involvement": 1.07378,
          "Access_to_Resources": 1.021834,
          "Extracurricular_Activities": 0.605349,
          "Sleep_Hours": -0.001387,
          "Previous_Scores": 0.050584,
          "Motivation_Level": 0.590259,
          "Internet_Access": 0.934552,
          "Tutoring_Sessions": 0.529258,
          "Family_Income": 0.538221,
          "Teacher_Quality": 0.487872,
          "School_Type": -0.013315,
          "Peer_Influence": 0.483015,
          "Physical_Activity": 0.146408,
          "Learning_Disabilities": -0.746407,
          "Parental_Education_Level": 0.473367,
          "Distance_from_Home": -0.528057,
          "Gender": -0.030477
        }
      },
      {
        "intercept": 34.854124,
        "coefficients": {
          "Hours_Studied": 0.295117,
          "Attendance": 0.201069,
          "Parental_Involvement": 0.926822,
          "Access_to_Resources": 1.027588,
          "Extracurricular_Activities": 0.549153,
          "Sleep_Hours": -0.035172,
          "Previous_Scores": 0.048233,
          "Motivation_Level": 0.478314,
          "Internet_Access": 0.873677,
          "Tutoring_Sessions": 0.539447,
          "Family_Income": 0.601858,
          "Teacher_Quality": 0.595416,
          "School_Type": -0.087272,
          "Peer_Influence": 0.510883,
          "Physical_Activity": 0.27049,
          "Learning_Disabilities": -0.966345,
          "Parental_Education_Level": 0.501063,
          "Distance_from_Home": -0.487123,
          "Gender": -0.098387
        }
      },
      {
        "intercept": 35.163125,
        "coefficients": {
          "Hours_Studied": 0.295965,
          "Attendance": 0.201571,
          "Parental_Involvement": 0.959781,
          "Access_to_Resources": 1.055309,
          "Extracurricular_Activities": 0.519708,
          "Sleep_Hours": -0.030329,
          "Previous_Scores": 0.047695,
          "Motivation_Level": 0.4827,
          "Internet_Access": 0.838899,
          "Tutoring_Sessions": 0.493526,
          "Family_Income": 0.563985,
          "Teacher_Quality": 0.532677,
          "School_Type": -0.072381,
          "Peer_Influence": 0.503756,
          "Physical_Activity": 0.179778,
          "Learning_Disabilities": -0.95158,
          "Parental_Education_Level": 0.508995,
          "Distance_from_Home": -0.45648,
          "Gender": -0.006328
        }
      },
      {
        "intercept": 34.845182,
        "coefficients": {
          "Hours_Studied": 0.287919,
          "Attendance": 0.199747,
          "Parental_Involvement": 1.085964,
          "Access_to_Resources": 1.014917,
          "Extracurricular_Activities": 0.638842,
          "Sleep_Hours": -0.002499,
          "Previous_Scores": 0.050765,
          "Motivation_Level": 0.559492,
          "Internet_Access": 0.893835,
          "Tutoring_Sessions": 0.488345,
          "Family_Income": 0.523698,
          "Teacher_Quality": 0.541995,
          "School_Type": 0.074227,
          "Peer_Influence": 0.518938,
          "Physical_Activity": 0.144039,
          "Learning_Disabilities": -0.840005,
          "Parental_Education_Level": 0.457595,
          "Distance_from_Home": -0.390015,
          "Gender": -0.026233
        }
      },
      {
        "intercept": 35.240518,
        "coefficients": {
          "Hours_Studied": 0.292221,
          "Attendance": 0.198053,
          "Parental_Involvement": 1.043789,
          "Access_to_Resources": 1.022989,
          "Extracurricular_Activities": 0.507177,
          "Sleep_Hours": -0.024535,
          "Previous_Scores": 0.049148,
          "Motivation_Level": 0.541011,
          "Internet_Access": 0.836829,
          "Tutoring_Sessions": 0.512084,
          "Family_Income": 0.557215,
          "Teacher_Quality": 0.456454,
          "School_Type": -0.011719,
          "Peer_Influence": 0.493541,
          "Physical_Activity": 0.195814,
          "Learning_Disabilities": -1.016416,
          "Parental_Education_Level": 0.513503,
          "Distance_from_Home": -0.456695,
          "Gender": 0.0221
        }
      },
      {
        "intercept": 34.659263,
        "coefficients": {
          "Hours_Studied": 0.295172,
          "Attendance": 0.199373,
          "Parental_Involvement": 1.01291,
          "Access_to_Resources": 0.990002,
          "Extracurricular_Activities": 0.498088,
          "Sleep_Hours": -0.005995,
          "Previous_Scores": 0.052808,
          "Motivation_Level": 0.498142,
          "Internet_Access": 1.023282,
          "Tutoring_Sessions": 0.473337,
          "Family_Income": 0.495518,
          "Teacher_Quality": 0.550087,
          "School_Type": 0.043234,
          "Peer_Influence": 0.572865,
          "Physical_Activity": 0.169629,
          "Learning_Disabilities": -0.755962,
          "Parental_Education_Level": 0.517007,
          "Distance_from_Home": -0.465792,
          "Gender": -0.101246
        }
      },
      {
        "intercept": 34.866984,
        "coefficients": {
          "Hours_Studied": 0.293127,
          "Attendance": 0.200361,
          "Parental_Involvement": 0.993608,
          "Access_to_Resources": 1.024864,
          "Extracurricular_Activities": 0.580202,
          "Sleep_Hours": -0.00842,
          "Previous_Scores": 0.049284,
          "Motivation_Level": 0.542287,
          "Internet_Access": 0.916222,
          "Tutoring_Sessions": 0.482729,
          "Family_Income": 0.542463,
          "Teacher_Quality": 0.557953,
          "School_Type": -0.00088,
          "Peer_Influence": 0.514159,
          "Physical_Activity": 0.205838,
          "Learning_Disabilities": -0.941343,
          "Parental_Education_Level": 0.473411,
          "Distance_from_Home": -0.542849,
          "Gender": -0.126645
        }
      },
      {
        "intercept": 34.978398,
        "coefficients": {
          "Hours_Studied": 0.288211,
          "Attendance": 0.198218,
          "Parental_Involvement": 0.99653,
          "Access_to_Resources": 1.055607,
          "Extracurricular_Activities": 0.628153,
          "Sleep_Hours": 0.030555,
          "Previous_Scores": 0.046923,
          "Motivation_Level": 0.520329,
          "Internet_Access": 1.013009,
          "Tutoring_Sessions": 0.502414,
          "Family_Income": 0.551879,
          "Teacher_Quality": 0.509663,
          "School_Type": 0.004418,
          "Peer_Influence": 0.50941,
          "Physical_Activity": 0.178405,
          "Learning_Disabilities": -0.610401,
          "Parental_Education_Level": 0.480207,
          "Distance_from_Home": -0.432073,
          "Gender": -0.126231
        }
      },
      {
        "intercept": 34.737852,
        "coefficients": {
          "Hours_Studied": 0.290859,
          "Attendance": 0.199198,
          "Parental_Involvement": 1.051356,
          "Access_to_Resources": 1.009025,
          "Extracurricular_Activities": 0.565826,
          "Sleep_Hours": -0.029746,
          "Previous_Scores": 0.050063,
          "Motivation_Level": 0.535816,
          "Internet_Access": 1.115326,
          "Tutoring_Sessions": 0.497419,
          "Family_Income": 0.548517,
          "Teacher_Quality": 0.56828,
          "School_Type": -0.013291,
          "Peer_Influence": 0.544161,
          "Physical_Activity": 0.185389,
          "Learning_Disabilities": -0.755444,
          "Parental_Education_Level": 0.478697,
          "Distance_from_Home": -0.456329,
          "Gender": 0.075602
        }
      },
      {
        "intercept": 35.306368,
        "coefficients": {
          "Hours_Studied": 0.297279,
          "Attendance": 0.196221,
          "Parental_Involvement": 1.027477,
          "Access_to_Resources": 0.975074,
          "Extracurricular_Activities": 0.540493,
          "Sleep_Hours": -0.006444,
          "Previous_Scores": 0.050797,
          "Motivation_Level": 0.468525,
          "Internet_Access": 0.691399,
          "Tutoring_Sessions": 0.483355,
          "Family_Income": 0.56804,
          "Teacher_Quality": 0.556885,
          "School_Type": -0.105939,
          "Peer_Influence": 0.513679,
          "Physical_Activity": 0.178635,
          "Learning_Disabilities": -1.016254,
          "Parental_Education_Level": 0.561783,
          "Distance_from_Home": -0.484382,
          "Gender": -0.014013
        }
      },
      {
        "intercept": 35.255985,
        "coefficients": {
          "Hours_Studied": 0.279357,
          "Attendance": 0.198898,
          "Parental_Involvement": 0.9508,
          "Access_to_Resources": 1.074588,
          "Extracurricular_Activities": 0.631492,
          "Sleep_Hours": -0.025407,
          "Previous_Scores": 0.048076,
          "Motivation_Level": 0.55698,
          "Internet_Access": 1.141776,
          "Tutoring_Sessions": 0.514012,
          "Family_Income": 0.523428,
          "Teacher_Quality": 0.511992,
          "School_Type": -0.014145,
          "Peer_Influence": 0.4551,
          "Physical_Activity": 0.195722,
          "Learning_Disabilities": -1.049096,
          "Parental_Education_Level": 0.529993,
          "Distance_from_Home": -0.505657,
          "Gender": -0.02115
        }
      },
      {
        "intercept": 34.294215,
        "coefficients": {
          "Hours_Studied": 0.295678,
          "Attendance": 0.203993,
          "Parental_Involvement": 1.034359,
          "Access_to_Resources": 1.056473,
          "Extracurricular_Activities": 0.607288,
          "Sleep_Hours": -0.023655,
          "Previous_Scores": 0.050595,
          "Motivation_Level": 0.532044,
          "Internet_Access": 1.039021,
          "Tutoring_Sessions": 0.484773,
          "Family_Income": 0.599641,
          "Teacher_Quality": 0.451295,
          "School_Type": 0.012504,
          "Peer_Influence": 0.483123,
          "Physical_Activity": 0.233676,
          "Learning_Disabilities": -0.891787,
          "Parental_Education_Level": 0.458499,
          "Distance_from_Home": -0.459648,
          "Gender": -0.012422
        }
      },
      {
        "intercept": 35.91035,
        "coefficients": {
          "Hours_Studied": 0.285572,
          "Attendance": 0.196247,
          "Parental_Involvement": 1.006545,
          "Access_to_Resources": 1.088271,
          "Extracurricular_Activities": 0.591338,
          "Sleep_Hours": -0.004653,
          "Previous_Scores": 0.042622,
          "Motivation_Level": 0.570846,
          "Internet_Access": 0.732799,
          "Tutoring_Sessions": 0.512295,
          "Family_Income": 0.520454,
          "Teacher_Quality": 0.632748,
          "School_Type": -0.045865,
          "Peer_Influence": 0.439941,
          "Physical_Activity": 0.173606,
          "Learning_Disabilities": -0.769698,
          "Parental_Education_Level": 0.478164,
          "Distance_from_Home": -0.484404,
          "Gender": -0.026695
        }
      },
      {
        "intercept": 34.61286,
        "coefficients": {
          "Hours_Studied": 0.303004,
          "Attendance": 0.201279,
          "Parental_Involvement": 0.972503,
          "Access_to_Resources": 1.035603,
          "Extracurricular_Activities": 0.455786,
          "Sleep_Hours": 0.005628,
          "Previous_Scores": 0.049252,
          "Motivation_Level": 0.548775,
          "Internet_Access": 0.863602,
          "Tutoring_Sessions": 0.520659,
          "Family_Income": 0.519087,
          "Teacher_Quality": 0.442663,
          "School_Type": -0.03612,
          "Peer_Influence": 0.562653,
          "Physical_Activity": 0.19335,
          "Learning_Disabilities": -0.814275,
          "Parental_Education_Level": 0.512072,
          "Distance_from_Home": -0.448014,
          "Gender": -0.042803
        }
      },
      {
        "intercept": 34.462217,
        "coefficients": {
          "Hours_Studied": 0.293702,
          "Attendance": 0.201559,
          "Parental_Involvement": 0.934611,
          "Access_to_Resources": 0.988665,
          "Extracurricular_Activities": 0.529538,
          "Sleep_Hours": 0.013991,
          "Previous_Scores": 0.049381,
          "Motivation_Level": 0.456413,
          "Internet_Access": 1.036987,
          "Tutoring_Sessions": 0.499866,
          "Family_Income": 0.533008,
          "Teacher_Quality": 0.576503,
          "School_Type": -0.145985,
          "Peer_Influence": 0.525977,
          "Physical_Activity": 0.239015,
          "Learning_Disabilities": -0.8893,
          "Parental_Education_Level": 0.511364,
          "Distance_from_Home": -0.470979,
          "Gender": -0.003324
        }
      },
      {
        "intercept": 35.10231,
        "coefficients": {
          "Hours_Studied": 0.304521,
          "Attendance": 0.198883,
          "Parental_Involvement": 0.983465,
          "Access_to_Resources": 0.921782,
          "Extracurricular_Activities": 0.495522,
          "Sleep_Hours": -0.019527,
          "Previous_Scores": 0.047006,
          "Motivation_Level": 0.594019,
          "Internet_Access": 0.899439,
          "Tutoring_Sessions": 0.510584,
          "Family_Income": 0.585533,
          "Teacher_Quality": 0.572876,
          "School_Type": -0.047916,
          "Peer_Influence": 0.554588,
          "Physical_Activity": 0.162493,
          "Learning_Disabilities": -0.809327,
          "Parental_Education_Level": 0.484203,
          "Distance_from_Home": -0.516425,
          "Gender": 0.005629
        }
      },
      {
        "intercept": 35.05755,
        "coefficients": {
          "Hours_Studied": 0.28941,
          "Attendance": 0.20245,
          "Parental_Involvement": 0.970874,
          "Access_to_Resources": 1.082667,
          "Extracurricular_Activities": 0.564204,
          "Sleep_Hours": 0.015607,
          "Previous_Scores": 0.043345,
          "Motivation_Level": 0.527592,
          "Internet_Access": 1.045752,
          "Tutoring_Sessions": 0.524353,
          "Family_Income": 0.59918,
          "Teacher_Quality": 0.544987,
          "School_Type": 0.009309,
          "Peer_Influence": 0.456792,
          "Physical_Activity": 0.182075,
          "Learning_Disabilities": -0.848629,
          "Parental_Education_Level": 0.446807,
          "Distance_from_Home": -0.484269,
          "Gender": -0.163077
        }
      },
      {
        "intercept": 34.93082,
        "coefficients": {
          "Hours_Studied": 0.295075,
          "Attendance": 0.198801,
          "Parental_Involvement": 1.023294,
          "Access_to_Resources": 1.000289,
          "Extracurricular_Activities": 0.579246,
          "Sleep_Hours": -0.009292,
          "Previous_Scores": 0.050644,
          "Motivation_Level": 0.505845,
          "Internet_Access": 1.053622,
          "Tutoring_Sessions": 0.483175,
          "Family_Income": 0.480993,
          "Teacher_Quality": 0.506172,
          "School_Type": 0.016899,
          "Peer_Influence": 0.502025,
          "Physical_Activity": 0.18675,
          "Learning_Disabilities": -0.949445,
          "Parental_Education_Level": 0.463905,
          "Distance_from_Home": -0.516122,
          "Gender": -0.072348
        }
      },
      {
        "intercept": 34.797357,
        "coefficients": {
          "Hours_Studied": 0.294451,
          "Attendance": 0.199526,
          "Parental_Involvement": 1.093216,
          "Access_to_Resources": 1.084446,
          "Extracurricular_Activities": 0.599518,
          "Sleep_Hours": -0.017097,
          "Previous_Scores": 0.049481,
          "Motivation_Level": 0.482139,
          "Internet_Access": 1.143058,
          "Tutoring_Sessions": 0.474746,
          "Family_Income": 0.513596,
          "Teacher_Quality": 0.531254,
          "School_Type": -0.054458,
          "Peer_Influence": 0.509698,
          "Physical_Activity": 0.149933,
          "Learning_Disabilities": -0.950272,
          "Parental_Education_Level": 0.501855,
          "Distance_from_Home": -0.422044,
          "Gender": -0.047912
        }
      },
      {
        "intercept": 34.968713,
        "coefficients": {
          "Hours_Studied": 0.288124,
          "Attendance": 0.198203,
          "Parental_Involvement": 1.014374,
          "Access_to_Resources": 1.053729,
          "Extracurricular_Activities": 0.51559,
          "Sleep_Hours": 0.009167,
          "Previous_Scores": 0.050658,
          "Motivation_Level": 0.490185,
          "Internet_Access": 1.065859,
          "Tutoring_Sessions": 0.477878,
          "Family_Income": 0.447347,
          "Teacher_Quality": 0.531572,
          "School_Type": 0.106024,
          "Peer_Influence": 0.502295,
          "Physical_Activity": 0.18759,
          "Learning_Disabilities": -0.875098,
          "Parental_Education_Level": 0.470642,
          "Distance_from_Home": -0.509797,
          "Gender": -0.090034
        }
      },
      {
        "intercept": 34.743399,
        "coefficients": {
          "Hours_Studied": 0.29466,
          "Attendance": 0.200279,
          "Parental_Involvement": 1.017526,
          "Access_to_Resources": 1.037199,
          "Extracurricular_Activities": 0.537022,
          "Sleep_Hours": -0.019446,
          "Previous_Scores": 0.050169,
          "Motivation_Level": 0.551528,
          "Internet_Access": 1.038622,
          "Tutoring_Sessions": 0.526282,
          "Family_Income": 0.540728,
          "Teacher_Quality": 0.524668,
          "School_Type": -0.02473,
          "Peer_Influence": 0.497724,
          "Physical_Activity": 0.180278,
          "Learning_Disabilities": -0.912352,
          "Parental_Education_Level": 0.453063,
          "Distance_from_Home": -0.500755,
          "Gender": -0.023381
        }
      },
      {
        "intercept": 34.354514,
        "coefficients": {
          "Hours_Studied": 0.287016,
          "Attendance": 0.198115,
          "Parental_Involvement": 0.992045,
          "Access_to_Resources": 1.008659,
          "Extracurricular_Activities": 0.575894,
          "Sleep_Hours": 0.03232,
          "Previous_Scores": 0.054566,
          "Motivation_Level": 0.536437,
          "Internet_Access": 1.055349,
          "Tutoring_Sessions": 0.496534,
          "Family_Income": 0.493205,
          "Teacher_Quality": 0.475633,
          "School_Type": 0.110481,
          "Peer_Influence": 0.573255,
          "Physical_Activity": 0.173944,
          "Learning_Disabilities": -0.81967,
          "Parental_Education_Level": 0.452388,
          "Distance_from_Home": -0.443547,
          "Gender": 0.035397
        }
      },
      {
        "intercept": 35.139265,
        "coefficients": {
          "Hours_Studied": 0.298782,
          "Attendance": 0.196861,
          "Parental_Involvement": 0.993116,
          "Access_to_Resources": 0.965721,
          "Extracurricular_Activities": 0.564957,
          "Sleep_Hours": -0.03492,
          "Previous_Scores": 0.049631,
          "Motivation_Level": 0.518154,
          "Internet_Access": 0.892839,
          "Tutoring_Sessions": 0.500597,
          "Family_Income": 0.500766,
          "Teacher_Quality": 0.545637,
          "School_Type": 0.022174,
          "Peer_Influence": 0.543921,
          "Physical_Activity": 0.223466,
          "Learning_Disabilities": -0.926496,
          "Parental_Education_Level": 0.532727,
          "Distance_from_Home": -0.491697,
          "Gender": -0.030968
        }
      },
      {
        "intercept": 35.097046,
        "coefficients": {
          "Hours_Studied": 0.29557,
          "Attendance": 0.197465,
          "Parental_Involvement": 1.022302,
          "Access_to_Resources": 0.971649,
          "Extracurricular_Activities": 0.592738,
          "Sleep_Hours": -0.010453,
          "Previous_Scores": 0.048082,
          "Motivation_Level": 0.535061,
          "Internet_Access": 0.989592,
          "Tutoring_Sessions": 0.516498,
          "Family_Income": 0.555798,
          "Teacher_Quality": 0.512662,
          "School_Type": -0.065661,
          "Peer_Influence": 0.509231,
          "Physical_Activity": 0.22103,
          "Learning_Disabilities": -0.937529,
          "Parental_Education_Level": 0.470603,
          "Distance_from_Home": -0.48465,
          "Gender": -0.12898
        }
      },
      {
        "intercept": 35.391461,
        "coefficients": {
          "Hours_Studied": 0.292308,
          "Attendance": 0.197589,
          "Parental_Involvement": 0.978098,
          "Access_to_Resources": 1.115597,
          "Extracurricular_Activities": 0.572084,
          "Sleep_Hours": -0.031432,
          "Previous_Scores": 0.04807,
          "Motivation_Level": 0.53735,
          "Internet_Access": 0.995915,
          "Tutoring_Sessions": 0.470612,
          "Family_Income": 0.497144,
          "Teacher_Quality": 0.506557,
          "School_Type": -0.027827,
          "Peer_Influence": 0.507179,
          "Physical_Activity": 0.179289,
          "Learning_Disabilities": -0.779138,
          "Parental_Education_Level": 0.481378,
          "Distance_from_Home": -0.454367,
          "Gender": -0.132622
        }
      },
      {
        "intercept": 34.719361,
        "coefficients": {
          "Hours_Studied": 0.297004,
          "Attendance": 0.201349,
          "Parental_Involvement": 0.928661,
          "Access_to_Resources": 1.049647,
          "Extracurricular_Activities": 0.571243,
          "Sleep_Hours": -0.023303,
          "Previous_Scores": 0.051605,
          "Motivation_Level": 0.504126,
          "Internet_Access": 0.832817,
          "Tutoring_Sessions": 0.512086,
          "Family_Income": 0.566988,
          "Teacher_Quality": 0.544396,
          "School_Type": -0.08815,
          "Peer_Influence": 0.528681,
          "Physical_Activity": 0.210556,
          "Learning_Disabilities": -0.916488,
          "Parental_Education_Level": 0.48897,
          "Distance_from_Home": -0.485561,
          "Gender": -0.059289
        }
      },
      {
        "intercept": 34.805833,
        "coefficients": {
          "Hours_Studied": 0.300639,
          "Attendance": 0.201767,
          "Parental_Involvement": 0.991435,
          "Access_to_Resources": 1.018523,
          "Extracurricular_Activities": 0.549029,
          "Sleep_Hours": -0.031211,
          "Previous_Scores": 0.049384,
          "Motivation_Level": 0.531574,
          "Internet_Access": 0.830972,
          "Tutoring_Sessions": 0.515015,
          "Family_Income": 0.548621,
          "Teacher_Quality": 0.651316,
          "School_Type": -0.060936,
          "Peer_Influence": 0.57758,
          "Physical_Activity": 0.155334,
          "Learning_Disabilities": -0.884572,
          "Parental_Education_Level": 0.422723,
          "Distance_from_Home": -0.491273,
          "Gender": -0.063957
        }
      },
      {
        "intercept": 35.574645,
        "coefficients": {
          "Hours_Studied": 0.29187,
          "Attendance": 0.197938,
          "Parental_Involvement": 1.012749,
          "Access_to_Resources": 1.017237,
          "Extracurricular_Activities": 0.525944,
          "Sleep_Hours": -0.028165,
          "Previous_Scores": 0.046362,
          "Motivation_Level": 0.544616,
          "Internet_Access": 0.839366,
          "Tutoring_Sessions": 0.525977,
          "Family_Income": 0.551059,
          "Teacher_Quality": 0.457659,
          "School_Type": -0.022108,
          "Peer_Influence": 0.464789,
          "Physical_Activity": 0.190484,
          "Learning_Disabilities": -0.882731,
          "Parental_Education_Level": 0.499551,
          "Distance_from_Home": -0.48263,
          "Gender": 4.6e-05
        }
      },
      {
        "intercept": 34.097868,
        "coefficients": {
          "Hours_Studied": 0.29127,
          "Attendance": 0.203037,
          "Parental_Involvement": 0.918377,
          "Access_to_Resources": 1.011302,
          "Extracurricular_Activities": 0.501502,
          "Sleep_Hours": 0.031527,
          "Previous_Scores": 0.050865,
          "Motivation_Level": 0.481969,
          "Internet_Access": 1.073865,
          "Tutoring_Sessions": 0.511596,
          "Family_Income": 0.59217,
          "Teacher_Quality": 0.620316,
          "School_Type": 0.020783,
          "Peer_Influence": 0.583963,
          "Physical_Activity": 0.203002,
          "Learning_Disabilities": -0.905482,
          "Parental_Education_Level": 0.528542,
          "Distance_from_Home": -0.581696,
          "Gender": -0.103103
        }
      },
      {
        "intercept": 34.587818,
        "coefficients": {
          "Hours_Studied": 0.295343,
          "Attendance": 0.202683,
          "Parental_Involvement": 1.027081,
          "Access_to_Resources": 1.065066,
          "Extracurricular_Activities": 0.560527,
          "Sleep_Hours": -0.020293,
          "Previous_Scores": 0.050097,
          "Motivation_Level": 0.509183,
          "Internet_Access": 0.98177,
          "Tutoring_Sessions": 0.506077,
          "Family_Income": 0.526599,
          "Teacher_Quality": 0.521855,
          "School_Type": -0.023603,
          "Peer_Influence": 0.484426,
          "Physical_Activity": 0.223017,
          "Learning_Disabilities": -0.955504,
          "Parental_Education_Level": 0.44383,
          "Distance_from_Home": -0.504649,
          "Gender": -0.095787
        }
      },
      {
        "intercept": 34.294582,
        "coefficients": {
          "Hours_Studied": 0.305811,
          "Attendance": 0.201308,
          "Parental_Involvement": 0.981783,
          "Access_to_Resources": 1.023701,
          "Extracurricular_Activities": 0.473387,
          "Sleep_Hours": 0.009037,
          "Previous_Scores": 0.051139,
          "Motivation_Level": 0.497942,
          "Internet_Access": 0.921194,
          "Tutoring_Sessions": 0.5114,
          "Family_Income": 0.503841,
          "Teacher_Quality": 0.521227,
          "School_Type": -0.113055,
          "Peer_Influence": 0.523791,
          "Physical_Activity": 0.211487,
          "Learning_Disabilities": -0.981994,
          "Parental_Education_Level": 0.498544,
          "Distance_from_Home": -0.463395,
          "Gender": -0.019228
        }
      },
      {
        "intercept": 35.106989,
        "coefficients": {
          "Hours_Studied": 0.291001,
          "Attendance": 0.198577,
          "Parental_Involvement": 0.974967,
          "Access_to_Resources": 1.00289,
          "Extracurricular_Activities": 0.565384,
          "Sleep_Hours": 0.003593,
          "Previous_Scores": 0.049196,
          "Motivation_Level": 0.490542,
          "Internet_Access": 0.906148,
          "Tutoring_Sessions": 0.501106,
          "Family_Income": 0.5438,
          "Teacher_Quality": 0.53941,
          "School_Type": -0.043729,
          "Peer_Influence": 0.488924,
          "Physical_Activity": 0.189804,
          "Learning_Disabilities": -0.980336,
          "Parental_Education_Level": 0.503914,
          "Distance_from_Home": -0.488663,
          "Gender": -0.051732
        }
      },
      {
        "intercept": 34.815413,
        "coefficients": {
          "Hours_Studied": 0.288493,
          "Attendance": 0.198965,
          "Parental_Involvement": 1.004749,
          "Access_to_Resources": 1.131356,
          "Extracurricular_Activities": 0.576139,
          "Sleep_Hours": 0.005382,
          "Previous_Scores": 0.049426,
          "Motivation_Level": 0.515832,
          "Internet_Access": 1.054003,
          "Tutoring_Sessions": 0.481793,
          "Family_Income": 0.515424,
          "Teacher_Quality": 0.470531,
          "School_Type": 0.000118,
          "Peer_Influence": 0.500411,
          "Physical_Activity": 0.192248,
          "Learning_Disabilities": -0.761455,
          "Parental_Education_Level": 0.447926,
          "Distance_from_Home": -0.395778,
          "Gender": -0.03501
        }
      },
      {
        "intercept": 34.853898,
        "coefficients": {
          "Hours_Studied": 0.296164,
          "Attendance": 0.201695,
          "Parental_Involvement": 0.956541,
          "Access_to_Resources": 1.067025,
          "Extracurricular_Activities": 0.565091,
          "Sleep_Hours": -0.009073,
          "Previous_Scores": 0.049118,
          "Motivation_Level": 0.486257,
          "Internet_Access": 0.863359,
          "Tutoring_Sessions": 0.498034,
          "Family_Income": 0.515078,
          "Teacher_Quality": 0.528353,
          "School_Type": -0.075489,
          "Peer_Influence": 0.485424,
          "Physical_Activity": 0.197706,
          "Learning_Disabilities": -0.922252,
          "Parental_Education_Level": 0.492742,
          "Distance_from_Home": -0.475187,
          "Gender": -0.091879
        }
      },
      {
        "intercept": 34.428758,
        "coefficients": {
          "Hours_Studied": 0.302507,
          "Attendance": 0.202886,
          "Parental_Involvement": 0.96857,
          "Access_to_Resources": 1.024331,
          "Extracurricular_Activities": 0.520741,
          "Sleep_Hours": -0.002581,
          "Previous_Scores": 0.04909,
          "Motivation_Level": 0.477028,
          "Internet_Access": 1.013133,
          "Tutoring_Sessions": 0.476125,
          "Family_Income": 0.586875,
          "Teacher_Quality": 0.52364,
          "School_Type": -0.074533,
          "Peer_Influence": 0.522713,
          "Physical_Activity": 0.237694,
          "Learning_Disabilities": -0.90168,
          "Parental_Education_Level": 0.474487,
          "Distance_from_Home": -0.51785,
          "Gender": -0.120851
        }
      },
      {
        "intercept": 34.804974,
        "coefficients": {
          "Hours_Studied": 0.301361,
          "Attendance": 0.199477,
          "Parental_Involvement": 0.935368,
          "Access_to_Resources": 0.995758,
          "Extracurricular_Activities": 0.491269,
          "Sleep_Hours": -0.005866,
          "Previous_Scores": 0.048132,
          "Motivation_Level": 0.516318,
          "Internet_Access": 0.973384,
          "Tutoring_Sessions": 0.519524,
          "Family_Income": 0.510073,
          "Teacher_Quality": 0.525399,
          "School_Type": -0.029748,
          "Peer_Influence": 0.549161,
          "Physical_Activity": 0.214979,
          "Learning_Disabilities": -0.955819,
          "Parental_Education_Level": 0.516409,
          "Distance_from_Home": -0.473761,
          "Gender": -0.055769
        }
      },
      {
        "intercept": 34.815379,
        "coefficients": {
          "Hours_Studied": 0.29805,
          "Attendance": 0.197494,
          "Parental_Involvement": 1.014157,
          "Access_to_Resources": 0.969098,
          "Extracurricular_Activities": 0.557329,
          "Sleep_Hours": 0.008212,
          "Previous_Scores": 0.050056,
          "Motivation_Level": 0.511013,
          "Internet_Access": 0.750332,
          "Tutoring_Sessions": 0.498342,
          "Family_Income": 0.531122,
          "Teacher_Quality": 0.507974,
          "School_Type": -0.027801,
          "Peer_Influence": 0.597603,
          "Physical_Activity": 0.203255,
          "Learning_Disabilities": -0.633812,
          "Parental_Education_Level": 0.469045,
          "Distance_from_Home": -0.425689,
          "Gender": 0.033837
        }
      },
      {
        "intercept": 35.619006,
        "coefficients": {
          "Hours_Studied": 0.284204,
          "Attendance": 0.19498,
          "Parental_Involvement": 0.994153,
          "Access_to_Resources": 0.975508,
          "Extracurricular_Activities": 0.578379,
          "Sleep_Hours": -0.010295,
          "Previous_Scores": 0.048667,
          "Motivation_Level": 0.566847,
          "Internet_Access": 0.913503,
          "Tutoring_Sessions": 0.485775,
          "Family_Income": 0.55272,
          "Teacher_Quality": 0.545854,
          "School_Type": 0.003869,
          "Peer_Influence": 0.511177,
          "Physical_Activity": 0.156222,
          "Learning_Disabilities": -0.835972,
          "Parental_Education_Level": 0.474904,
          "Distance_from_Home": -0.471304,
          "Gender": 0.011976
        }
      },
      {
        "intercept": 34.898187,
        "coefficients": {
          "Hours_Studied": 0.291974,
          "Attendance": 0.200022,
          "Parental_Involvement": 0.968141,
          "Access_to_Resources": 1.091516,
          "Extracurricular_Activities": 0.552181,
          "Sleep_Hours": 0.017996,
          "Previous_Scores": 0.046289,
          "Motivation_Level": 0.485735,
          "Internet_Access": 0.906192,
          "Tutoring_Sessions": 0.505476,
          "Family_Income": 0.568924,
          "Teacher_Quality": 0.554674,
          "School_Type": -0.062757,
          "Peer_Influence": 0.463948,
          "Physical_Activity": 0.237794,
          "Learning_Disabilities": -0.914573,
          "Parental_Education_Level": 0.464988,
          "Distance_from_Home": -0.471696,
          "Gender": -0.09738
        }
      },
      {
        "intercept": 34.954116,
        "coefficients": {
          "Hours_Studied": 0.297055,
          "Attendance": 0.199091,
          "Parental_Involvement": 1.001542,
          "Access_to_Resources": 1.015258,
          "Extracurricular_Activities": 0.605207,
          "Sleep_Hours": -0.010586,
          "Previous_Scores": 0.04859,
          "Motivation_Level": 0.529524,
          "Internet_Access": 0.903386,
          "Tutoring_Sessions": 0.508723,
          "Family_Income": 0.527271,
          "Teacher_Quality": 0.537036,
          "School_Type": 0.009555,
          "Peer_Influence": 0.609936,
          "Physical_Activity": 0.145798,
          "Learning_Disabilities": -0.846346,
          "Parental_Education_Level": 0.521129,
          "Distance_from_Home": -0.469353,
          "Gender": -0.018087
        }
      },
      {
        "intercept": 34.779328,
        "coefficients": {
          "Hours_Studied": 0.29384,
          "Attendance": 0.199523,
          "Parental_Involvement": 1.013105,
          "Access_to_Resources": 0.969604,
          "Extracurricular_Activities": 0.534875,
          "Sleep_Hours": 4.6e-05,
          "Previous_Scores": 0.049572,
          "Motivation_Level": 0.569096,
          "Internet_Access": 1.155106,
          "Tutoring_Sessions": 0.501669,
          "Family_Income": 0.484699,
          "Teacher_Quality": 0.497178,
          "School_Type": -0.060716,
          "Peer_Influence": 0.546123,
          "Physical_Activity": 0.13928,
          "Learning_Disabilities": -0.88595,
          "Parental_Education_Level": 0.529538,
          "Distance_from_Home": -0.441127,
          "Gender": 0.048569
        }
      },
      {
        "intercept": 34.300506,
        "coefficients": {
          "Hours_Studied": 0.298522,
          "Attendance": 0.201222,
          "Parental_Involvement": 1.088959,
          "Access_to_Resources": 1.030702,
          "Extracurricular_Activities": 0.590962,
          "Sleep_Hours": -0.015106,
          "Previous_Scores": 0.054015,
          "Motivation_Level": 0.575307,
          "Internet_Access": 1.009371,
          "Tutoring_Sessions": 0.501734,
          "Family_Income": 0.484159,
          "Teacher_Quality": 0.537475,
          "School_Type": -0.09787,
          "Peer_Influence": 0.484943,
          "Physical_Activity": 0.173973,
          "Learning_Disabilities": -0.944042,
          "Parental_Education_Level": 0.446618,
          "Distance_from_Home": -0.427708,
          "Gender": -0.048493
        }
      },
      {
        "intercept": 35.892041,
        "coefficients": {
          "Hours_Studied": 0.294964,
          "Attendance": 0.196806,
          "Parental_Involvement": 0.943494,
          "Access_to_Resources": 1.039338,
          "Extracurricular_Activities": 0.496911,
          "Sleep_Hours": -0.012219,
          "Previous_Scores": 0.043124,
          "Motivation_Level": 0.536328,
          "Internet_Access": 0.833317,
          "Tutoring_Sessions": 0.484872,
          "Family_Income": 0.541375,
          "Teacher_Quality": 0.539782,
          "School_Type": -0.103466,
          "Peer_Influence": 0.457535,
          "Physical_Activity": 0.182318,
          "Learning_Disabilities": -0.61378,
          "Parental_Education_Level": 0.481722,
          "Distance_from_Home": -0.442416,
          "Gender": -0.040673
        }
      },
      {
        "intercept": 34.473373,
        "coefficients": {
          "Hours_Studied": 0.298252,
          "Attendance": 0.20139,
          "Parental_Involvement": 1.043426,
          "Access_to_Resources": 1.025279,
          "Extracurricular_Activities": 0.510229,
          "Sleep_Hours": -0.008677,
          "Previous_Scores": 0.050246,
          "Motivation_Level": 0.487503,
          "Internet_Access": 1.013553,
          "Tutoring_Sessions": 0.49369,
          "Family_Income": 0.513915,
          "Teacher_Quality": 0.570498,
          "School_Type": -0.068578,
          "Peer_Influence": 0.508506,
          "Physical_Activity": 0.182659,
          "Learning_Disabilities": -0.950282,
          "Parental_Education_Level": 0.489747,
          "Distance_from_Home": -0.428294,
          "Gender": 0.064997
        }
      },
      {
        "intercept": 34.702914,
        "coefficients": {
          "Hours_Studied": 0.296686,
          "Attendance": 0.200065,
          "Parental_Involvement": 1.032254,
          "Access_to_Resources": 1.056542,
          "Extracurricular_Activities": 0.462421,
          "Sleep_Hours": 0.009526,
          "Previous_Scores": 0.049769,
          "Motivation_Level": 0.520912,
          "Internet_Access": 1.022595,
          "Tutoring_Sessions": 0.513222,
          "Family_Income": 0.474426,
          "Teacher_Quality": 0.482563,
          "School_Type": -0.048234,
          "Peer_Influence": 0.477879,
          "Physical_Activity": 0.187603,
          "Learning_Disabilities": -0.990597,
          "Parental_Education_Level": 0.483446,
          "Distance_from_Home": -0.485419,
          "Gender": -0.017004
        }
      },
      {
        "intercept": 35.276294,
        "coefficients": {
          "Hours_Studied": 0.29453,
          "Attendance": 0.196993,
          "Parental_Involvement": 0.959883,
          "Access_to_Resources": 1.019697,
          "Extracurricular_Activities": 0.568751,
          "Sleep_Hours": 0.005775,
          "Previous_Scores": 0.046124,
          "Motivation_Level": 0.536661,
          "Internet_Access": 0.862358,
          "Tutoring_Sessions": 0.505479,
          "Family_Income": 0.531898,
          "Teacher_Quality": 0.508735,
          "School_Type": -0.048334,
          "Peer_Influence": 0.519252,
          "Physical_Activity": 0.189172,
          "Learning_Disabilities": -0.760624,
          "Parental_Education_Level": 0.505015,
          "Distance_from_Home": -0.439971,
          "Gender": 0.021186
        }
      },
      {
        "intercept": 35.101617,
        "coefficients": {
          "Hours_Studied": 0.293704,
          "Attendance": 0.19613,
          "Parental_Involvement": 0.990255,
          "Access_to_Resources": 0.990796,
          "Extracurricular_Activities": 0.577713,
          "Sleep_Hours": 0.004805,
          "Previous_Scores": 0.047196,
          "Motivation_Level": 0.580682,
          "Internet_Access": 0.970086,
          "Tutoring_Sessions": 0.512392,
          "Family_Income": 0.577602,
          "Teacher_Quality": 0.530189,
          "School_Type": -0.022335,
          "Peer_Influence": 0.53992,
          "Physical_Activity": 0.18058,
          "Learning_Disabilities": -0.749354,
          "Parental_Education_Level": 0.486975,
          "Distance_from_Home": -0.4202,
          "Gender": -0.018196
        }
      },
      {
        "intercept": 35.254295,
        "coefficients": {
          "Hours_Studied": 0.283782,
          "Attendance": 0.199167,
          "Parental_Involvement": 0.984448,
          "Access_to_Resources": 1.099801,
          "Extracurricular_Activities": 0.614434,
          "Sleep_Hours": 0.020659,
          "Previous_Scores": 0.045767,
          "Motivation_Level": 0.534508,
          "Internet_Access": 1.081139,
          "Tutoring_Sessions": 0.51524,
          "Family_Income": 0.457958,
          "Teacher_Quality": 0.52835,
          "School_Type": 0.04588,
          "Peer_Influence": 0.438462,
          "Physical_Activity": 0.151383,
          "Learning_Disabilities": -0.65217,
          "Parental_Education_Level": 0.473253,
          "Distance_from_Home": -0.496091,
          "Gender": -0.141833
        }
      },
      {
        "intercept": 35.303802,
        "coefficients": {
          "Hours_Studied": 0.292593,
          "Attendance": 0.198009,
          "Parental_Involvement": 0.960927,
          "Access_to_Resources": 0.974431,
          "Extracurricular_Activities": 0.494313,
          "Sleep_Hours": -0.037223,
          "Previous_Scores": 0.051714,
          "Motivation_Level": 0.525696,
          "Internet_Access": 0.91559,
          "Tutoring_Sessions": 0.47392,
          "Family_Income": 0.576204,
          "Teacher_Quality": 0.607083,
          "School_Type": -0.112483,
          "Peer_Influence": 0.479482,
          "Physical_Activity": 0.177694,
          "Learning_Disabilities": -0.896309,
          "Parental_Education_Level": 0.477039,
          "Distance_from_Home": -0.522127,
          "Gender": -0.004451
        }
      },
      {
        "intercept": 35.318103,
        "coefficients": {
          "Hours_Studied": 0.293809,
          "Attendance": 0.197781,
          "Parental_Involvement": 1.015781,
          "Access_to_Resources": 0.964308,
          "Extracurricular_Activities": 0.560758,
          "Sleep_Hours": -0.019209,
          "Previous_Scores": 0.047234,
          "Motivation_Level": 0.57899,
          "Internet_Access": 1.073608,
          "Tutoring_Sessions": 0.510407,
          "Family_Income": 0.488709,
          "Teacher_Quality": 0.557152,
          "School_Type": -0.006986,
          "Peer_Influence": 0.548915,
          "Physical_Activity": 0.126328,
          "Learning_Disabilities": -0.814908,
          "Parental_Education_Level": 0.45816,
          "Distance_from_Home": -0.434043,
          "Gender": -0.078695
        }
      },
      {
        "intercept": 34.799435,
        "coefficients": {
          "Hours_Studied": 0.297073,
          "Attendance": 0.199071,
          "Parental_Involvement": 1.012993,
          "Access_to_Resources": 1.016826,
          "Extracurricular_Activities": 0.451438,
          "Sleep_Hours": -0.001821,
          "Previous_Scores": 0.049229,
          "Motivation_Level": 0.522557,
          "Internet_Access": 0.935394,
          "Tutoring_Sessions": 0.495357,
          "Family_Income": 0.547269,
          "Teacher_Quality": 0.548565,
          "School_Type": -0.04996,
          "Peer_Influence": 0.54315,
          "Physical_Activity": 0.208503,
          "Learning_Disabilities": -0.940513,
          "Parental_Education_Level": 0.457634,
          "Distance_from_Home": -0.490931,
          "Gender": 3.5e-05
        }
      },
      {
        "intercept": 34.77926,
        "coefficients": {
          "Hours_Studied": 0.299746,
          "Attendance": 0.202208,
          "Parental_Involvement": 0.987842,
          "Access_to_Resources": 1.031024,
          "Extracurricular_Activities": 0.515587,
          "Sleep_Hours": -0.010876,
          "Previous_Scores": 0.048918,
          "Motivation_Level": 0.493845,
          "Internet_Access": 0.976358,
          "Tutoring_Sessions": 0.526482,
          "Family_Income": 0.512286,
          "Teacher_Quality": 0.462699,
          "School_Type": -0.051267,
          "Peer_Influence": 0.481448,
          "Physical_Activity": 0.174105,
          "Learning_Disabilities": -0.787391,
          "Parental_Education_Level": 0.503945,
          "Distance_from_Home": -0.474829,
          "Gender": -0.026671
        }
      },
      {
        "intercept": 34.612166,
        "coefficients": {
          "Hours_Studied": 0.300686,
          "Attendance": 0.200787,
          "Parental_Involvement": 0.984172,
          "Access_to_Resources": 0.981696,
          "Extracurricular_Activities": 0.512037,
          "Sleep_Hours": 0.012856,
          "Previous_Scores": 0.047286,
          "Motivation_Level": 0.538384,
          "Internet_Access": 1.049884,
          "Tutoring_Sessions": 0.480381,
          "Family_Income": 0.558108,
          "Teacher_Quality": 0.5676,
          "School_Type": -0.11341,
          "Peer_Influence": 0.588454,
          "Physical_Activity": 0.177948,
          "Learning_Disabilities": -0.77598,
          "Parental_Education_Level": 0.449914,
          "Distance_from_Home": -0.472198,
          "Gender": -0.035096
        }
      },
      {
        "intercept": 35.506429,
        "coefficients": {
          "Hours_Studied": 0.285614,
          "Attendance": 0.197567,
          "Parental_Involvement": 0.928723,
          "Access_to_Resources": 1.004244,
          "Extracurricular_Activities": 0.514635,
          "Sleep_Hours": -0.005953,
          "Previous_Scores": 0.047104,
          "Motivation_Level": 0.500138,
          "Internet_Access": 1.103748,
          "Tutoring_Sessions": 0.487387,
          "Family_Income": 0.48194,
          "Teacher_Quality": 0.585337,
          "School_Type": 0.030295,
          "Peer_Influence": 0.510086,
          "Physical_Activity": 0.160717,
          "Learning_Disabilities": -0.738728,
          "Parental_Education_Level": 0.462074,
          "Distance_from_Home": -0.524077,
          "Gender": -0.084379
        }
      },
      {
        "intercept": 35.253231,
        "coefficients": {
          "Hours_Studied": 0.295016,
          "Attendance": 0.197969,
          "Parental_Involvement": 1.016772,
          "Access_to_Resources": 1.119269,
          "Extracurricular_Activities": 0.510087,
          "Sleep_Hours": -0.017045,
          "Previous_Scores": 0.052287,
          "Motivation_Level": 0.497527,
          "Internet_Access": 0.651846,
          "Tutoring_Sessions": 0.482238,
          "Family_Income": 0.47472,
          "Teacher_Quality": 0.531943,
          "School_Type": -0.062135,
          "Peer_Influence": 0.449329,
          "Physical_Activity": 0.159411,
          "Learning_Disabilities": -0.85053,
          "Parental_Education_Level": 0.542173,
          "Distance_from_Home": -0.468423,
          "Gender": -0.02566
        }
      },
      {
        "intercept": 35.149943,
        "coefficients": {
          "Hours_Studied": 0.293139,
          "Attendance": 0.197816,
          "Parental_Involvement": 0.956161,
          "Access_to_Resources": 1.008082,
          "Extracurricular_Activities": 0.465502,
          "Sleep_Hours": 0.011005,
          "Previous_Scores": 0.047362,
          "Motivation_Level": 0.530725,
          "Internet_Access": 1.01464,
          "Tutoring_Sessions": 0.544123,
          "Family_Income": 0.486552,
          "Teacher_Quality": 0.584511,
          "School_Type": 0.031278,
          "Peer_Influence": 0.53681,
          "Physical_Activity": 0.145869,
          "Learning_Disabilities": -0.721925,
          "Parental_Education_Level": 0.467285,
          "Distance_from_Home": -0.512467,
          "Gender": -0.061748
        }
      },
      {
        "intercept": 35.450907,
        "coefficients": {
          "Hours_Studied": 0.291263,
          "Attendance": 0.197984,
          "Parental_Involvement": 0.965889,
          "Access_to_Resources": 1.021271,
          "Extracurricular_Activities": 0.541549,
          "Sleep_Hours": -0.012569,
          "Previous_Scores": 0.046588,
          "Motivation_Level": 0.536012,
          "Internet_Access": 0.982715,
          "Tutoring_Sessions": 0.495189,
          "Family_Income": 0.544093,
          "Teacher_Quality": 0.472512,
          "School_Type": -0.035639,
          "Peer_Influence": 0.510206,
          "Physical_Activity": 0.163845,
          "Learning_Disabilities": -0.838921,
          "Parental_Education_Level": 0.48143,
          "Distance_from_Home": -0.445127,
          "Gender": 0.014578
        }
      },
      {
        "intercept": 34.599508,
        "coefficients": {
          "Hours_Studied": 0.299904,
          "Attendance": 0.198579,
          "Parental_Involvement": 1.045516,
          "Access_to_Resources": 1.006012,
          "Extracurricular_Activities": 0.585706,
          "Sleep_Hours": 0.015938,
          "Previous_Scores": 0.047229,
          "Motivation_Level": 0.543423,
          "Internet_Access": 1.016967,
          "Tutoring_Sessions": 0.512101,
          "Family_Income": 0.573758,
          "Teacher_Quality": 0.464617,
          "School_Type": -0.019108,
          "Peer_Influence": 0.530177,
          "Physical_Activity": 0.210297,
          "Learning_Disabilities": -0.976463,
          "Parental_Education_Level": 0.535292,
          "Distance_from_Home": -0.474337,
          "Gender": 0.005575
        }
      },
      {
        "intercept": 34.35113,
        "coefficients": {
          "Hours_Studied": 0.294891,
          "Attendance": 0.202449,
          "Parental_Involvement": 0.958553,
          "Access_to_Resources": 1.063173,
          "Extracurricular_Activities": 0.639544,
          "Sleep_Hours": 0.006763,
          "Previous_Scores": 0.050325,
          "Motivation_Level": 0.547285,
          "Internet_Access": 1.025241,
          "Tutoring_Sessions": 0.508636,
          "Family_Income": 0.541066,
          "Teacher_Quality": 0.558414,
          "School_Type": -0.041278,
          "Peer_Influence": 0.493909,
          "Physical_Activity": 0.189939,
          "Learning_Disabilities": -0.995403,
          "Parental_Education_Level": 0.506578,
          "Distance_from_Home": -0.538143,
          "Gender": -0.083304
        }
      },
      {
        "intercept": 34.934877,
        "coefficients": {
          "Hours_Studied": 0.296883,
          "Attendance": 0.198594,
          "Parental_Involvement": 0.979916,
          "Access_to_Resources": 1.021549,
          "Extracurricular_Activities": 0.568975,
          "Sleep_Hours": -0.016187,
          "Previous_Scores": 0.050986,
          "Motivation_Level": 0.563038,
          "Internet_Access": 0.988468,
          "Tutoring_Sessions": 0.492679,
          "Family_Income": 0.448036,
          "Teacher_Quality": 0.5433,
          "School_Type": -0.066413,
          "Peer_Influence": 0.563379,
          "Physical_Activity": 0.159495,
          "Learning_Disabilities": -0.874142,
          "Parental_Education_Level": 0.492509,
          "Distance_from_Home": -0.462788,
          "Gender": -0.052175
        }
      },
      {
        "intercept": 34.860539,
        "coefficients": {
          "Hours_Studied": 0.294248,
          "Attendance": 0.197344,
          "Parental_Involvement": 0.975581,
          "Access_to_Resources": 1.04191,
          "Extracurricular_Activities": 0.579977,
          "Sleep_Hours": 0.025355,
          "Previous_Scores": 0.047649,
          "Motivation_Level": 0.549666,
          "Internet_Access": 0.925123,
          "Tutoring_Sessions": 0.460394,
          "Family_Income": 0.545682,
          "Teacher_Quality": 0.483835,
          "School_Type": -0.01963,
          "Peer_Influence": 0.52611,
          "Physical_Activity": 0.236343,
          "Learning_Disabilities": -0.838409,
          "Parental_Education_Level": 0.559653,
          "Distance_from_Home": -0.506327,
          "Gender": -0.038306
        }
      },
      {
        "intercept": 35.290774,
        "coefficients": {
          "Hours_Studied": 0.2906,
          "Attendance": 0.19707,
          "Parental_Involvement": 0.982773,
          "Access_to_Resources": 1.005251,
          "Extracurricular_Activities": 0.533373,
          "Sleep_Hours": -0.001312,
          "Previous_Scores": 0.04952,
          "Motivation_Level": 0.550072,
          "Internet_Access": 0.739288,
          "Tutoring_Sessions": 0.465562,
          "Family_Income": 0.530358,
          "Teacher_Quality": 0.584798,
          "School_Type": 0.015726,
          "Peer_Influence": 0.565469,
          "Physical_Activity": 0.180757,
          "Learning_Disabilities": -0.932881,
          "Parental_Education_Level": 0.516715,
          "Distance_from_Home": -0.517798,
          "Gender": 0.005595
        }
      },
      {
        "intercept": 34.384707,
        "coefficients": {
          "Hours_Studied": 0.307645,
          "Attendance": 0.202383,
          "Parental_Involvement": 0.995524,
          "Access_to_Resources": 0.991405,
          "Extracurricular_Activities": 0.516339,
          "Sleep_Hours": 0.004501,
          "Previous_Scores": 0.049452,
          "Motivation_Level": 0.530727,
          "Internet_Access": 0.84843,
          "Tutoring_Sessions": 0.527023,
          "Family_Income": 0.591803,
          "Teacher_Quality": 0.539847,
          "School_Type": -0.117305,
          "Peer_Influence": 0.528841,
          "Physical_Activity": 0.176684,
          "Learning_Disabilities": -0.949634,
          "Parental_Education_Level": 0.488073,
          "Distance_from_Home": -0.453313,
          "Gender": -0.036294
        }
      },
      {
        "intercept": 35.31961,
        "coefficients": {
          "Hours_Studied": 0.297458,
          "Attendance": 0.196376,
          "Parental_Involvement": 0.996052,
          "Access_to_Resources": 1.009416,
          "Extracurricular_Activities": 0.564239,
          "Sleep_Hours": -0.025517,
          "Previous_Scores": 0.048139,
          "Motivation_Level": 0.543213,
          "Internet_Access": 1.013338,
          "Tutoring_Sessions": 0.507047,
          "Family_Income": 0.55583,
          "Teacher_Quality": 0.50058,
          "School_Type": 0.015595,
          "Peer_Influence": 0.515352,
          "Physical_Activity": 0.175439,
          "Learning_Disabilities": -0.796559,
          "Parental_Education_Level": 0.52391,
          "Distance_from_Home": -0.490274,
          "Gender": -0.096065
        }
      },
      {
        "intercept": 34.762175,
        "coefficients": {
          "Hours_Studied": 0.297477,
          "Attendance": 0.200333,
          "Parental_Involvement": 1.022334,
          "Access_to_Resources": 1.026487,
          "Extracurricular_Activities": 0.508676,
          "Sleep_Hours": -0.011655,
          "Previous_Scores": 0.050043,
          "Motivation_Level": 0.573532,
          "Internet_Access": 1.008312,
          "Tutoring_Sessions": 0.501752,
          "Family_Income": 0.530127,
          "Teacher_Quality": 0.529479,
          "School_Type": -0.055225,
          "Peer_Influence": 0.461719,
          "Physical_Activity": 0.179853,
          "Learning_Disabilities": -0.817138,
          "Parental_Education_Level": 0.469068,
          "Distance_from_Home": -0.461516,
          "Gender": -0.07114
        }
      },
      {
        "intercept": 35.332235,
        "coefficients": {
          "Hours_Studied": 0.295821,
          "Attendance": 0.197431,
          "Parental_Involvement": 0.956537,
          "Access_to_Resources": 1.009904,
          "Extracurricular_Activities": 0.4867,
          "Sleep_Hours": 0.000192,
          "Previous_Scores": 0.048401,
          "Motivation_Level": 0.534409,
          "Internet_Access": 0.840634,
          "Tutoring_Sessions": 0.496058,
          "Family_Income": 0.530593,
          "Teacher_Quality": 0.537748,
          "School_Type": -0.072785,
          "Peer_Influence": 0.492423,
          "Physical_Activity": 0.168816,
          "Learning_Disabilities": -0.779515,
          "Parental_Education_Level": 0.506304,
          "Distance_from_Home": -0.475687,
          "Gender": -0.074124
        }
      },
      {
        "intercept": 34.67473,
        "coefficients": {
          "Hours_Studied": 0.299157,
          "Attendance": 0.198656,
          "Parental_Involvement": 0.981503,
          "Access_to_Resources": 1.023662,
          "Extracurricular_Activities": 0.542895,
          "Sleep_Hours": -0.009166,
          "Previous_Scores": 0.050395,
          "Motivation_Level": 0.515831,
          "Internet_Access": 1.063226,
          "Tutoring_Sessions": 0.546171,
          "Family_Income": 0.48706,
          "Teacher_Quality": 0.559774,
          "School_Type": -0.055424,
          "Peer_Influence": 0.548824,
          "Physical_Activity": 0.156427,
          "Learning_Disabilities": -0.913964,
          "Parental_Education_Level": 0.487878,
          "Distance_from_Home": -0.422031,
          "Gender": 0.013048
        }
      },
      {
        "intercept": 35.094313,
        "coefficients": {
          "Hours_Studied": 0.290201,
          "Attendance": 0.201133,
          "Parental_Involvement": 0.980572,
          "Access_to_Resources": 1.087499,
          "Extracurricular_Activities": 0.559686,
          "Sleep_Hours": -0.018276,
          "Previous_Scores": 0.050413,
          "Motivation_Level": 0.516425,
          "Internet_Access": 0.901367,
          "Tutoring_Sessions": 0.500068,
          "Family_Income": 0.530498,
          "Teacher_Quality": 0.552327,
          "School_Type": -0.00264,
          "Peer_Influence": 0.435959,
          "Physical_Activity": 0.146033,
          "Learning_Disabilities": -0.841876,
          "Parental_Education_Level": 0.503112,
          "Distance_from_Home": -0.454573,
          "Gender": -0.100653
        }
      },
      {
        "intercept": 34.573058,
        "coefficients": {
          "Hours_Studied": 0.29931,
          "Attendance": 0.200124,
          "Parental_Involvement": 0.991508,
          "Access_to_Resources": 0.92391,
          "Extracurricular_Activities": 0.594602,
          "Sleep_Hours": -0.016473,
          "Previous_Scores": 0.049765,
          "Motivation_Level": 0.553971,
          "Internet_Access": 1.012109,
          "Tutoring_Sessions": 0.53501,
          "Family_Income": 0.563898,
          "Teacher_Quality": 0.542562,
          "School_Type": -0.057799,
          "Peer_Influence": 0.556911,
          "Physical_Activity": 0.205557,
          "Learning_Disabilities": -0.959551,
          "Parental_Education_Level": 0.505922,
          "Distance_from_Home": -0.491586,
          "Gender": -0.032267
        }
      },
      {
        "intercept": 34.484709,
        "coefficients": {
          "Hours_Studied": 0.297665,
          "Attendance": 0.199047,
          "Parental_Involvement": 1.009133,
          "Access_to_Resources": 1.011322,
          "Extracurricular_Activities": 0.629003,
          "Sleep_Hours": 0.017144,
          "Previous_Scores": 0.049738,
          "Motivation_Level": 0.55739,
          "Internet_Access": 1.088563,
          "Tutoring_Sessions": 0.480145,
          "Family_Income": 0.538109,
          "Teacher_Quality": 0.508836,
          "School_Type": -0.090723,
          "Peer_Influence": 0.521223,
          "Physical_Activity": 0.199677,
          "Learning_Disabilities": -0.893045,
          "Parental_Education_Level": 0.50132,
          "Distance_from_Home": -0.465549,
          "Gender": -0.03513
        }
      },
      {
        "intercept": 35.135391,
        "coefficients": {
          "Hours_Studied": 0.293229,
          "Attendance": 0.197657,
          "Parental_Involvement": 0.96174,
          "Access_to_Resources": 1.050095,
          "Extracurricular_Activities": 0.533028,
          "Sleep_Hours": 0.032719,
          "Previous_Scores": 0.046064,
          "Motivation_Level": 0.563248,
          "Internet_Access": 0.890781,
          "Tutoring_Sessions": 0.461756,
          "Family_Income": 0.505679,
          "Teacher_Quality": 0.518705,
          "School_Type": -0.132856,
          "Peer_Influence": 0.526441,
          "Physical_Activity": 0.179924,
          "Learning_Disabilities": -0.800449,
          "Parental_Education_Level": 0.547945,
          "Distance_from_Home": -0.491905,
          "Gender": 0.009943
        }
      },
      {
        "intercept": 34.637499,
        "coefficients": {
          "Hours_Studied": 0.292774,
          "Attendance": 0.203898,
          "Parental_Involvement": 0.922076,
          "Access_to_Resources": 1.022186,
          "Extracurricular_Activities": 0.567131,
          "Sleep_Hours": -0.01101,
          "Previous_Scores": 0.050174,
          "Motivation_Level": 0.478217,
          "Internet_Access": 0.891394,
          "Tutoring_Sessions": 0.508437,
          "Family_Income": 0.581781,
          "Teacher_Quality": 0.60219,
          "School_Type": -0.047157,
          "Peer_Influence": 0.526797,
          "Physical_Activity": 0.185522,
          "Learning_Disabilities": -0.778851,
          "Parental_Education_Level": 0.448409,
          "Distance_from_Home": -0.499096,
          "Gender": -0.102975
        }
      },
      {
        "intercept": 35.063327,
        "coefficients": {
          "Hours_Studied": 0.297354,
          "Attendance": 0.196466,
          "Parental_Involvement": 0.989177,
          "Access_to_Resources": 0.994392,
          "Extracurricular_Activities": 0.525656,
          "Sleep_Hours": 0.017658,
          "Previous_Scores": 0.049503,
          "Motivation_Level": 0.551371,
          "Internet_Access": 0.883805,
          "Tutoring_Sessions": 0.47813,
          "Family_Income": 0.517578,
          "Teacher_Quality": 0.52951,
          "School_Type": -0.012833,
          "Peer_Influence": 0.478004,
          "Physical_Activity": 0.178645,
          "Learning_Disabilities": -0.710235,
          "Parental_Education_Level": 0.50168,
          "Distance_from_Home": -0.463395,
          "Gender": -0.06561
        }
      },
      {
        "intercept": 34.851224,
        "coefficients": {
          "Hours_Studied": 0.292742,
          "Attendance": 0.198168,
          "Parental_Involvement": 1.012706,
          "Access_to_Resources": 0.988075,
          "Extracurricular_Activities": 0.466502,
          "Sleep_Hours": 0.005067,
          "Previous_Scores": 0.049302,
          "Motivation_Level": 0.58275,
          "Internet_Access": 1.053192,
          "Tutoring_Sessions": 0.504291,
          "Family_Income": 0.524971,
          "Teacher_Quality": 0.559126,
          "School_Type": -0.011475,
          "Peer_Influence": 0.521202,
          "Physical_Activity": 0.163304,
          "Learning_Disabilities": -0.696218,
          "Parental_Education_Level": 0.456127,
          "Distance_from_Home": -0.46929,
          "Gender": 0.053039
        }
      },
      {
        "intercept": 35.353661,
        "coefficients": {
          "Hours_Studied": 0.28831,
          "Attendance": 0.199154,
          "Parental_Involvement": 0.990528,
          "Access_to_Resources": 0.99757,
          "Extracurricular_Activities": 0.626256,
          "Sleep_Hours": -0.019026,
          "Previous_Scores": 0.046476,
          "Motivation_Level": 0.565127,
          "Internet_Access": 1.028109,
          "Tutoring_Sessions": 0.497208,
          "Family_Income": 0.573719,
          "Teacher_Quality": 0.487594,
          "School_Type": -0.060657,
          "Peer_Influence": 0.482209,
          "Physical_Activity": 0.172738,
          "Learning_Disabilities": -0.866678,
          "Parental_Education_Level": 0.514965,
          "Distance_from_Home": -0.456325,
          "Gender": -0.055433
        }
      },
      {
        "intercept": 34.597666,
        "coefficients": {
          "Hours_Studied": 0.29732,
          "Attendance": 0.200716,
          "Parental_Involvement": 0.960564,
          "Access_to_Resources": 1.005007,
          "Extracurricular_Activities": 0.606638,
          "Sleep_Hours": -0.006253,
          "Previous_Scores": 0.049835,
          "Motivation_Level": 0.521496,
          "Internet_Access": 0.922915,
          "Tutoring_Sessions": 0.505432,
          "Family_Income": 0.578719,
          "Teacher_Quality": 0.521447,
          "School_Type": -0.0303,
          "Peer_Influence": 0.478689,
          "Physical_Activity": 0.26423,
          "Learning_Disabilities": -1.114228,
          "Parental_Education_Level": 0.509178,
          "Distance_from_Home": -0.517668,
          "Gender": -0.089273
        }
      },
      {
        "intercept": 34.610866,
        "coefficients": {
          "Hours_Studied": 0.292331,
          "Attendance": 0.198414,
          "Parental_Involvement": 0.99307,
          "Access_to_Resources": 1.04017,
          "Extracurricular_Activities": 0.493857,
          "Sleep_Hours": 0.035348,
          "Previous_Scores": 0.048549,
          "Motivation_Level": 0.530098,
          "Internet_Access": 1.03082,
          "Tutoring_Sessions": 0.501353,
          "Family_Income": 0.513536,
          "Teacher_Quality": 0.51803,
          "School_Type": 0.051097,
          "Peer_Influence": 0.49169,
          "Physical_Activity": 0.210869,
          "Learning_Disabilities": -0.709698,
          "Parental_Education_Level": 0.504267,
          "Distance_from_Home": -0.479993,
          "Gender": -0.033102
        }
      },
      {
        "intercept": 34.53787,
        "coefficients": {
          "Hours_Studied": 0.296609,
          "Attendance": 0.202496,
          "Parental_Involvement": 1.029731,
          "Access_to_Resources": 1.012825,
          "Extracurricular_Activities": 0.469961,
          "Sleep_Hours": 0.003354,
          "Previous_Scores": 0.053394,
          "Motivation_Level": 0.416443,
          "Internet_Access": 0.87993,
          "Tutoring_Sessions": 0.452725,
          "Family_Income": 0.534943,
          "Teacher_Quality": 0.511469,
          "School_Type": -0.026784,
          "Peer_Influence": 0.52418,
          "Physical_Activity": 0.191301,
          "Learning_Disabilities": -0.957305,
          "Parental_Education_Level": 0.456621,
          "Distance_from_Home": -0.521298,
          "Gender": 0.003199
        }
      },
      {
        "intercept": 34.99432,
        "coefficients": {
          "Hours_Studied": 0.298377,
          "Attendance": 0.197152,
          "Parental_Involvement": 0.992184,
          "Access_to_Resources": 0.99815,
          "Extracurricular_Activities": 0.599761,
          "Sleep_Hours": 0.005001,
          "Previous_Scores": 0.050688,
          "Motivation_Level": 0.539518,
          "Internet_Access": 0.83039,
          "Tutoring_Sessions": 0.448207,
          "Family_Income": 0.517562,
          "Teacher_Quality": 0.519764,
          "School_Type": -0.007796,
          "Peer_Influence": 0.544654,
          "Physical_Activity": 0.170939,
          "Learning_Disabilities": -0.785933,
          "Parental_Education_Level": 0.520265,
          "Distance_from_Home": -0.459689,
          "Gender": -0.030624
        }
      },
      {
        "intercept": 35.24946,
        "coefficients": {
          "Hours_Studied": 0.290105,
          "Attendance": 0.197118,
          "Parental_Involvement": 1.007077,
          "Access_to_Resources": 1.021666,
          "Extracurricular_Activities": 0.578305,
          "Sleep_Hours": -0.008768,
          "Previous_Scores": 0.049764,
          "Motivation_Level": 0.539592,
          "Internet_Access": 0.991586,
          "Tutoring_Sessions": 0.500246,
          "Family_Income": 0.479868,
          "Teacher_Quality": 0.526018,
          "School_Type": -0.01324,
          "Peer_Influence": 0.427181,
          "Physical_Activity": 0.154287,
          "Learning_Disabilities": -0.807368,
          "Parental_Education_Level": 0.526646,
          "Distance_from_Home": -0.429253,
          "Gender": 0.005343
        }
      },
      {
        "intercept": 34.838018,
        "coefficients": {
          "Hours_Studied": 0.296319,
          "Attendance": 0.199759,
          "Parental_Involvement": 0.954335,
          "Access_to_Resources": 0.996291,
          "Extracurricular_Activities": 0.517358,
          "Sleep_Hours": 0.010936,
          "Previous_Scores": 0.048989,
          "Motivation_Level": 0.55069,
          "Internet_Access": 0.968358,
          "Tutoring_Sessions": 0.521303,
          "Family_Income": 0.503372,
          "Teacher_Quality": 0.50137,
          "School_Type": 0.005558,
          "Peer_Influence": 0.529601,
          "Physical_Activity": 0.191865,
          "Learning_Disabilities": -0.846332,
          "Parental_Education_Level": 0.464001,
          "Distance_from_Home": -0.476397,
          "Gender": -0.083366
        }
      },
      {
        "intercept": 35.084484,
        "coefficients": {
          "Hours_Studied": 0.293945,
          "Attendance": 0.197927,
          "Parental_Involvement": 0.986704,
          "Access_to_Resources": 1.011877,
          "Extracurricular_Activities": 0.53768,
          "Sleep_Hours": 0.003865,
          "Previous_Scores": 0.046874,
          "Motivation_Level": 0.562549,
          "Internet_Access": 1.010078,
          "Tutoring_Sessions": 0.507165,
          "Family_Income": 0.483865,
          "Teacher_Quality": 0.554546,
          "School_Type": -0.034297,
          "Peer_Influence": 0.536935,
          "Physical_Activity": 0.1849,
          "Learning_Disabilities": -0.935628,
          "Parental_Education_Level": 0.459676,
          "Distance_from_Home": -0.442803,
          "Gender": -0.07762
        }
      },
      {
        "intercept": 34.615526,
        "coefficients": {
          "Hours_Studied": 0.299453,
          "Attendance": 0.201594,
          "Parental_Involvement": 0.970141,
          "Access_to_Resources": 0.947612,
          "Extracurricular_Activities": 0.59739,
          "Sleep_Hours": -0.010066,
          "Previous_Scores": 0.04926,
          "Motivation_Level": 0.506279,
          "Internet_Access": 0.964589,
          "Tutoring_Sessions": 0.488186,
          "Family_Income": 0.562693,
          "Teacher_Quality": 0.484688,
          "School_Type": -0.06614,
          "Peer_Influence": 0.524516,
          "Physical_Activity": 0.239356,
          "Learning_Disabilities": -0.836253,
          "Parental_Education_Level": 0.478023,
          "Distance_from_Home": -0.43506,
          "Gender": -0.039505
        }
      },
      {
        "intercept": 35.597427,
        "coefficients": {
          "Hours_Studied": 0.292804,
          "Attendance": 0.194436,
          "Parental_Involvement": 0.978805,
          "Access_to_Resources": 1.000968,
          "Extracurricular_Activities": 0.550423,
          "Sleep_Hours": -0.007613,
          "Previous_Scores": 0.04688,
          "Motivation_Level": 0.563521,
          "Internet_Access": 0.853405,
          "Tutoring_Sessions": 0.488234,
          "Family_Income": 0.522966,
          "Teacher_Quality": 0.443766,
          "School_Type": -0.009063,
          "Peer_Influence": 0.514569,
          "Physical_Activity": 0.229681,
          "Learning_Disabilities": -0.662956,
          "Parental_Education_Level": 0.486762,
          "Distance_from_Home": -0.499289,
          "Gender": -0.020386
        }
      },
      {
        "intercept": 34.743484,
        "coefficients": {
          "Hours_Studied": 0.294663,
          "Attendance": 0.196903,
          "Parental_Involvement": 0.998576,
          "Access_to_Resources": 0.972739,
          "Extracurricular_Activities": 0.590801,
          "Sleep_Hours": 0.010981,
          "Previous_Scores": 0.050083,
          "Motivation_Level": 0.588103,
          "Internet_Access": 0.935565,
          "Tutoring_Sessions": 0.528742,
          "Family_Income": 0.543592,
          "Teacher_Quality": 0.459667,
          "School_Type": 0.062794,
          "Peer_Influence": 0.511582,
          "Physical_Activity": 0.221587,
          "Learning_Disabilities": -0.930088,
          "Parental_Education_Level": 0.548797,
          "Distance_from_Home": -0.423509,
          "Gender": 0.032679
        }
      },
      {
        "intercept": 34.967826,
        "coefficients": {
          "Hours_Studied": 0.301315,
          "Attendance": 0.199344,
          "Parental_Involvement": 1.024839,
          "Access_to_Resources": 0.978513,
          "Extracurricular_Activities": 0.524385,
          "Sleep_Hours": -0.009382,
          "Previous_Scores": 0.047717,
          "Motivation_Level": 0.496983,
          "Internet_Access": 0.959559,
          "Tutoring_Sessions": 0.477236,
          "Family_Income": 0.475343,
          "Teacher_Quality": 0.542043,
          "School_Type": 0.003389,
          "Peer_Influence": 0.544926,
          "Physical_Activity": 0.184749,
          "Learning_Disabilities": -0.880254,
          "Parental_Education_Level": 0.516396,
          "Distance_from_Home": -0.476568,
          "Gender": -0.035566
        }
      },
      {
        "intercept": 34.881456,
        "coefficients": {
          "Hours_Studied": 0.295725,
          "Attendance": 0.197222,
          "Parental_Involvement": 1.057162,
          "Access_to_Resources": 1.086971,
          "Extracurricular_Activities": 0.511954,
          "Sleep_Hours": -0.003813,
          "Previous_Scores": 0.052084,
          "Motivation_Level": 0.471568,
          "Internet_Access": 0.807708,
          "Tutoring_Sessions": 0.486722,
          "Family_Income": 0.506001,
          "Teacher_Quality": 0.494355,
          "School_Type": -0.030281,
          "Peer_Influence": 0.492268,
          "Physical_Activity": 0.197801,
          "Learning_Disabilities": -0.836092,
          "Parental_Education_Level": 0.481008,
          "Distance_from_Home": -0.410992,
          "Gender": 0.019694
        }
      },
      {
        "intercept": 35.298318,
        "coefficients": {
          "Hours_Studied": 0.294977,
          "Attendance": 0.197904,
          "Parental_Involvement": 0.951344,
          "Access_to_Resources": 0.952721,
          "Extracurricular_Activities": 0.561835,
          "Sleep_Hours": -0.009454,
          "Previous_Scores": 0.04808,
          "Motivation_Level": 0.547835,
          "Internet_Access": 0.877505,
          "Tutoring_Sessions": 0.489444,
          "Family_Income": 0.45874,
          "Teacher_Quality": 0.575418,
          "School_Type": 0.003483,
          "Peer_Influence": 0.536691,
          "Physical_Activity": 0.1835,
          "Learning_Disabilities": -0.893886,
          "Parental_Education_Level": 0.522863,
          "Distance_from_Home": -0.516868,
          "Gender": -0.047872
        }
      },
      {
        "intercept": 34.71211,
        "coefficients": {
          "Hours_Studied": 0.287088,
          "Attendance": 0.195513,
          "Parental_Involvement": 0.990741,
          "Access_to_Resources": 1.011878,
          "Extracurricular_Activities": 0.568011,
          "Sleep_Hours": 0.025791,
          "Previous_Scores": 0.051545,
          "Motivation_Level": 0.471286,
          "Internet_Access": 1.095688,
          "Tutoring_Sessions": 0.495384,
          "Family_Income": 0.533551,
          "Teacher_Quality": 0.551299,
          "School_Type": -0.0435,
          "Peer_Influence": 0.564789,
          "Physical_Activity": 0.237939,
          "Learning_Disabilities": -1.044019,
          "Parental_Education_Level": 0.562748,
          "Distance_from_Home": -0.569258,
          "Gender": -0.117651
        }
      },
      {
        "intercept": 34.395641,
        "coefficients": {
          "Hours_Studied": 0.299183,
          "Attendance": 0.200865,
          "Parental_Involvement": 1.021646,
          "Access_to_Resources": 1.018359,
          "Extracurricular_Activities": 0.580366,
          "Sleep_Hours": -0.017121,
          "Previous_Scores": 0.050667,
          "Motivation_Level": 0.57877,
          "Internet_Access": 1.011346,
          "Tutoring_Sessions": 0.459229,
          "Family_Income": 0.533098,
          "Teacher_Quality": 0.62158,
          "School_Type": -0.073491,
          "Peer_Influence": 0.505399,
          "Physical_Activity": 0.237021,
          "Learning_Disabilities": -0.633431,
          "Parental_Education_Level": 0.443113,
          "Distance_from_Home": -0.521968,
          "Gender": -0.061028
        }
      },
      {
        "intercept": 35.277355,
        "coefficients": {
          "Hours_Studied": 0.295283,
          "Attendance": 0.198487,
          "Parental_Involvement": 1.014366,
          "Access_to_Resources": 1.048323,
          "Extracurricular_Activities": 0.613595,
          "Sleep_Hours": -0.009435,
          "Previous_Scores": 0.046952,
          "Motivation_Level": 0.51087,
          "Internet_Access": 0.877458,
          "Tutoring_Sessions": 0.450869,
          "Family_Income": 0.532365,
          "Teacher_Quality": 0.595284,
          "School_Type": -0.084064,
          "Peer_Influence": 0.52335,
          "Physical_Activity": 0.158712,
          "Learning_Disabilities": -0.901209,
          "Parental_Education_Level": 0.489718,
          "Distance_from_Home": -0.463904,
          "Gender": -0.082923
        }
      },
      {
        "intercept": 35.368379,
        "coefficients": {
          "Hours_Studied": 0.293171,
          "Attendance": 0.198503,
          "Parental_Involvement": 1.045177,
          "Access_to_Resources": 1.093623,
          "Extracurricular_Activities": 0.554551,
          "Sleep_Hours": -0.028906,
          "Previous_Scores": 0.048408,
          "Motivation_Level": 0.541708,
          "Internet_Access": 0.834208,
          "Tutoring_Sessions": 0.504845,
          "Family_Income": 0.583605,
          "Teacher_Quality": 0.526584,
          "School_Type": -0.107123,
          "Peer_Influence": 0.472328,
          "Physical_Activity": 0.162397,
          "Learning_Disabilities": -0.665514,
          "Parental_Education_Level": 0.433694,
          "Distance_from_Home": -0.493215,
          "Gender": -0.025394
        }
      },
      {
        "intercept": 35.028525,
        "coefficients": {
          "Hours_Studied": 0.292921,
          "Attendance": 0.196344,
          "Parental_Involvement": 0.936277,
          "Access_to_Resources": 1.053453,
          "Extracurricular_Activities": 0.566993,
          "Sleep_Hours": -0.012719,
          "Previous_Scores": 0.049993,
          "Motivation_Level": 0.537572,
          "Internet_Access": 1.090996,
          "Tutoring_Sessions": 0.487487,
          "Family_Income": 0.481634,
          "Teacher_Quality": 0.484242,
          "School_Type": -0.055788,
          "Peer_Influence": 0.55344,
          "Physical_Activity": 0.216078,
          "Learning_Disabilities": -0.80341,
          "Parental_Education_Level": 0.559383,
          "Distance_from_Home": -0.446995,
          "Gender": -0.068772
        }
      },
      {
        "intercept": 34.808901,
        "coefficients": {
          "Hours_Studied": 0.302514,
          "Attendance": 0.19998,
          "Parental_Involvement": 1.078797,
          "Access_to_Resources": 1.054702,
          "Extracurricular_Activities": 0.524302,
          "Sleep_Hours": -0.03643,
          "Previous_Scores": 0.050876,
          "Motivation_Level": 0.459488,
          "Internet_Access": 0.992346,
          "Tutoring_Sessions": 0.443523,
          "Family_Income": 0.570303,
          "Teacher_Quality": 0.529071,
          "School_Type": -0.166934,
          "Peer_Influence": 0.473346,
          "Physical_Activity": 0.199712,
          "Learning_Disabilities": -0.941982,
          "Parental_Education_Level": 0.498653,
          "Distance_from_Home": -0.457478,
          "Gender": -0.007345
        }
      },
      {
        "intercept": 34.895808,
        "coefficients": {
          "Hours_Studied": 0.297329,
          "Attendance": 0.198428,
          "Parental_Involvement": 0.999278,
          "Access_to_Resources": 1.004248,
          "Extracurricular_Activities": 0.538051,
          "Sleep_Hours": 0.006396,
          "Previous_Scores": 0.046709,
          "Motivation_Level": 0.553772,
          "Internet_Access": 1.083713,
          "Tutoring_Sessions": 0.475971,
          "Family_Income": 0.556151,
          "Teacher_Quality": 0.549176,
          "School_Type": -0.071341,
          "Peer_Influence": 0.484417,
          "Physical_Activity": 0.226241,
          "Learning_Disabilities": -0.775857,
          "Parental_Education_Level": 0.488783,
          "Distance_from_Home": -0.548173,
          "Gender": -0.122134
        }
      },
      {
        "intercept": 34.534747,
        "coefficients": {
          "Hours_Studied": 0.299016,
          "Attendance": 0.199828,
          "Parental_Involvement": 1.041993,
          "Access_to_Resources": 1.013699,
          "Extracurricular_Activities": 0.578056,
          "Sleep_Hours": -0.008447,
          "Previous_Scores": 0.048994,
          "Motivation_Level": 0.468944,
          "Internet_Access": 1.030231,
          "Tutoring_Sessions": 0.533627,
          "Family_Income": 0.584877,
          "Teacher_Quality": 0.538141,
          "School_Type": 0.005883,
          "Peer_Influence": 0.576962,
          "Physical_Activity": 0.203447,
          "Learning_Disabilities": -0.882931,
          "Parental_Education_Level": 0.528334,
          "Distance_from_Home": -0.512039,
          "Gender": -0.088932
        }
      },
      {
        "intercept": 35.337083,
        "coefficients": {
          "Hours_Studied": 0.293452,
          "Attendance": 0.193972,
          "Parental_Involvement": 1.013966,
          "Access_to_Resources": 1.018529,
          "Extracurricular_Activities": 0.569861,
          "Sleep_Hours": 0.001832,
          "Previous_Scores": 0.047159,
          "Motivation_Level": 0.581547,
          "Internet_Access": 1.072777,
          "Tutoring_Sessions": 0.522504,
          "Family_Income": 0.489623,
          "Teacher_Quality": 0.459753,
          "School_Type": 0.029793,
          "Peer_Influence": 0.49977,
          "Physical_Activity": 0.195636,
          "Learning_Disabilities": -0.843988,
          "Parental_Education_Level": 0.482709,
          "Distance_from_Home": -0.373919,
          "Gender": -0.053104
        }
      },
      {
        "intercept": 34.915525,
        "coefficients": {
          "Hours_Studied": 0.293802,
          "Attendance": 0.200832,
          "Parental_Involvement": 0.945829,
          "Access_to_Resources": 1.025633,
          "Extracurricular_Activities": 0.493422,
          "Sleep_Hours": -0.004845,
          "Previous_Scores": 0.048648,
          "Motivation_Level": 0.471609,
          "Internet_Access": 0.881842,
          "Tutoring_Sessions": 0.486382,
          "Family_Income": 0.545754,
          "Teacher_Quality": 0.589971,
          "School_Type": -0.107465,
          "Peer_Influence": 0.539088,
          "Physical_Activity": 0.187754,
          "Learning_Disabilities": -0.776949,
          "Parental_Education_Level": 0.506691,
          "Distance_from_Home": -0.460676,
          "Gender": 0.0554
        }
      },
      {
        "intercept": 34.998105,
        "coefficients": {
          "Hours_Studied": 0.291859,
          "Attendance": 0.19922,
          "Parental_Involvement": 1.019365,
          "Access_to_Resources": 1.008278,
          "Extracurricular_Activities": 0.618663,
          "Sleep_Hours": -0.018107,
          "Previous_Scores": 0.048392,
          "Motivation_Level": 0.555394,
          "Internet_Access": 0.972562,
          "Tutoring_Sessions": 0.509157,
          "Family_Income": 0.566242,
          "Teacher_Quality": 0.539119,
          "School_Type": -0.067309,
          "Peer_Influence": 0.497426,
          "Physical_Activity": 0.183767,
          "Learning_Disabilities": -0.852117,
          "Parental_Education_Level": 0.50183,
          "Distance_from_Home": -0.487963,
          "Gender": 0.010278
        }
      },
      {
        "intercept": 34.615594,
        "coefficients": {
          "Hours_Studied": 0.291212,
          "Attendance": 0.197018,
          "Parental_Involvement": 0.996307,
          "Access_to_Resources": 1.055707,
          "Extracurricular_Activities": 0.604145,
          "Sleep_Hours": 0.025918,
          "Previous_Scores": 0.05075,
          "Motivation_Level": 0.536005,
          "Internet_Access": 1.038188,
          "Tutoring_Sessions": 0.475672,
          "Family_Income": 0.506673,
          "Teacher_Quality": 0.515449,
          "School_Type": -0.055296,
          "Peer_Influence": 0.546018,
          "Physical_Activity": 0.210265,
          "Learning_Disabilities": -0.837321,
          "Parental_Education_Level": 0.518235,
          "Distance_from_Home": -0.462611,
          "Gender": -0.077333
        }
      },
      {
        "intercept": 35.244928,
        "coefficients": {
          "Hours_Studied": 0.291536,
          "Attendance": 0.197859,
          "Parental_Involvement": 1.005336,
          "Access_to_Resources": 0.985439,
          "Extracurricular_Activities": 0.566492,
          "Sleep_Hours": -0.027856,
          "Previous_Scores": 0.04788,
          "Motivation_Level": 0.561984,
          "Internet_Access": 0.917803,
          "Tutoring_Sessions": 0.49021,
          "Family_Income": 0.587532,
          "Teacher_Quality": 0.580326,
          "School_Type": 0.010058,
          "Peer_Influence": 0.52728,
          "Physical_Activity": 0.191861,
          "Learning_Disabilities": -0.731889,
          "Parental_Education_Level": 0.510335,
          "Distance_from_Home": -0.517207,
          "Gender": -0.063669
        }
      },
      {
        "intercept": 35.598632,
        "coefficients": {
          "Hours_Studied": 0.288967,
          "Attendance": 0.19123,
          "Parental_Involvement": 1.003005,
          "Access_to_Resources": 1.00258,
          "Extracurricular_Activities": 0.619579,
          "Sleep_Hours": -0.009299,
          "Previous_Scores": 0.048207,
          "Motivation_Level": 0.593683,
          "Internet_Access": 0.827213,
          "Tutoring_Sessions": 0.491353,
          "Family_Income": 0.538789,
          "Teacher_Quality": 0.546234,
          "School_Type": -0.02219,
          "Peer_Influence": 0.601284,
          "Physical_Activity": 0.19251,
          "Learning_Disabilities": -0.840998,
          "Parental_Education_Level": 0.515013,
          "Distance_from_Home": -0.343305,
          "Gender": -0.0163
        }
      },
      {
        "intercept": 34.800045,
        "coefficients": {
          "Hours_Studied": 0.292196,
          "Attendance": 0.20084,
          "Parental_Involvement": 0.933078,
          "Access_to_Resources": 1.018356,
          "Extracurricular_Activities": 0.552891,
          "Sleep_Hours": 0.000662,
          "Previous_Scores": 0.050712,
          "Motivation_Level": 0.500521,
          "Internet_Access": 0.90852,
          "Tutoring_Sessions": 0.521427,
          "Family_Income": 0.539908,
          "Teacher_Quality": 0.577945,
          "School_Type": -0.056655,
          "Peer_Influence": 0.558735,
          "Physical_Activity": 0.146799,
          "Learning_Disabilities": -0.855277,
          "Parental_Education_Level": 0.47855,
          "Distance_from_Home": -0.480012,
          "Gender": -0.016531
        }
      },
      {
        "intercept": 35.126527,
        "coefficients": {
          "Hours_Studied": 0.290082,
          "Attendance": 0.198166,
          "Parental_Involvement": 0.96619,
          "Access_to_Resources": 1.092242,
          "Extracurricular_Activities": 0.516521,
          "Sleep_Hours": 0.004626,
          "Previous_Scores": 0.051008,
          "Motivation_Level": 0.52459,
          "Internet_Access": 0.822869,
          "Tutoring_Sessions": 0.483283,
          "Family_Income": 0.524518,
          "Teacher_Quality": 0.569462,
          "School_Type": 0.027911,
          "Peer_Influence": 0.518361,
          "Physical_Activity": 0.162208,
          "Learning_Disabilities": -0.872597,
          "Parental_Education_Level": 0.474912,
          "Distance_from_Home": -0.549069,
          "Gender": -0.050577
        }
      },
      {
        "intercept": 35.556559,
        "coefficients": {
          "Hours_Studied": 0.292943,
          "Attendance": 0.194824,
          "Parental_Involvement": 0.982338,
          "Access_to_Resources": 1.053503,
          "Extracurricular_Activities": 0.537458,
          "Sleep_Hours": 0.027276,
          "Previous_Scores": 0.045757,
          "Motivation_Level": 0.569419,
          "Internet_Access": 0.646704,
          "Tutoring_Sessions": 0.47669,
          "Family_Income": 0.544921,
          "Teacher_Quality": 0.485361,
          "School_Type": -0.030781,
          "Peer_Influence": 0.525283,
          "Physical_Activity": 0.210019,
          "Learning_Disabilities": -0.757756,
          "Parental_Education_Level": 0.497201,
          "Distance_from_Home": -0.451514,
          "Gender": -0.056848
        }
      },
      {
        "intercept": 34.794027,
        "coefficients": {
          "Hours_Studied": 0.297032,
          "Attendance": 0.198788,
          "Parental_Involvement": 1.027856,
          "Access_to_Resources": 1.022402,
          "Extracurricular_Activities": 0.606826,
          "Sleep_Hours": -0.00971,
          "Previous_Scores": 0.0505,
          "Motivation_Level": 0.497145,
          "Internet_Access": 0.857259,
          "Tutoring_Sessions": 0.512055,
          "Family_Income": 0.538231,
          "Teacher_Quality": 0.52757,
          "School_Type": -0.073351,
          "Peer_Influence": 0.497453,
          "Physical_Activity": 0.203166,
          "Learning_Disabilities": -0.936229,
          "Parental_Education_Level": 0.492584,
          "Distance_from_Home": -0.43593,
          "Gender": -0.001593
        }
      },
      {
        "intercept": 35.450718,
        "coefficients": {
          "Hours_Studied": 0.291949,
          "Attendance": 0.199527,
          "Parental_Involvement": 0.899315,
          "Access_to_Resources": 1.000637,
          "Extracurricular_Activities": 0.507615,
          "Sleep_Hours": 0.010163,
          "Previous_Scores": 0.04473,
          "Motivation_Level": 0.531797,
          "Internet_Access": 0.88835,
          "Tutoring_Sessions": 0.468877,
          "Family_Income": 0.49077,
          "Teacher_Quality": 0.559503,
          "School_Type": -0.05809,
          "Peer_Influence": 0.525483,
          "Physical_Activity": 0.189276,
          "Learning_Disabilities": -0.770796,
          "Parental_Education_Level": 0.465054,
          "Distance_from_Home": -0.512957,
          "Gender": -0.032255
        }
      },
      {
        "intercept": 34.675205,
        "coefficients": {
          "Hours_Studied": 0.290832,
          "Attendance": 0.201188,
          "Parental_Involvement": 0.975344,
          "Access_to_Resources": 1.008756,
          "Extracurricular_Activities": 0.445886,
          "Sleep_Hours": 0.010552,
          "Previous_Scores": 0.050275,
          "Motivation_Level": 0.500607,
          "Internet_Access": 0.955325,
          "Tutoring_Sessions": 0.544427,
          "Family_Income": 0.533104,
          "Teacher_Quality": 0.579882,
          "School_Type": 0.077375,
          "Peer_Influence": 0.505826,
          "Physical_Activity": 0.210256,
          "Learning_Disabilities": -0.883544,
          "Parental_Education_Level": 0.469218,
          "Distance_from_Home": -0.511434,
          "Gender": -0.143377
        }
      },
      {
        "intercept": 35.630012,
        "coefficients": {
          "Hours_Studied": 0.290934,
          "Attendance": 0.19963,
          "Parental_Involvement": 0.964858,
          "Access_to_Resources": 1.047261,
          "Extracurricular_Activities": 0.634719,
          "Sleep_Hours": -0.045646,
          "Previous_Scores": 0.045695,
          "Motivation_Level": 0.537032,
          "Internet_Access": 1.052167,
          "Tutoring_Sessions": 0.482811,
          "Family_Income": 0.561722,
          "Teacher_Quality": 0.524523,
          "School_Type": -0.049483,
          "Peer_Influence": 0.505406,
          "Physical_Activity": 0.140229,
          "Learning_Disabilities": -0.844354,
          "Parental_Education_Level": 0.486758,
          "Distance_from_Home": -0.465645,
          "Gender": -0.109436
        }
      },
      {
        "intercept": 35.099566,
        "coefficients": {
          "Hours_Studied": 0.295649,
          "Attendance": 0.200412,
          "Parental_Involvement": 1.030358,
          "Access_to_Resources": 0.995378,
          "Extracurricular_Activities": 0.632767,
          "Sleep_Hours": -0.015982,
          "Previous_Scores": 0.046178,
          "Motivation_Level": 0.550751,
          "Internet_Access": 0.926161,
          "Tutoring_Sessions": 0.53008,
          "Family_Income": 0.544692,
          "Teacher_Quality": 0.524412,
          "School_Type": 0.032982,
          "Peer_Influence": 0.523546,
          "Physical_Activity": 0.137213,
          "Learning_Disabilities": -0.725821,
          "Parental_Education_Level": 0.495798,
          "Distance_from_Home": -0.424265,
          "Gender": -0.014372
        }
      },
      {
        "intercept": 35.118437,
        "coefficients": {
          "Hours_Studied": 0.2943,
          "Attendance": 0.195847,
          "Parental_Involvement": 1.040486,
          "Access_to_Resources": 0.988081,
          "Extracurricular_Activities": 0.541792,
          "Sleep_Hours": 0.027232,
          "Previous_Scores": 0.047987,
          "Motivation_Level": 0.506838,
          "Internet_Access": 0.832041,
          "Tutoring_Sessions": 0.487336,
          "Family_Income": 0.540084,
          "Teacher_Quality": 0.468446,
          "School_Type": -0.070243,
          "Peer_Influence": 0.487103,
          "Physical_Activity": 0.204067,
          "Learning_Disabilities": -0.840059,
          "Parental_Education_Level": 0.524969,
          "Distance_from_Home": -0.451674,
          "Gender": 0.033223
        }
      },
      {
        "intercept": 35.296036,
        "coefficients": {
          "Hours_Studied": 0.289088,
          "Attendance": 0.199228,
          "Parental_Involvement": 1.010858,
          "Access_to_Resources": 1.063993,
          "Extracurricular_Activities": 0.572699,
          "Sleep_Hours": -0.006697,
          "Previous_Scores": 0.048808,
          "Motivation_Level": 0.530931,
          "Internet_Access": 0.752037,
          "Tutoring_Sessions": 0.526763,
          "Family_Income": 0.533277,
          "Teacher_Quality": 0.589719,
          "School_Type": 0.044146,
          "Peer_Influence": 0.510613,
          "Physical_Activity": 0.136151,
          "Learning_Disabilities": -0.754324,
          "Parental_Education_Level": 0.394004,
          "Distance_from_Home": -0.446946,
          "Gender": -0.089824
        }
      },
      {
        "intercept": 35.116699,
        "coefficients": {
          "Hours_Studied": 0.298632,
          "Attendance": 0.197137,
          "Parental_Involvement": 0.941816,
          "Access_to_Resources": 1.037723,
          "Extracurricular_Activities": 0.492829,
          "Sleep_Hours": 0.012147,
          "Previous_Scores": 0.047387,
          "Motivation_Level": 0.571408,
          "Internet_Access": 0.928961,
          "Tutoring_Sessions": 0.483206,
          "Family_Income": 0.463638,
          "Teacher_Quality": 0.575142,
          "School_Type": -0.175605,
          "Peer_Influence": 0.526759,
          "Physical_Activity": 0.18759,
          "Learning_Disabilities": -0.927561,
          "Parental_Education_Level": 0.531183,
          "Distance_from_Home": -0.446305,
          "Gender": -0.07872
        }
      },
      {
        "intercept": 35.306775,
        "coefficients": {
          "Hours_Studied": 0.294016,
          "Attendance": 0.197553,
          "Parental_Involvement": 1.048876,
          "Access_to_Resources": 1.03831,
          "Extracurricular_Activities": 0.431801,
          "Sleep_Hours": 0.015438,
          "Previous_Scores": 0.046648,
          "Motivation_Level": 0.490999,
          "Internet_Access": 0.928722,
          "Tutoring_Sessions": 0.492353,
          "Family_Income": 0.445022,
          "Teacher_Quality": 0.548552,
          "School_Type": -0.086456,
          "Peer_Influence": 0.489281,
          "Physical_Activity": 0.14421,
          "Learning_Disabilities": -0.81243,
          "Parental_Education_Level": 0.499014,
          "Distance_from_Home": -0.447837,
          "Gender": 0.029288
        }
      },
      {
        "intercept": 35.120524,
        "coefficients": {
          "Hours_Studied": 0.296852,
          "Attendance": 0.195274,
          "Parental_Involvement": 0.994844,
          "Access_to_Resources": 0.992061,
          "Extracurricular_Activities": 0.532331,
          "Sleep_Hours": 0.004992,
          "Previous_Scores": 0.047539,
          "Motivation_Level": 0.600854,
          "Internet_Access": 0.907692,
          "Tutoring_Sessions": 0.488536,
          "Family_Income": 0.482955,
          "Teacher_Quality": 0.563599,
          "School_Type": -0.086141,
          "Peer_Influence": 0.551155,
          "Physical_Activity": 0.187957,
          "Learning_Disabilities": -0.821748,
          "Parental_Education_Level": 0.517586,
          "Distance_from_Home": -0.473041,
          "Gender": 0.130915
        }
      },
      {
        "intercept": 34.786723,
        "coefficients": {
          "Hours_Studied": 0.290715,
          "Attendance": 0.200218,
          "Parental_Involvement": 0.918933,
          "Access_to_Resources": 1.036369,
          "Extracurricular_Activities": 0.484659,
          "Sleep_Hours": -0.006084,
          "Previous_Scores": 0.052707,
          "Motivation_Level": 0.502041,
          "Internet_Access": 0.897914,
          "Tutoring_Sessions": 0.521525,
          "Family_Income": 0.485144,
          "Teacher_Quality": 0.578428,
          "School_Type": 0.042525,
          "Peer_Influence": 0.5129,
          "Physical_Activity": 0.205451,
          "Learning_Disabilities": -0.955445,
          "Parental_Education_Level": 0.512763,
          "Distance_from_Home": -0.51606,
          "Gender": -0.137234
        }
      },
      {
        "intercept": 35.313956,
        "coefficients": {
          "Hours_Studied": 0.292906,
          "Attendance": 0.196147,
          "Parental_Involvement": 0.97828,
          "Access_to_Resources": 1.024438,
          "Extracurricular_Activities": 0.567638,
          "Sleep_Hours": -0.008737,
          "Previous_Scores": 0.049365,
          "Motivation_Level": 0.504194,
          "Internet_Access": 0.885415,
          "Tutoring_Sessions": 0.453369,
          "Family_Income": 0.513641,
          "Teacher_Quality": 0.481245,
          "School_Type": -0.026654,
          "Peer_Influence": 0.498252,
          "Physical_Activity": 0.210957,
          "Learning_Disabilities": -0.87862,
          "Parental_Education_Level": 0.527878,
          "Distance_from_Home": -0.467788,
          "Gender": 0.020547
        }
      },
      {
        "intercept": 35.145796,
        "coefficients": {
          "Hours_Studied": 0.296705,
          "Attendance": 0.196959,
          "Parental_Involvement": 0.968251,
          "Access_to_Resources": 0.998996,
          "Extracurricular_Activities": 0.559176,
          "Sleep_Hours": -0.000116,
          "Previous_Scores": 0.047059,
          "Motivation_Level": 0.583744,
          "Internet_Access": 0.885677,
          "Tutoring_Sessions": 0.511723,
          "Family_Income": 0.532474,
          "Teacher_Quality": 0.607572,
          "School_Type": -0.058475,
          "Peer_Influence": 0.575391,
          "Physical_Activity": 0.183291,
          "Learning_Disabilities": -0.768498,
          "Parental_Education_Level": 0.452942,
          "Distance_from_Home": -0.44585,
          "Gender": -0.105755
        }
      },
      {
        "intercept": 34.518806,
        "coefficients": {
          "Hours_Studied": 0.301651,
          "Attendance": 0.19922,
          "Parental_Involvement": 1.054102,
          "Access_to_Resources": 1.017098,
          "Extracurricular_Activities": 0.607103,
          "Sleep_Hours": 0.011825,
          "Previous_Scores": 0.048625,
          "Motivation_Level": 0.568509,
          "Internet_Access": 0.924526,
          "Tutoring_Sessions": 0.478091,
          "Family_Income": 0.545152,
          "Teacher_Quality": 0.478358,
          "School_Type": -0.02384,
          "Peer_Influence": 0.52315,
          "Physical_Activity": 0.218942,
          "Learning_Disabilities": -0.761057,
          "Parental_Education_Level": 0.473775,
          "Distance_from_Home": -0.458143,
          "Gender": 0.045162
        }
      },
      {
        "intercept": 34.605373,
        "coefficients": {
          "Hours_Studied": 0.295585,
          "Attendance": 0.200435,
          "Parental_Involvement": 1.060453,
          "Access_to_Resources": 0.982084,
          "Extracurricular_Activities": 0.562193,
          "Sleep_Hours": -0.002418,
          "Previous_Scores": 0.049611,
          "Motivation_Level": 0.539605,
          "Internet_Access": 1.083014,
          "Tutoring_Sessions": 0.501299,
          "Family_Income": 0.572613,
          "Teacher_Quality": 0.480093,
          "School_Type": 0.002363,
          "Peer_Influence": 0.599296,
          "Physical_Activity": 0.160446,
          "Learning_Disabilities": -0.876378,
          "Parental_Education_Level": 0.500967,
          "Distance_from_Home": -0.481068,
          "Gender": -0.01581
        }
      },
      {
        "intercept": 34.5601,
        "coefficients": {
          "Hours_Studied": 0.297607,
          "Attendance": 0.200495,
          "Parental_Involvement": 0.910903,
          "Access_to_Resources": 0.979233,
          "Extracurricular_Activities": 0.55803,
          "Sleep_Hours": -0.005217,
          "Previous_Scores": 0.04913,
          "Motivation_Level": 0.600916,
          "Internet_Access": 0.999628,
          "Tutoring_Sessions": 0.521913,
          "Family_Income": 0.555559,
          "Teacher_Quality": 0.550641,
          "School_Type": -0.070248,
          "Peer_Influence": 0.538801,
          "Physical_Activity": 0.230426,
          "Learning_Disabilities": -0.756509,
          "Parental_Education_Level": 0.499863,
          "Distance_from_Home": -0.514717,
          "Gender": -0.08673
        }
      },
      {
        "intercept": 34.996745,
        "coefficients": {
          "Hours_Studied": 0.30098,
          "Attendance": 0.198031,
          "Parental_Involvement": 1.062834,
          "Access_to_Resources": 1.023395,
          "Extracurricular_Activities": 0.386725,
          "Sleep_Hours": -0.013484,
          "Previous_Scores": 0.049317,
          "Motivation_Level": 0.562749,
          "Internet_Access": 0.881178,
          "Tutoring_Sessions": 0.487867,
          "Family_Income": 0.522817,
          "Teacher_Quality": 0.479802,
          "School_Type": -0.035636,
          "Peer_Influence": 0.491587,
          "Physical_Activity": 0.207667,
          "Learning_Disabilities": -0.846367,
          "Parental_Education_Level": 0.486341,
          "Distance_from_Home": -0.485496,
          "Gender": 0.059704
        }
      },
      {
        "intercept": 34.978535,
        "coefficients": {
          "Hours_Studied": 0.295351,
          "Attendance": 0.198802,
          "Parental_Involvement": 0.935981,
          "Access_to_Resources": 1.065347,
          "Extracurricular_Activities": 0.525453,
          "Sleep_Hours": -0.012206,
          "Previous_Scores": 0.049025,
          "Motivation_Level": 0.561517,
          "Internet_Access": 1.136677,
          "Tutoring_Sessions": 0.496552,
          "Family_Income": 0.420466,
          "Teacher_Quality": 0.540635,
          "School_Type": -0.067758,
          "Peer_Influence": 0.501948,
          "Physical_Activity": 0.175826,
          "Learning_Disabilities": -0.864347,
          "Parental_Education_Level": 0.515927,
          "Distance_from_Home": -0.504785,
          "Gender": -0.083032
        }
      },
      {
        "intercept": 35.402093,
        "coefficients": {
          "Hours_Studied": 0.286449,
          "Attendance": 0.198299,
          "Parental_Involvement": 0.943743,
          "Access_to_Resources": 0.983357,
          "Extracurricular_Activities": 0.559268,
          "Sleep_Hours": 0.000133,
          "Previous_Scores": 0.046609,
          "Motivation_Level": 0.566078,
          "Internet_Access": 1.086097,
          "Tutoring_Sessions": 0.477945,
          "Family_Income": 0.465028,
          "Teacher_Quality": 0.489258,
          "School_Type": 0.029632,
          "Peer_Influence": 0.560506,
          "Physical_Activity": 0.15538,
          "Learning_Disabilities": -0.896428,
          "Parental_Education_Level": 0.488956,
          "Distance_from_Home": -0.49867,
          "Gender": -0.040476
        }
      },
      {
        "intercept": 34.891073,
        "coefficients": {
          "Hours_Studied": 0.289512,
          "Attendance": 0.197284,
          "Parental_Involvement": 0.998357,
          "Access_to_Resources": 1.039464,
          "Extracurricular_Activities": 0.511958,
          "Sleep_Hours": 0.024627,
          "Previous_Scores": 0.049491,
          "Motivation_Level": 0.516788,
          "Internet_Access": 1.029201,
          "Tutoring_Sessions": 0.46112,
          "Family_Income": 0.524812,
          "Teacher_Quality": 0.542467,
          "School_Type": -0.066344,
          "Peer_Influence": 0.543803,
          "Physical_Activity": 0.199057,
          "Learning_Disabilities": -1.038901,
          "Parental_Education_Level": 0.493359,
          "Distance_from_Home": -0.477972,
          "Gender": -0.034948
        }
      },
      {
        "intercept": 34.831526,
        "coefficients": {
          "Hours_Studied": 0.291417,
          "Attendance": 0.198667,
          "Parental_Involvement": 1.033614,
          "Access_to_Resources": 1.020689,
          "Extracurricular_Activities": 0.531903,
          "Sleep_Hours": -0.001329,
          "Previous_Scores": 0.048704,
          "Motivation_Level": 0.551009,
          "Internet_Access": 1.064899,
          "Tutoring_Sessions": 0.499687,
          "Family_Income": 0.510074,
          "Teacher_Quality": 0.522256,
          "School_Type": 0.034178,
          "Peer_Influence": 0.559759,
          "Physical_Activity": 0.191792,
          "Learning_Disabilities": -0.889836,
          "Parental_Education_Level": 0.47121,
          "Distance_from_Home": -0.509878,
          "Gender": -0.025295
        }
      },
      {
        "intercept": 35.123317,
        "coefficients": {
          "Hours_Studied": 0.288619,
          "Attendance": 0.19971,
          "Parental_Involvement": 0.963151,
          "Access_to_Resources": 1.027722,
          "Extracurricular_Activities": 0.527103,
          "Sleep_Hours": -0.017626,
          "Previous_Scores": 0.049647,
          "Motivation_Level": 0.554381,
          "Internet_Access": 0.76821,
          "Tutoring_Sessions": 0.522991,
          "Family_Income": 0.592141,
          "Teacher_Quality": 0.552604,
          "School_Type": 0.070634,
          "Peer_Influence": 0.4842,
          "Physical_Activity": 0.212953,
          "Learning_Disabilities": -0.758918,
          "Parental_Education_Level": 0.468786,
          "Distance_from_Home": -0.534031,
          "Gender": -0.072213
        }
      },
      {
        "intercept": 34.450148,
        "coefficients": {
          "Hours_Studied": 0.305184,
          "Attendance": 0.199359,
          "Parental_Involvement": 0.98923,
          "Access_to_Resources": 1.015668,
          "Extracurricular_Activities": 0.586994,
          "Sleep_Hours": 0.009782,
          "Previous_Scores": 0.052642,
          "Motivation_Level": 0.543186,
          "Internet_Access": 0.716261,
          "Tutoring_Sessions": 0.509634,
          "Family_Income": 0.519363,
          "Teacher_Quality": 0.541046,
          "School_Type": -0.083673,
          "Peer_Influence": 0.552853,
          "Physical_Activity": 0.189222,
          "Learning_Disabilities": -0.866591,
          "Parental_Education_Level": 0.509285,
          "Distance_from_Home": -0.446113,
          "Gender": -0.042382
        }
      },
      {
        "intercept": 35.350668,
        "coefficients": {
          "Hours_Studied": 0.299997,
          "Attendance": 0.196698,
          "Parental_Involvement": 1.025433,
          "Access_to_Resources": 1.024373,
          "Extracurricular_Activities": 0.446943,
          "Sleep_Hours": 0.003225,
          "Previous_Scores": 0.044259,
          "Motivation_Level": 0.528786,
          "Internet_Access": 0.930813,
          "Tutoring_Sessions": 0.492613,
          "Family_Income": 0.519772,
          "Teacher_Quality": 0.54039,
          "School_Type": -0.079668,
          "Peer_Influence": 0.570332,
          "Physical_Activity": 0.165706,
          "Learning_Disabilities": -0.680885,
          "Parental_Education_Level": 0.465456,
          "Distance_from_Home": -0.409402,
          "Gender": 0.070556
        }
      },
      {
        "intercept": 34.359163,
        "coefficients": {
          "Hours_Studied": 0.29137,
          "Attendance": 0.200887,
          "Parental_Involvement": 0.996598,
          "Access_to_Resources": 0.997245,
          "Extracurricular_Activities": 0.574084,
          "Sleep_Hours": 6.1e-05,
          "Previous_Scores": 0.053443,
          "Motivation_Level": 0.513211,
          "Internet_Access": 0.895247,
          "Tutoring_Sessions": 0.528254,
          "Family_Income": 0.568792,
          "Teacher_Quality": 0.577738,
          "School_Type": 0.022436,
          "Peer_Influence": 0.533486,
          "Physical_Activity": 0.216503,
          "Learning_Disabilities": -1.013409,
          "Parental_Education_Level": 0.470063,
          "Distance_from_Home": -0.522205,
          "Gender": -0.036888
        }
      },
      {
        "intercept": 34.933562,
        "coefficients": {
          "Hours_Studied": 0.29528,
          "Attendance": 0.200097,
          "Parental_Involvement": 0.974573,
          "Access_to_Resources": 0.98216,
          "Extracurricular_Activities": 0.582705,
          "Sleep_Hours": -0.004287,
          "Previous_Scores": 0.049412,
          "Motivation_Level": 0.527459,
          "Internet_Access": 0.966657,
          "Tutoring_Sessions": 0.521352,
          "Family_Income": 0.492442,
          "Teacher_Quality": 0.521349,
          "School_Type": -0.023459,
          "Peer_Influence": 0.506511,
          "Physical_Activity": 0.172546,
          "Learning_Disabilities": -0.884252,
          "Parental_Education_Level": 0.460875,
          "Distance_from_Home": -0.428682,
          "Gender": -0.071173
        }
      },
      {
        "intercept": 34.475117,
        "coefficients": {
          "Hours_Studied": 0.300187,
          "Attendance": 0.201266,
          "Parental_Involvement": 0.989496,
          "Access_to_Resources": 1.066231,
          "Extracurricular_Activities": 0.606427,
          "Sleep_Hours": 0.011094,
          "Previous_Scores": 0.048595,
          "Motivation_Level": 0.511048,
          "Internet_Access": 0.894948,
          "Tutoring_Sessions": 0.510226,
          "Family_Income": 0.527349,
          "Teacher_Quality": 0.500517,
          "School_Type": -0.113711,
          "Peer_Influence": 0.497244,
          "Physical_Activity": 0.214973,
          "Learning_Disabilities": -0.972219,
          "Parental_Education_Level": 0.517639,
          "Distance_from_Home": -0.425608,
          "Gender": -0.00223
        }
      },
      {
        "intercept": 34.982994,
        "coefficients": {
          "Hours_Studied": 0.295524,
          "Attendance": 0.198582,
          "Parental_Involvement": 0.999459,
          "Access_to_Resources": 1.032117,
          "Extracurricular_Activities": 0.543956,
          "Sleep_Hours": 0.006523,
          "Previous_Scores": 0.046017,
          "Motivation_Level": 0.596379,
          "Internet_Access": 0.920696,
          "Tutoring_Sessions": 0.484659,
          "Family_Income": 0.529283,
          "Teacher_Quality": 0.577828,
          "School_Type": -0.06901,
          "Peer_Influence": 0.499989,
          "Physical_Activity": 0.186523,
          "Learning_Disabilities": -0.78888,
          "Parental_Education_Level": 0.468118,
          "Distance_from_Home": -0.473926,
          "Gender": 0.028035
        }
      },
      {
        "intercept": 35.08001,
        "coefficients": {
          "Hours_Studied": 0.300155,
          "Attendance": 0.197609,
          "Parental_Involvement": 1.039733,
          "Access_to_Resources": 1.07566,
          "Extracurricular_Activities": 0.514503,
          "Sleep_Hours": 0.000693,
          "Previous_Scores": 0.04624,
          "Motivation_Level": 0.544552,
          "Internet_Access": 1.007811,
          "Tutoring_Sessions": 0.479116,
          "Family_Income": 0.559396,
          "Teacher_Quality": 0.447703,
          "School_Type": -0.131332,
          "Peer_Influence": 0.466283,
          "Physical_Activity": 0.194645,
          "Learning_Disabilities": -0.747234,
          "Parental_Education_Level": 0.478639,
          "Distance_from_Home": -0.347993,
          "Gender": 0.034404
        }
      },
      {
        "intercept": 35.069082,
        "coefficients": {
          "Hours_Studied": 0.291805,
          "Attendance": 0.197271,
          "Parental_Involvement": 1.006998,
          "Access_to_Resources": 1.008115,
          "Extracurricular_Activities": 0.604978,
          "Sleep_Hours": -0.014141,
          "Previous_Scores": 0.049976,
          "Motivation_Level": 0.56461,
          "Internet_Access": 1.164948,
          "Tutoring_Sessions": 0.511576,
          "Family_Income": 0.517862,
          "Teacher_Quality": 0.497003,
          "School_Type": 0.002278,
          "Peer_Influence": 0.494284,
          "Physical_Activity": 0.133293,
          "Learning_Disabilities": -0.767198,
          "Parental_Education_Level": 0.553036,
          "Distance_from_Home": -0.43854,
          "Gender": -0.060334
        }
      },
      {
        "intercept": 35.157002,
        "coefficients": {
          "Hours_Studied": 0.285691,
          "Attendance": 0.197214,
          "Parental_Involvement": 1.026648,
          "Access_to_Resources": 1.031954,
          "Extracurricular_Activities": 0.595767,
          "Sleep_Hours": 0.012398,
          "Previous_Scores": 0.047954,
          "Motivation_Level": 0.530339,
          "Internet_Access": 1.09581,
          "Tutoring_Sessions": 0.50752,
          "Family_Income": 0.484639,
          "Teacher_Quality": 0.519902,
          "School_Type": 0.069602,
          "Peer_Influence": 0.493243,
          "Physical_Activity": 0.140904,
          "Learning_Disabilities": -0.676623,
          "Parental_Education_Level": 0.436554,
          "Distance_from_Home": -0.436388,
          "Gender": -0.009834
        }
      },
      {
        "intercept": 35.171532,
        "coefficients": {
          "Hours_Studied": 0.292972,
          "Attendance": 0.198645,
          "Parental_Involvement": 0.970648,
          "Access_to_Resources": 1.046084,
          "Extracurricular_Activities": 0.501192,
          "Sleep_Hours": -0.006054,
          "Previous_Scores": 0.048248,
          "Motivation_Level": 0.529644,
          "Internet_Access": 1.000989,
          "Tutoring_Sessions": 0.497823,
          "Family_Income": 0.519826,
          "Teacher_Quality": 0.486492,
          "School_Type": -0.018435,
          "Peer_Influence": 0.480825,
          "Physical_Activity": 0.20065,
          "Learning_Disabilities": -0.847359,
          "Parental_Education_Level": 0.500943,
          "Distance_from_Home": -0.446597,
          "Gender": -0.137964
        }
      },
      {
        "intercept": 34.805223,
        "coefficients": {
          "Hours_Studied": 0.295988,
          "Attendance": 0.199422,
          "Parental_Involvement": 1.034341,
          "Access_to_Resources": 0.992225,
          "Extracurricular_Activities": 0.520426,
          "Sleep_Hours": -0.010396,
          "Previous_Scores": 0.050905,
          "Motivation_Level": 0.484937,
          "Internet_Access": 0.820441,
          "Tutoring_Sessions": 0.522791,
          "Family_Income": 0.532597,
          "Teacher_Quality": 0.55691,
          "School_Type": 0.020874,
          "Peer_Influence": 0.534545,
          "Physical_Activity": 0.182438,
          "Learning_Disabilities": -0.826542,
          "Parental_Education_Level": 0.441405,
          "Distance_from_Home": -0.385477,
          "Gender": 0.023594
        }
      },
      {
        "intercept": 34.88566,
        "coefficients": {
          "Hours_Studied": 0.300504,
          "Attendance": 0.195185,
          "Parental_Involvement": 1.030703,
          "Access_to_Resources": 1.029678,
          "Extracurricular_Activities": 0.63383,
          "Sleep_Hours": 0.038934,
          "Previous_Scores": 0.047553,
          "Motivation_Level": 0.554947,
          "Internet_Access": 0.961826,
          "Tutoring_Sessions": 0.486295,
          "Family_Income": 0.467156,
          "Teacher_Quality": 0.403581,
          "School_Type": -0.059807,
          "Peer_Influence": 0.538723,
          "Physical_Activity": 0.18227,
          "Learning_Disabilities": -0.88672,
          "Parental_Education_Level": 0.533997,
          "Distance_from_Home": -0.419693,
          "Gender": 0.078523
        }
      },
      {
        "intercept": 34.892089,
        "coefficients": {
          "Hours_Studied": 0.29206,
          "Attendance": 0.198834,
          "Parental_Involvement": 0.96452,
          "Access_to_Resources": 1.046589,
          "Extracurricular_Activities": 0.547311,
          "Sleep_Hours": -0.002605,
          "Previous_Scores": 0.047648,
          "Motivation_Level": 0.553363,
          "Internet_Access": 1.216146,
          "Tutoring_Sessions": 0.474132,
          "Family_Income": 0.471221,
          "Teacher_Quality": 0.529368,
          "School_Type": -0.075615,
          "Peer_Influence": 0.55135,
          "Physical_Activity": 0.19127,
          "Learning_Disabilities": -0.815367,
          "Parental_Education_Level": 0.464404,
          "Distance_from_Home": -0.454282,
          "Gender": 0.005368
        }
      },
      {
        "intercept": 35.116333,
        "coefficients": {
          "Hours_Studied": 0.292695,
          "Attendance": 0.195933,
          "Parental_Involvement": 1.051097,
          "Access_to_Resources": 1.056654,
          "Extracurricular_Activities": 0.653483,
          "Sleep_Hours": -0.002687,
          "Previous_Scores": 0.047936,
          "Motivation_Level": 0.453834,
          "Internet_Access": 0.980959,
          "Tutoring_Sessions": 0.509029,
          "Family_Income": 0.558473,
          "Teacher_Quality": 0.486109,
          "School_Type": -0.036272,
          "Peer_Influence": 0.525991,
          "Physical_Activity": 0.208133,
          "Learning_Disabilities": -0.835086,
          "Parental_Education_Level": 0.500945,
          "Distance_from_Home": -0.422435,
          "Gender": -0.099549
        }
      },
      {
        "intercept": 34.874648,
        "coefficients": {
          "Hours_Studied": 0.291395,
          "Attendance": 0.198131,
          "Parental_Involvement": 1.035185,
          "Access_to_Resources": 1.058908,
          "Extracurricular_Activities": 0.516236,
          "Sleep_Hours": -0.001074,
          "Previous_Scores": 0.049183,
          "Motivation_Level": 0.596217,
          "Internet_Access": 1.043447,
          "Tutoring_Sessions": 0.451765,
          "Family_Income": 0.479705,
          "Teacher_Quality": 0.606839,
          "School_Type": -0.067367,
          "Peer_Influence": 0.546943,
          "Physical_Activity": 0.148112,
          "Learning_Disabilities": -0.704303,
          "Parental_Education_Level": 0.45157,
          "Distance_from_Home": -0.456063,
          "Gender": 0.085455
        }
      },
      {
        "intercept": 34.532824,
        "coefficients": {
          "Hours_Studied": 0.298901,
          "Attendance": 0.200601,
          "Parental_Involvement": 0.944943,
          "Access_to_Resources": 1.05805,
          "Extracurricular_Activities": 0.541009,
          "Sleep_Hours": 0.015917,
          "Previous_Scores": 0.050081,
          "Motivation_Level": 0.516526,
          "Internet_Access": 0.958849,
          "Tutoring_Sessions": 0.491893,
          "Family_Income": 0.511019,
          "Teacher_Quality": 0.45764,
          "School_Type": -0.064089,
          "Peer_Influence": 0.505586,
          "Physical_Activity": 0.234387,
          "Learning_Disabilities": -1.017792,
          "Parental_Education_Level": 0.522253,
          "Distance_from_Home": -0.480736,
          "Gender": -0.085114
        }
      },
      {
        "intercept": 35.198583,
        "coefficients": {
          "Hours_Studied": 0.289375,
          "Attendance": 0.198198,
          "Parental_Involvement": 1.024921,
          "Access_to_Resources": 1.104152,
          "Extracurricular_Activities": 0.639487,
          "Sleep_Hours": 0.014577,
          "Previous_Scores": 0.046888,
          "Motivation_Level": 0.501951,
          "Internet_Access": 0.810089,
          "Tutoring_Sessions": 0.521468,
          "Family_Income": 0.542895,
          "Teacher_Quality": 0.513748,
          "School_Type": 0.024753,
          "Peer_Influence": 0.495291,
          "Physical_Activity": 0.15502,
          "Learning_Disabilities": -0.735885,
          "Parental_Education_Level": 0.44775,
          "Distance_from_Home": -0.417,
          "Gender": -0.007913
        }
      },
      {
        "intercept": 35.02791,
        "coefficients": {
          "Hours_Studied": 0.296564,
          "Attendance": 0.195896,
          "Parental_Involvement": 0.927237,
          "Access_to_Resources": 0.981427,
          "Extracurricular_Activities": 0.5476,
          "Sleep_Hours": 0.010483,
          "Previous_Scores": 0.050961,
          "Motivation_Level": 0.531204,
          "Internet_Access": 0.949924,
          "Tutoring_Sessions": 0.433624,
          "Family_Income": 0.459721,
          "Teacher_Quality": 0.533679,
          "School_Type": 0.050628,
          "Peer_Influence": 0.584467,
          "Physical_Activity": 0.206333,
          "Learning_Disabilities": -0.849579,
          "Parental_Education_Level": 0.52916,
          "Distance_from_Home": -0.525657,
          "Gender": -0.069138
        }
      },
      {
        "intercept": 34.488801,
        "coefficients": {
          "Hours_Studied": 0.293462,
          "Attendance": 0.202313,
          "Parental_Involvement": 1.007034,
          "Access_to_Resources": 0.996048,
          "Extracurricular_Activities": 0.515663,
          "Sleep_Hours": 0.01412,
          "Previous_Scores": 0.049431,
          "Motivation_Level": 0.517115,
          "Internet_Access": 0.995605,
          "Tutoring_Sessions": 0.512586,
          "Family_Income": 0.535074,
          "Teacher_Quality": 0.564237,
          "School_Type": 0.110468,
          "Peer_Influence": 0.527582,
          "Physical_Activity": 0.20103,
          "Learning_Disabilities": -0.931967,
          "Parental_Education_Level": 0.467782,
          "Distance_from_Home": -0.542183,
          "Gender": -0.133148
        }
      },
      {
        "intercept": 35.596101,
        "coefficients": {
          "Hours_Studied": 0.284047,
          "Attendance": 0.192407,
          "Parental_Involvement": 1.056259,
          "Access_to_Resources": 0.987754,
          "Extracurricular_Activities": 0.617124,
          "Sleep_Hours": 0.014472,
          "Previous_Scores": 0.046863,
          "Motivation_Level": 0.565227,
          "Internet_Access": 0.91497,
          "Tutoring_Sessions": 0.488141,
          "Family_Income": 0.533572,
          "Teacher_Quality": 0.514627,
          "School_Type": 0.069741,
          "Peer_Influence": 0.558928,
          "Physical_Activity": 0.167459,
          "Learning_Disabilities": -0.699786,
          "Parental_Education_Level": 0.461212,
          "Distance_from_Home": -0.433504,
          "Gender": 0.010904
        }
      },
      {
        "intercept": 35.658678,
        "coefficients": {
          "Hours_Studied": 0.289705,
          "Attendance": 0.193725,
          "Parental_Involvement": 0.971434,
          "Access_to_Resources": 1.030572,
          "Extracurricular_Activities": 0.633935,
          "Sleep_Hours": 0.013097,
          "Previous_Scores": 0.046005,
          "Motivation_Level": 0.564124,
          "Internet_Access": 0.844228,
          "Tutoring_Sessions": 0.49641,
          "Family_Income": 0.505585,
          "Teacher_Quality": 0.522026,
          "School_Type": -0.075966,
          "Peer_Influence": 0.540882,
          "Physical_Activity": 0.139956,
          "Learning_Disabilities": -0.687258,
          "Parental_Education_Level": 0.500705,
          "Distance_from_Home": -0.439699,
          "Gender": 0.043229
        }
      },
      {
        "intercept": 34.467412,
        "coefficients": {
          "Hours_Studied": 0.300541,
          "Attendance": 0.200749,
          "Parental_Involvement": 0.980605,
          "Access_to_Resources": 0.981768,
          "Extracurricular_Activities": 0.539866,
          "Sleep_Hours": 0.024444,
          "Previous_Scores": 0.04855,
          "Motivation_Level": 0.516751,
          "Internet_Access": 0.937323,
          "Tutoring_Sessions": 0.50588,
          "Family_Income": 0.567235,
          "Teacher_Quality": 0.495298,
          "School_Type": -0.013591,
          "Peer_Influence": 0.513334,
          "Physical_Activity": 0.225482,
          "Learning_Disabilities": -0.972382,
          "Parental_Education_Level": 0.494961,
          "Distance_from_Home": -0.468165,
          "Gender": -0.059923
        }
      },
      {
        "intercept": 34.873305,
        "coefficients": {
          "Hours_Studied": 0.294978,
          "Attendance": 0.196115,
          "Parental_Involvement": 0.989791,
          "Access_to_Resources": 1.064922,
          "Extracurricular_Activities": 0.569266,
          "Sleep_Hours": 0.007563,
          "Previous_Scores": 0.049826,
          "Motivation_Level": 0.572141,
          "Internet_Access": 0.819822,
          "Tutoring_Sessions": 0.483725,
          "Family_Income": 0.559058,
          "Teacher_Quality": 0.50846,
          "School_Type": -0.052788,
          "Peer_Influence": 0.555407,
          "Physical_Activity": 0.245965,
          "Learning_Disabilities": -0.783704,
          "Parental_Education_Level": 0.507531,
          "Distance_from_Home": -0.405929,
          "Gender": -0.090304
        }
      },
      {
        "intercept": 35.103021,
        "coefficients": {
          "Hours_Studied": 0.291372,
          "Attendance": 0.196109,
          "Parental_Involvement": 0.986315,
          "Access_to_Resources": 1.047923,
          "Extracurricular_Activities": 0.483686,
          "Sleep_Hours": 0.01922,
          "Previous_Scores": 0.048415,
          "Motivation_Level": 0.497251,
          "Internet_Access": 0.85869,
          "Tutoring_Sessions": 0.494866,
          "Family_Income": 0.570589,
          "Teacher_Quality": 0.554021,
          "School_Type": -0.005573,
          "Peer_Influence": 0.529925,
          "Physical_Activity": 0.229762,
          "Learning_Disabilities": -0.843021,
          "Parental_Education_Level": 0.489705,
          "Distance_from_Home": -0.525596,
          "Gender": -0.08525
        }
      },
      {
        "intercept": 35.024036,
        "coefficients": {
          "Hours_Studied": 0.299856,
          "Attendance": 0.197567,
          "Parental_Involvement": 0.955791,
          "Access_to_Resources": 1.015315,
          "Extracurricular_Activities": 0.546961,
          "Sleep_Hours": -0.006649,
          "Previous_Scores": 0.047863,
          "Motivation_Level": 0.551867,
          "Internet_Access": 0.930894,
          "Tutoring_Sessions": 0.483057,
          "Family_Income": 0.529625,
          "Teacher_Quality": 0.518821,
          "School_Type": -0.030937,
          "Peer_Influence": 0.560232,
          "Physical_Activity": 0.211074,
          "Learning_Disabilities": -0.761878,
          "Parental_Education_Level": 0.490103,
          "Distance_from_Home": -0.474444,
          "Gender": -0.030113
        }
      },
      {
        "intercept": 34.429499,
        "coefficients": {
          "Hours_Studied": 0.291844,
          "Attendance": 0.202647,
          "Parental_Involvement": 1.052224,
          "Access_to_Resources": 1.066767,
          "Extracurricular_Activities": 0.606111,
          "Sleep_Hours": 0.001254,
          "Previous_Scores": 0.049455,
          "Motivation_Level": 0.536473,
          "Internet_Access": 1.008855,
          "Tutoring_Sessions": 0.529315,
          "Family_Income": 0.558914,
          "Teacher_Quality": 0.507513,
          "School_Type": 0.020472,
          "Peer_Influence": 0.488761,
          "Physical_Activity": 0.171428,
          "Learning_Disabilities": -0.928963,
          "Parental_Education_Level": 0.459992,
          "Distance_from_Home": -0.386179,
          "Gender": -0.029235
        }
      },
      {
        "intercept": 34.5888,
        "coefficients": {
          "Hours_Studied": 0.299315,
          "Attendance": 0.199701,
          "Parental_Involvement": 0.971698,
          "Access_to_Resources": 0.969163,
          "Extracurricular_Activities": 0.551929,
          "Sleep_Hours": -0.002374,
          "Previous_Scores": 0.05169,
          "Motivation_Level": 0.52826,
          "Internet_Access": 1.104036,
          "Tutoring_Sessions": 0.462138,
          "Family_Income": 0.491735,
          "Teacher_Quality": 0.532694,
          "School_Type": -0.067542,
          "Peer_Influence": 0.535158,
          "Physical_Activity": 0.179332,
          "Learning_Disabilities": -0.911323,
          "Parental_Education_Level": 0.537354,
          "Distance_from_Home": -0.46446,
          "Gender": -0.068462
        }
      },
      {
        "intercept": 34.661959,
        "coefficients": {
          "Hours_Studied": 0.299132,
          "Attendance": 0.202066,
          "Parental_Involvement": 0.922735,
          "Access_to_Resources": 1.044183,
          "Extracurricular_Activities": 0.572073,
          "Sleep_Hours": 0.003416,
          "Previous_Scores": 0.04797,
          "Motivation_Level": 0.54547,
          "Internet_Access": 0.737619,
          "Tutoring_Sessions": 0.503925,
          "Family_Income": 0.590224,
          "Teacher_Quality": 0.576803,
          "School_Type": -0.140997,
          "Peer_Influence": 0.562466,
          "Physical_Activity": 0.22425,
          "Learning_Disabilities": -0.814602,
          "Parental_Education_Level": 0.49243,
          "Distance_from_Home": -0.471752,
          "Gender": -0.038393
        }
      },
      {
        "intercept": 34.294864,
        "coefficients": {
          "Hours_Studied": 0.299491,
          "Attendance": 0.203585,
          "Parental_Involvement": 1.065022,
          "Access_to_Resources": 1.095785,
          "Extracurricular_Activities": 0.512345,
          "Sleep_Hours": -0.021345,
          "Previous_Scores": 0.053242,
          "Motivation_Level": 0.482148,
          "Internet_Access": 0.884717,
          "Tutoring_Sessions": 0.497245,
          "Family_Income": 0.590641,
          "Teacher_Quality": 0.571418,
          "School_Type": -0.131572,
          "Peer_Influence": 0.485498,
          "Physical_Activity": 0.198789,
          "Learning_Disabilities": -1.023788,
          "Parental_Education_Level": 0.432363,
          "Distance_from_Home": -0.424013,
          "Gender": -0.083094
        }
      },
      {
        "intercept": 34.479119,
        "coefficients": {
          "Hours_Studied": 0.301971,
          "Attendance": 0.202034,
          "Parental_Involvement": 1.015227,
          "Access_to_Resources": 0.9807,
          "Extracurricular_Activities": 0.523389,
          "Sleep_Hours": -0.009804,
          "Previous_Scores": 0.049904,
          "Motivation_Level": 0.485276,
          "Internet_Access": 1.013353,
          "Tutoring_Sessions": 0.506413,
          "Family_Income": 0.528062,
          "Teacher_Quality": 0.614024,
          "School_Type": -0.082197,
          "Peer_Influence": 0.540692,
          "Physical_Activity": 0.157117,
          "Learning_Disabilities": -0.973168,
          "Parental_Education_Level": 0.514914,
          "Distance_from_Home": -0.446401,
          "Gender": -0.03965
        }
      },
      {
        "intercept": 34.577106,
        "coefficients": {
          "Hours_Studied": 0.302733,
          "Attendance": 0.198597,
          "Parental_Involvement": 1.047033,
          "Access_to_Resources": 1.013965,
          "Extracurricular_Activities": 0.53129,
          "Sleep_Hours": 0.006059,
          "Previous_Scores": 0.048634,
          "Motivation_Level": 0.50684,
          "Internet_Access": 1.088681,
          "Tutoring_Sessions": 0.501227,
          "Family_Income": 0.486123,
          "Teacher_Quality": 0.538044,
          "School_Type": -0.012576,
          "Peer_Influence": 0.513521,
          "Physical_Activity": 0.193465,
          "Learning_Disabilities": -0.774517,
          "Parental_Education_Level": 0.512556,
          "Distance_from_Home": -0.45366,
          "Gender": -0.03644
        }
      },
      {
        "intercept": 35.113844,
        "coefficients": {
          "Hours_Studied": 0.28649,
          "Attendance": 0.199631,
          "Parental_Involvement": 1.090385,
          "Access_to_Resources": 1.049667,
          "Extracurricular_Activities": 0.600003,
          "Sleep_Hours": -0.028425,
          "Previous_Scores": 0.050313,
          "Motivation_Level": 0.535199,
          "Internet_Access": 0.945048,
          "Tutoring_Sessions": 0.540584,
          "Family_Income": 0.525094,
          "Teacher_Quality": 0.513659,
          "School_Type": 0.094994,
          "Peer_Influence": 0.457472,
          "Physical_Activity": 0.138431,
          "Learning_Disabilities": -0.78624,
          "Parental_Education_Level": 0.445124,
          "Distance_from_Home": -0.429411,
          "Gender": -0.00803
        }
      },
      {
        "intercept": 34.957476,
        "coefficients": {
          "Hours_Studied": 0.295269,
          "Attendance": 0.197743,
          "Parental_Involvement": 0.983616,
          "Access_to_Resources": 1.067947,
          "Extracurricular_Activities": 0.545881,
          "Sleep_Hours": -0.006983,
          "Previous_Scores": 0.050648,
          "Motivation_Level": 0.54798,
          "Internet_Access": 0.967112,
          "Tutoring_Sessions": 0.499458,
          "Family_Income": 0.508865,
          "Teacher_Quality": 0.571624,
          "School_Type": -0.028967,
          "Peer_Influence": 0.501165,
          "Physical_Activity": 0.176942,
          "Learning_Disabilities": -0.781087,
          "Parental_Education_Level": 0.509785,
          "Distance_from_Home": -0.500318,
          "Gender": -0.132292
        }
      },
      {
        "intercept": 34.662647,
        "coefficients": {
          "Hours_Studied": 0.295786,
          "Attendance": 0.19999,
          "Parental_Involvement": 1.052247,
          "Access_to_Resources": 1.061874,
          "Extracurricular_Activities": 0.601192,
          "Sleep_Hours": 0.000509,
          "Previous_Scores": 0.047538,
          "Motivation_Level": 0.577638,
          "Internet_Access": 1.051249,
          "Tutoring_Sessions": 0.511538,
          "Family_Income": 0.546242,
          "Teacher_Quality": 0.506095,
          "School_Type": -0.019964,
          "Peer_Influence": 0.516973,
          "Physical_Activity": 0.196022,
          "Learning_Disabilities": -0.930982,
          "Parental_Education_Level": 0.466253,
          "Distance_from_Home": -0.470635,
          "Gender": -0.036948
        }
      },
      {
        "intercept": 33.832369,
        "coefficients": {
          "Hours_Studied": 0.304879,
          "Attendance": 0.203883,
          "Parental_Involvement": 0.937203,
          "Access_to_Resources": 0.981989,
          "Extracurricular_Activities": 0.561314,
          "Sleep_Hours": -0.005568,
          "Previous_Scores": 0.053119,
          "Motivation_Level": 0.529565,
          "Internet_Access": 1.041725,
          "Tutoring_Sessions": 0.489499,
          "Family_Income": 0.560279,
          "Teacher_Quality": 0.588543,
          "School_Type": -0.121162,
          "Peer_Influence": 0.551642,
          "Physical_Activity": 0.250327,
          "Learning_Disabilities": -0.823025,
          "Parental_Education_Level": 0.519659,
          "Distance_from_Home": -0.491422,
          "Gender": -0.119591
        }
      },
      {
        "intercept": 34.884224,
        "coefficients": {
          "Hours_Studied": 0.298142,
          "Attendance": 0.199487,
          "Parental_Involvement": 1.036941,
          "Access_to_Resources": 1.060813,
          "Extracurricular_Activities": 0.542322,
          "Sleep_Hours": -0.020395,
          "Previous_Scores": 0.05049,
          "Motivation_Level": 0.484361,
          "Internet_Access": 0.889321,
          "Tutoring_Sessions": 0.465284,
          "Family_Income": 0.593485,
          "Teacher_Quality": 0.564423,
          "School_Type": -0.017679,
          "Peer_Influence": 0.494026,
          "Physical_Activity": 0.171605,
          "Learning_Disabilities": -0.66967,
          "Parental_Education_Level": 0.463516,
          "Distance_from_Home": -0.473808,
          "Gender": 0.02405
        }
      },
      {
        "intercept": 35.481396,
        "coefficients": {
          "Hours_Studied": 0.285566,
          "Attendance": 0.195695,
          "Parental_Involvement": 1.09896,
          "Access_to_Resources": 1.067539,
          "Extracurricular_Activities": 0.581669,
          "Sleep_Hours": 0.006205,
          "Previous_Scores": 0.050261,
          "Motivation_Level": 0.466847,
          "Internet_Access": 0.763883,
          "Tutoring_Sessions": 0.488036,
          "Family_Income": 0.511424,
          "Teacher_Quality": 0.472009,
          "School_Type": -0.045353,
          "Peer_Influence": 0.473434,
          "Physical_Activity": 0.165238,
          "Learning_Disabilities": -0.826078,
          "Parental_Education_Level": 0.464283,
          "Distance_from_Home": -0.419932,
          "Gender": -0.006971
        }
      },
      {
        "intercept": 34.935002,
        "coefficients": {
          "Hours_Studied": 0.299547,
          "Attendance": 0.199423,
          "Parental_Involvement": 1.019051,
          "Access_to_Resources": 0.949876,
          "Extracurricular_Activities": 0.520021,
          "Sleep_Hours": 0.010226,
          "Previous_Scores": 0.048513,
          "Motivation_Level": 0.533232,
          "Internet_Access": 0.763057,
          "Tutoring_Sessions": 0.513781,
          "Family_Income": 0.55387,
          "Teacher_Quality": 0.55278,
          "School_Type": 0.005681,
          "Peer_Influence": 0.49203,
          "Physical_Activity": 0.153461,
          "Learning_Disabilities": -0.692085,
          "Parental_Education_Level": 0.498486,
          "Distance_from_Home": -0.417879,
          "Gender": 0.076019
        }
      },
      {
        "intercept": 35.059068,
        "coefficients": {
          "Hours_Studied": 0.294657,
          "Attendance": 0.194633,
          "Parental_Involvement": 1.059945,
          "Access_to_Resources": 1.000122,
          "Extracurricular_Activities": 0.524065,
          "Sleep_Hours": 0.015467,
          "Previous_Scores": 0.052206,
          "Motivation_Level": 0.470406,
          "Internet_Access": 0.698226,
          "Tutoring_Sessions": 0.477892,
          "Family_Income": 0.533075,
          "Teacher_Quality": 0.542739,
          "School_Type": -0.030544,
          "Peer_Influence": 0.470379,
          "Physical_Activity": 0.227702,
          "Learning_Disabilities": -0.908689,
          "Parental_Education_Level": 0.544208,
          "Distance_from_Home": -0.519882,
          "Gender": 0.029565
        }
      },
      {
        "intercept": 36.090178,
        "coefficients": {
          "Hours_Studied": 0.273886,
          "Attendance": 0.193526,
          "Parental_Involvement": 1.019472,
          "Access_to_Resources": 1.053838,
          "Extracurricular_Activities": 0.512544,
          "Sleep_Hours": -0.01646,
          "Previous_Scores": 0.049881,
          "Motivation_Level": 0.581741,
          "Internet_Access": 0.829997,
          "Tutoring_Sessions": 0.488408,
          "Family_Income": 0.551576,
          "Teacher_Quality": 0.568479,
          "School_Type": -0.00873,
          "Peer_Influence": 0.415553,
          "Physical_Activity": 0.146759,
          "Learning_Disabilities": -0.874511,
          "Parental_Education_Level": 0.496821,
          "Distance_from_Home": -0.541589,
          "Gender": -0.004861
        }
      },
      {
        "intercept": 35.138396,
        "coefficients": {
          "Hours_Studied": 0.298536,
          "Attendance": 0.19759,
          "Parental_Involvement": 1.027075,
          "Access_to_Resources": 0.993552,
          "Extracurricular_Activities": 0.591704,
          "Sleep_Hours": -0.017231,
          "Previous_Scores": 0.04806,
          "Motivation_Level": 0.504274,
          "Internet_Access": 1.028164,
          "Tutoring_Sessions": 0.491005,
          "Family_Income": 0.497614,
          "Teacher_Quality": 0.525108,
          "School_Type": -0.115265,
          "Peer_Influence": 0.536316,
          "Physical_Activity": 0.164018,
          "Learning_Disabilities": -0.804403,
          "Parental_Education_Level": 0.465339,
          "Distance_from_Home": -0.422774,
          "Gender": -0.0236
        }
      },
      {
        "intercept": 35.045607,
        "coefficients": {
          "Hours_Studied": 0.290063,
          "Attendance": 0.198106,
          "Parental_Involvement": 1.018866,
          "Access_to_Resources": 0.9459,
          "Extracurricular_Activities": 0.552831,
          "Sleep_Hours": -0.034738,
          "Previous_Scores": 0.05242,
          "Motivation_Level": 0.542707,
          "Internet_Access": 0.949351,
          "Tutoring_Sessions": 0.516247,
          "Family_Income": 0.507115,
          "Teacher_Quality": 0.626112,
          "School_Type": 0.179885,
          "Peer_Influence": 0.558927,
          "Physical_Activity": 0.160191,
          "Learning_Disabilities": -0.623911,
          "Parental_Education_Level": 0.497924,
          "Distance_from_Home": -0.568124,
          "Gender": -0.106232
        }
      },
      {
        "intercept": 35.391646,
        "coefficients": {
          "Hours_Studied": 0.288383,
          "Attendance": 0.195756,
          "Parental_Involvement": 1.040564,
          "Access_to_Resources": 1.08537,
          "Extracurricular_Activities": 0.545118,
          "Sleep_Hours": -0.011142,
          "Previous_Scores": 0.049148,
          "Motivation_Level": 0.544762,
          "Internet_Access": 0.846279,
          "Tutoring_Sessions": 0.518621,
          "Family_Income": 0.559968,
          "Teacher_Quality": 0.548083,
          "School_Type": -0.074386,
          "Peer_Influence": 0.500825,
          "Physical_Activity": 0.191781,
          "Learning_Disabilities": -0.692847,
          "Parental_Education_Level": 0.404826,
          "Distance_from_Home": -0.471594,
          "Gender": -0.049679
        }
      },
      {
        "intercept": 35.289344,
        "coefficients": {
          "Hours_Studied": 0.291948,
          "Attendance": 0.195449,
          "Parental_Involvement": 1.025773,
          "Access_to_Resources": 0.967905,
          "Extracurricular_Activities": 0.524223,
          "Sleep_Hours": 0.010268,
          "Previous_Scores": 0.047922,
          "Motivation_Level": 0.58263,
          "Internet_Access": 0.990776,
          "Tutoring_Sessions": 0.488491,
          "Family_Income": 0.478591,
          "Teacher_Quality": 0.544591,
          "School_Type": -0.00863,
          "Peer_Influence": 0.501403,
          "Physical_Activity": 0.1603,
          "Learning_Disabilities": -0.754201,
          "Parental_Education_Level": 0.49438,
          "Distance_from_Home": -0.436254,
          "Gender": 0.001242
        }
      },
      {
        "intercept": 34.765172,
        "coefficients": {
          "Hours_Studied": 0.298716,
          "Attendance": 0.200936,
          "Parental_Involvement": 0.966891,
          "Access_to_Resources": 1.070786,
          "Extracurricular_Activities": 0.546037,
          "Sleep_Hours": -0.000485,
          "Previous_Scores": 0.044983,
          "Motivation_Level": 0.576638,
          "Internet_Access": 1.016552,
          "Tutoring_Sessions": 0.49258,
          "Family_Income": 0.535412,
          "Teacher_Quality": 0.562188,
          "School_Type": -0.118089,
          "Peer_Influence": 0.498648,
          "Physical_Activity": 0.221957,
          "Learning_Disabilities": -0.748467,
          "Parental_Education_Level": 0.456943,
          "Distance_from_Home": -0.502896,
          "Gender": -0.020664
        }
      },
      {
        "intercept": 35.238843,
        "coefficients": {
          "Hours_Studied": 0.292858,
          "Attendance": 0.196628,
          "Parental_Involvement": 0.971664,
          "Access_to_Resources": 0.965584,
          "Extracurricular_Activities": 0.684021,
          "Sleep_Hours": -0.00726,
          "Previous_Scores": 0.046784,
          "Motivation_Level": 0.561439,
          "Internet_Access": 1.085087,
          "Tutoring_Sessions": 0.519081,
          "Family_Income": 0.547434,
          "Teacher_Quality": 0.583921,
          "School_Type": -0.030964,
          "Peer_Influence": 0.511744,
          "Physical_Activity": 0.185589,
          "Learning_Disabilities": -0.800462,
          "Parental_Education_Level": 0.5171,
          "Distance_from_Home": -0.551983,
          "Gender": -0.15306
        }
      },
      {
        "intercept": 35.239949,
        "coefficients": {
          "Hours_Studied": 0.287413,
          "Attendance": 0.197812,
          "Parental_Involvement": 1.029376,
          "Access_to_Resources": 1.045909,
          "Extracurricular_Activities": 0.493641,
          "Sleep_Hours": -0.00205,
          "Previous_Scores": 0.04641,
          "Motivation_Level": 0.515815,
          "Internet_Access": 0.964768,
          "Tutoring_Sessions": 0.489498,
          "Family_Income": 0.510276,
          "Teacher_Quality": 0.645821,
          "School_Type": 0.054893,
          "Peer_Influence": 0.539828,
          "Physical_Activity": 0.166675,
          "Learning_Disabilities": -0.782534,
          "Parental_Education_Level": 0.450889,
          "Distance_from_Home": -0.442285,
          "Gender": -0.002994
        }
      },
      {
        "intercept": 34.863334,
        "coefficients": {
          "Hours_Studied": 0.30214,
          "Attendance": 0.197876,
          "Parental_Involvement": 0.947624,
          "Access_to_Resources": 0.970733,
          "Extracurricular_Activities": 0.60975,
          "Sleep_Hours": 0.001079,
          "Previous_Scores": 0.050713,
          "Motivation_Level": 0.562771,
          "Internet_Access": 0.894242,
          "Tutoring_Sessions": 0.509281,
          "Family_Income": 0.456868,
          "Teacher_Quality": 0.539064,
          "School_Type": -0.106385,
          "Peer_Influence": 0.604281,
          "Physical_Activity": 0.137829,
          "Learning_Disabilities": -0.860004,
          "Parental_Education_Level": 0.568816,
          "Distance_from_Home": -0.486321,
          "Gender": 0.017599
        }
      },
      {
        "intercept": 34.944033,
        "coefficients": {
          "Hours_Studied": 0.292857,
          "Attendance": 0.201695,
          "Parental_Involvement": 1.004646,
          "Access_to_Resources": 1.047128,
          "Extracurricular_Activities": 0.543589,
          "Sleep_Hours": -0.054189,
          "Previous_Scores": 0.051757,
          "Motivation_Level": 0.517433,
          "Internet_Access": 1.137579,
          "Tutoring_Sessions": 0.467024,
          "Family_Income": 0.458995,
          "Teacher_Quality": 0.577006,
          "School_Type": -0.055827,
          "Peer_Influence": 0.476659,
          "Physical_Activity": 0.163384,
          "Learning_Disabilities": -0.95028,
          "Parental_Education_Level": 0.448738,
          "Distance_from_Home": -0.48461,
          "Gender": 0.009793
        }
      },
      {
        "intercept": 35.371414,
        "coefficients": {
          "Hours_Studied": 0.294373,
          "Attendance": 0.196195,
          "Parental_Involvement": 0.929673,
          "Access_to_Resources": 1.009848,
          "Extracurricular_Activities": 0.554751,
          "Sleep_Hours": 0.007957,
          "Previous_Scores": 0.045494,
          "Motivation_Level": 0.519083,
          "Internet_Access": 0.903616,
          "Tutoring_Sessions": 0.499854,
          "Family_Income": 0.541831,
          "Teacher_Quality": 0.480858,
          "School_Type": -0.076049,
          "Peer_Influence": 0.506444,
          "Physical_Activity": 0.222466,
          "Learning_Disabilities": -0.904806,
          "Parental_Education_Level": 0.50038,
          "Distance_from_Home": -0.456056,
          "Gender": -0.000143
        }
      },
      {
        "intercept": 35.036524,
        "coefficients": {
          "Hours_Studied": 0.295137,
          "Attendance": 0.199616,
          "Parental_Involvement": 0.996148,
          "Access_to_Resources": 0.986485,
          "Extracurricular_Activities": 0.614348,
          "Sleep_Hours": -0.025749,
          "Previous_Scores": 0.047303,
          "Motivation_Level": 0.534001,
          "Internet_Access": 0.860159,
          "Tutoring_Sessions": 0.53534,
          "Family_Income": 0.579902,
          "Teacher_Quality": 0.596931,
          "School_Type": -0.107522,
          "Peer_Influence": 0.535086,
          "Physical_Activity": 0.194871,
          "Learning_Disabilities": -0.925416,
          "Parental_Education_Level": 0.507883,
          "Distance_from_Home": -0.523915,
          "Gender": -0.040583
        }
      },
      {
        "intercept": 34.799192,
        "coefficients": {
          "Hours_Studied": 0.28767,
          "Attendance": 0.201756,
          "Parental_Involvement": 0.995403,
          "Access_to_Resources": 1.051111,
          "Extracurricular_Activities": 0.541812,
          "Sleep_Hours": -0.011926,
          "Previous_Scores": 0.051573,
          "Motivation_Level": 0.499162,
          "Internet_Access": 0.854218,
          "Tutoring_Sessions": 0.521233,
          "Family_Income": 0.551763,
          "Teacher_Quality": 0.570095,
          "School_Type": 0.11353,
          "Peer_Influence": 0.483193,
          "Physical_Activity": 0.163705,
          "Learning_Disabilities": -0.847239,
          "Parental_Education_Level": 0.519558,
          "Distance_from_Home": -0.562911,
          "Gender": -0.065838
        }
      },
      {
        "intercept": 34.502119,
        "coefficients": {
          "Hours_Studied": 0.299402,
          "Attendance": 0.203376,
          "Parental_Involvement": 1.065168,
          "Access_to_Resources": 1.047249,
          "Extracurricular_Activities": 0.552092,
          "Sleep_Hours": -0.031707,
          "Previous_Scores": 0.048514,
          "Motivation_Level": 0.527175,
          "Internet_Access": 0.936534,
          "Tutoring_Sessions": 0.511181,
          "Family_Income": 0.596012,
          "Teacher_Quality": 0.547607,
          "School_Type": -0.081507,
          "Peer_Influence": 0.506237,
          "Physical_Activity": 0.217511,
          "Learning_Disabilities": -0.901248,
          "Parental_Education_Level": 0.455723,
          "Distance_from_Home": -0.488041,
          "Gender": -0.035275
        }
      },
      {
        "intercept": 35.578841,
        "coefficients": {
          "Hours_Studied": 0.3012,
          "Attendance": 0.19637,
          "Parental_Involvement": 0.966464,
          "Access_to_Resources": 0.992191,
          "Extracurricular_Activities": 0.602144,
          "Sleep_Hours": -0.014886,
          "Previous_Scores": 0.04864,
          "Motivation_Level": 0.486602,
          "Internet_Access": 0.696864,
          "Tutoring_Sessions": 0.474618,
          "Family_Income": 0.458805,
          "Teacher_Quality": 0.491752,
          "School_Type": -0.023978,
          "Peer_Influence": 0.574893,
          "Physical_Activity": 0.178131,
          "Learning_Disabilities": -0.87154,
          "Parental_Education_Level": 0.506841,
          "Distance_from_Home": -0.4665,
          "Gender": -0.137663
        }
      },
      {
        "intercept": 34.89097,
        "coefficients": {
          "Hours_Studied": 0.292399,
          "Attendance": 0.197739,
          "Parental_Involvement": 1.050508,
          "Access_to_Resources": 0.965709,
          "Extracurricular_Activities": 0.579826,
          "Sleep_Hours": 0.001614,
          "Previous_Scores": 0.052054,
          "Motivation_Level": 0.547277,
          "Internet_Access": 0.860414,
          "Tutoring_Sessions": 0.492616,
          "Family_Income": 0.570634,
          "Teacher_Quality": 0.524391,
          "School_Type": 0.029953,
          "Peer_Influence": 0.516049,
          "Physical_Activity": 0.191976,
          "Learning_Disabilities": -0.89254,
          "Parental_Education_Level": 0.447479,
          "Distance_from_Home": -0.514214,
          "Gender": -0.047452
        }
      },
      {
        "intercept": 34.905207,
        "coefficients": {
          "Hours_Studied": 0.298087,
          "Attendance": 0.198602,
          "Parental_Involvement": 0.970893,
          "Access_to_Resources": 1.022359,
          "Extracurricular_Activities": 0.553532,
          "Sleep_Hours": 0.005177,
          "Previous_Scores": 0.048427,
          "Motivation_Level": 0.526375,
          "Internet_Access": 1.126648,
          "Tutoring_Sessions": 0.50889,
          "Family_Income": 0.514147,
          "Teacher_Quality": 0.530824,
          "School_Type": -0.064315,
          "Peer_Influence": 0.518135,
          "Physical_Activity": 0.144412,
          "Learning_Disabilities": -0.884635,
          "Parental_Education_Level": 0.482008,
          "Distance_from_Home": -0.411196,
          "Gender": -0.135239
        }
      },
      {
        "intercept": 35.574171,
        "coefficients": {
          "Hours_Studied": 0.28946,
          "Attendance": 0.19822,
          "Parental_Involvement": 0.920408,
          "Access_to_Resources": 0.964078,
          "Extracurricular_Activities": 0.474132,
          "Sleep_Hours": -0.014703,
          "Previous_Scores": 0.047476,
          "Motivation_Level": 0.535144,
          "Internet_Access": 1.079715,
          "Tutoring_Sessions": 0.484154,
          "Family_Income": 0.497659,
          "Teacher_Quality": 0.606266,
          "School_Type": -0.066027,
          "Peer_Influence": 0.460986,
          "Physical_Activity": 0.179532,
          "Learning_Disabilities": -0.775217,
          "Parental_Education_Level": 0.449602,
          "Distance_from_Home": -0.563403,
          "Gender": -0.159233
        }
      },
      {
        "intercept": 34.686695,
        "coefficients": {
          "Hours_Studied": 0.30003,
          "Attendance": 0.195798,
          "Parental_Involvement": 0.966028,
          "Access_to_Resources": 1.001705,
          "Extracurricular_Activities": 0.587002,
          "Sleep_Hours": 0.003672,
          "Previous_Scores": 0.049593,
          "Motivation_Level": 0.555825,
          "Internet_Access": 1.036777,
          "Tutoring_Sessions": 0.494019,
          "Family_Income": 0.533723,
          "Teacher_Quality": 0.453889,
          "School_Type": -0.094414,
          "Peer_Influence": 0.561156,
          "Physical_Activity": 0.260252,
          "Learning_Disabilities": -0.881474,
          "Parental_Education_Level": 0.562555,
          "Distance_from_Home": -0.441113,
          "Gender": -0.027485
        }
      },
      {
        "intercept": 34.796845,
        "coefficients": {
          "Hours_Studied": 0.294802,
          "Attendance": 0.20043,
          "Parental_Involvement": 0.9529,
          "Access_to_Resources": 1.081442,
          "Extracurricular_Activities": 0.594028,
          "Sleep_Hours": -0.011376,
          "Previous_Scores": 0.047449,
          "Motivation_Level": 0.495526,
          "Internet_Access": 1.10901,
          "Tutoring_Sessions": 0.502306,
          "Family_Income": 0.550507,
          "Teacher_Quality": 0.63777,
          "School_Type": -0.060399,
          "Peer_Influence": 0.514059,
          "Physical_Activity": 0.168605,
          "Learning_Disabilities": -0.809602,
          "Parental_Education_Level": 0.499196,
          "Distance_from_Home": -0.446401,
          "Gender": -0.125779
        }
      },
      {
        "intercept": 35.275986,
        "coefficients": {
          "Hours_Studied": 0.295238,
          "Attendance": 0.197711,
          "Parental_Involvement": 0.968483,
          "Access_to_Resources": 0.989552,
          "Extracurricular_Activities": 0.48947,
          "Sleep_Hours": 0.002874,
          "Previous_Scores": 0.04636,
          "Motivation_Level": 0.567764,
          "Internet_Access": 0.888881,
          "Tutoring_Sessions": 0.513358,
          "Family_Income": 0.570072,
          "Teacher_Quality": 0.52287,
          "School_Type": -0.044396,
          "Peer_Influence": 0.544324,
          "Physical_Activity": 0.171718,
          "Learning_Disabilities": -0.637292,
          "Parental_Education_Level": 0.495223,
          "Distance_from_Home": -0.423181,
          "Gender": -0.072566
        }
      },
      {
        "intercept": 34.278587,
        "coefficients": {
          "Hours_Studied": 0.298763,
          "Attendance": 0.201671,
          "Parental_Involvement": 1.012129,
          "Access_to_Resources": 1.004423,
          "Extracurricular_Activities": 0.557137,
          "Sleep_Hours": -0.0104,
          "Previous_Scores": 0.05287,
          "Motivation_Level": 0.530831,
          "Internet_Access": 0.921013,
          "Tutoring_Sessions": 0.492472,
          "Family_Income": 0.54311,
          "Teacher_Quality": 0.593349,
          "School_Type": -0.077284,
          "Peer_Influence": 0.536998,
          "Physical_Activity": 0.203304,
          "Learning_Disabilities": -0.815345,
          "Parental_Education_Level": 0.494266,
          "Distance_from_Home": -0.521752,
          "Gender": -0.037706
        }
      },
      {
        "intercept": 35.283058,
        "coefficients": {
          "Hours_Studied": 0.286293,
          "Attendance": 0.197765,
          "Parental_Involvement": 1.03512,
          "Access_to_Resources": 1.091311,
          "Extracurricular_Activities": 0.623175,
          "Sleep_Hours": -0.014758,
          "Previous_Scores": 0.047347,
          "Motivation_Level": 0.558372,
          "Internet_Access": 1.072236,
          "Tutoring_Sessions": 0.480375,
          "Family_Income": 0.507892,
          "Teacher_Quality": 0.490482,
          "School_Type": 0.013221,
          "Peer_Influence": 0.519264,
          "Physical_Activity": 0.145563,
          "Learning_Disabilities": -0.809754,
          "Parental_Education_Level": 0.450944,
          "Distance_from_Home": -0.441555,
          "Gender": 0.063843
        }
      },
      {
        "intercept": 35.211036,
        "coefficients": {
          "Hours_Studied": 0.292507,
          "Attendance": 0.197493,
          "Parental_Involvement": 1.024594,
          "Access_to_Resources": 1.076526,
          "Extracurricular_Activities": 0.620389,
          "Sleep_Hours": -0.019343,
          "Previous_Scores": 0.049026,
          "Motivation_Level": 0.524458,
          "Internet_Access": 0.892949,
          "Tutoring_Sessions": 0.504504,
          "Family_Income": 0.559942,
          "Teacher_Quality": 0.506471,
          "School_Type": -0.034016,
          "Peer_Influence": 0.508302,
          "Physical_Activity": 0.169495,
          "Learning_Disabilities": -0.584496,
          "Parental_Education_Level": 0.40715,
          "Distance_from_Home": -0.401004,
          "Gender": -0.008614
        }
      },
      {
        "intercept": 34.736736,
        "coefficients": {
          "Hours_Studied": 0.293521,
          "Attendance": 0.199686,
          "Parental_Involvement": 0.985133,
          "Access_to_Resources": 1.056015,
          "Extracurricular_Activities": 0.588507,
          "Sleep_Hours": -0.010942,
          "Previous_Scores": 0.051447,
          "Motivation_Level": 0.479555,
          "Internet_Access": 0.932169,
          "Tutoring_Sessions": 0.503271,
          "Family_Income": 0.516655,
          "Teacher_Quality": 0.570338,
          "School_Type": -0.076706,
          "Peer_Influence": 0.522654,
          "Physical_Activity": 0.186387,
          "Learning_Disabilities": -0.937423,
          "Parental_Education_Level": 0.445423,
          "Distance_from_Home": -0.378317,
          "Gender": -0.059623
        }
      },
      {
        "intercept": 34.799439,
        "coefficients": {
          "Hours_Studied": 0.305155,
          "Attendance": 0.196959,
          "Parental_Involvement": 1.01027,
          "Access_to_Resources": 0.970648,
          "Extracurricular_Activities": 0.495993,
          "Sleep_Hours": 0.021685,
          "Previous_Scores": 0.047232,
          "Motivation_Level": 0.584881,
          "Internet_Access": 0.890488,
          "Tutoring_Sessions": 0.477585,
          "Family_Income": 0.508108,
          "Teacher_Quality": 0.519033,
          "School_Type": -0.101406,
          "Peer_Influence": 0.591785,
          "Physical_Activity": 0.190424,
          "Learning_Disabilities": -0.869838,
          "Parental_Education_Level": 0.531899,
          "Distance_from_Home": -0.465874,
          "Gender": 0.095734
        }
      },
      {
        "intercept": 34.693706,
        "coefficients": {
          "Hours_Studied": 0.30191,
          "Attendance": 0.199963,
          "Parental_Involvement": 1.005303,
          "Access_to_Resources": 1.036465,
          "Extracurricular_Activities": 0.439809,
          "Sleep_Hours": -0.001517,
          "Previous_Scores": 0.053245,
          "Motivation_Level": 0.46917,
          "Internet_Access": 0.744212,
          "Tutoring_Sessions": 0.492379,
          "Family_Income": 0.512441,
          "Teacher_Quality": 0.574195,
          "School_Type": -0.08966,
          "Peer_Influence": 0.499403,
          "Physical_Activity": 0.16403,
          "Learning_Disabilities": -0.821462,
          "Parental_Education_Level": 0.522688,
          "Distance_from_Home": -0.509806,
          "Gender": 0.022532
        }
      },
      {
        "intercept": 34.995445,
        "coefficients": {
          "Hours_Studied": 0.294463,
          "Attendance": 0.197916,
          "Parental_Involvement": 0.927972,
          "Access_to_Resources": 0.993415,
          "Extracurricular_Activities": 0.539932,
          "Sleep_Hours": 0.016513,
          "Previous_Scores": 0.049753,
          "Motivation_Level": 0.462534,
          "Internet_Access": 0.861891,
          "Tutoring_Sessions": 0.512805,
          "Family_Income": 0.528011,
          "Teacher_Quality": 0.601187,
          "School_Type": -0.072286,
          "Peer_Influence": 0.545749,
          "Physical_Activity": 0.195887,
          "Learning_Disabilities": -0.804028,
          "Parental_Education_Level": 0.496136,
          "Distance_from_Home": -0.527736,
          "Gender": -0.103643
        }
      },
      {
        "intercept": 35.296418,
        "coefficients": {
          "Hours_Studied": 0.291228,
          "Attendance": 0.196482,
          "Parental_Involvement": 1.05228,
          "Access_to_Resources": 1.136576,
          "Extracurricular_Activities": 0.522766,
          "Sleep_Hours": 0.012751,
          "Previous_Scores": 0.049324,
          "Motivation_Level": 0.483147,
          "Internet_Access": 0.77803,
          "Tutoring_Sessions": 0.458889,
          "Family_Income": 0.533695,
          "Teacher_Quality": 0.447427,
          "School_Type": -0.053987,
          "Peer_Influence": 0.474984,
          "Physical_Activity": 0.207784,
          "Learning_Disabilities": -0.824393,
          "Parental_Education_Level": 0.475251,
          "Distance_from_Home": -0.446608,
          "Gender": -0.070482
        }
      },
      {
        "intercept": 34.947408,
        "coefficients": {
          "Hours_Studied": 0.303937,
          "Attendance": 0.199938,
          "Parental_Involvement": 0.976174,
          "Access_to_Resources": 1.014632,
          "Extracurricular_Activities": 0.537754,
          "Sleep_Hours": -0.036437,
          "Previous_Scores": 0.049065,
          "Motivation_Level": 0.492353,
          "Internet_Access": 0.837511,
          "Tutoring_Sessions": 0.52111,
          "Family_Income": 0.558385,
          "Teacher_Quality": 0.441332,
          "School_Type": -0.104906,
          "Peer_Influence": 0.521535,
          "Physical_Activity": 0.231939,
          "Learning_Disabilities": -1.121631,
          "Parental_Education_Level": 0.53463,
          "Distance_from_Home": -0.431336,
          "Gender": 0.031644
        }
      },
      {
        "intercept": 35.020492,
        "coefficients": {
          "Hours_Studied": 0.29708,
          "Attendance": 0.195921,
          "Parental_Involvement": 1.038841,
          "Access_to_Resources": 1.031013,
          "Extracurricular_Activities": 0.625862,
          "Sleep_Hours": -0.03205,
          "Previous_Scores": 0.052076,
          "Motivation_Level": 0.516203,
          "Internet_Access": 0.952393,
          "Tutoring_Sessions": 0.488796,
          "Family_Income": 0.485697,
          "Teacher_Quality": 0.513459,
          "School_Type": -0.014238,
          "Peer_Influence": 0.506444,
          "Physical_Activity": 0.201117,
          "Learning_Disabilities": -0.863867,
          "Parental_Education_Level": 0.518477,
          "Distance_from_Home": -0.412063,
          "Gender": -0.001372
        }
      },
      {
        "intercept": 35.003194,
        "coefficients": {
          "Hours_Studied": 0.284823,
          "Attendance": 0.198969,
          "Parental_Involvement": 1.040228,
          "Access_to_Resources": 1.039965,
          "Extracurricular_Activities": 0.596192,
          "Sleep_Hours": -0.005206,
          "Previous_Scores": 0.050216,
          "Motivation_Level": 0.511929,
          "Internet_Access": 0.966446,
          "Tutoring_Sessions": 0.518965,
          "Family_Income": 0.524223,
          "Teacher_Quality": 0.526972,
          "School_Type": 0.109252,
          "Peer_Influence": 0.492933,
          "Physical_Activity": 0.174679,
          "Learning_Disabilities": -0.833791,
          "Parental_Education_Level": 0.474128,
          "Distance_from_Home": -0.490909,
          "Gender": -0.062653
        }
      },
      {
        "intercept": 34.862926,
        "coefficients": {
          "Hours_Studied": 0.296569,
          "Attendance": 0.198771,
          "Parental_Involvement": 0.9705,
          "Access_to_Resources": 1.005823,
          "Extracurricular_Activities": 0.485788,
          "Sleep_Hours": 0.014339,
          "Previous_Scores": 0.049688,
          "Motivation_Level": 0.517337,
          "Internet_Access": 0.982756,
          "Tutoring_Sessions": 0.488162,
          "Family_Income": 0.494703,
          "Teacher_Quality": 0.48149,
          "School_Type": -0.069185,
          "Peer_Influence": 0.550576,
          "Physical_Activity": 0.174771,
          "Learning_Disabilities": -0.905718,
          "Parental_Education_Level": 0.497817,
          "Distance_from_Home": -0.386315,
          "Gender": -0.035784
        }
      },
      {
        "intercept": 35.092949,
        "coefficients": {
          "Hours_Studied": 0.297759,
          "Attendance": 0.196348,
          "Parental_Involvement": 0.947998,
          "Access_to_Resources": 0.988928,
          "Extracurricular_Activities": 0.552413,
          "Sleep_Hours": 0.008477,
          "Previous_Scores": 0.047428,
          "Motivation_Level": 0.573365,
          "Internet_Access": 1.08179,
          "Tutoring_Sessions": 0.469188,
          "Family_Income": 0.481505,
          "Teacher_Quality": 0.454731,
          "School_Type": -0.112357,
          "Peer_Influence": 0.509678,
          "Physical_Activity": 0.231915,
          "Learning_Disabilities": -0.900545,
          "Parental_Education_Level": 0.504927,
          "Distance_from_Home": -0.451916,
          "Gender": -0.01541
        }
      },
      {
        "intercept": 34.997082,
        "coefficients": {
          "Hours_Studied": 0.298311,
          "Attendance": 0.198505,
          "Parental_Involvement": 1.024622,
          "Access_to_Resources": 0.974555,
          "Extracurricular_Activities": 0.476678,
          "Sleep_Hours": -0.036588,
          "Previous_Scores": 0.052171,
          "Motivation_Level": 0.537758,
          "Internet_Access": 0.871989,
          "Tutoring_Sessions": 0.48418,
          "Family_Income": 0.539306,
          "Teacher_Quality": 0.564942,
          "School_Type": -0.006433,
          "Peer_Influence": 0.620284,
          "Physical_Activity": 0.155041,
          "Learning_Disabilities": -0.885605,
          "Parental_Education_Level": 0.471441,
          "Distance_from_Home": -0.464048,
          "Gender": -0.033929
        }
      },
      {
        "intercept": 34.497677,
        "coefficients": {
          "Hours_Studied": 0.303335,
          "Attendance": 0.202663,
          "Parental_Involvement": 0.923146,
          "Access_to_Resources": 0.974986,
          "Extracurricular_Activities": 0.500547,
          "Sleep_Hours": 0.013544,
          "Previous_Scores": 0.049583,
          "Motivation_Level": 0.52346,
          "Internet_Access": 0.820105,
          "Tutoring_Sessions": 0.510306,
          "Family_Income": 0.577,
          "Teacher_Quality": 0.504698,
          "School_Type": -0.025743,
          "Peer_Influence": 0.558258,
          "Physical_Activity": 0.194489,
          "Learning_Disabilities": -0.853947,
          "Parental_Education_Level": 0.466629,
          "Distance_from_Home": -0.498342,
          "Gender": -0.030024
        }
      }
    ],
    "featureOrder": [
      "Hours_Studied",
      "Attendance",
      "Parental_Involvement",
      "Access_to_Resources",
      "Extracurricular_Activities",
      "Sleep_Hours",
      "Previous_Scores",
      "Motivation_Level",
      "Internet_Access",
      "Tutoring_Sessions",
      "Family_Income",
      "Teacher_Quality",
      "School_Type",
      "Peer_Influence",
      "Physical_Activity",
      "Learning_Disabilities",
      "Parental_Education_Level",
      "Distance_from_Home",
      "Gender"
    ],
    "rSquared": 0.727,
    "residualStd": 2.032,
    "coefficientSummary": [
      {
        "key": "Access_to_Resources",
        "label": "Access to resources",
        "coefficient": 1.025,
        "ciLow": 0.968,
        "ciHigh": 1.088
      },
      {
        "key": "Parental_Involvement",
        "label": "Parental involvement",
        "coefficient": 0.996,
        "ciLow": 0.927,
        "ciHigh": 1.06
      },
      {
        "key": "Internet_Access",
        "label": "Internet access",
        "coefficient": 0.927,
        "ciLow": 0.747,
        "ciHigh": 1.104
      },
      {
        "key": "Learning_Disabilities",
        "label": "Learning disabilities",
        "coefficient": -0.854,
        "ciLow": -0.996,
        "ciHigh": -0.676
      },
      {
        "key": "Extracurricular_Activities",
        "label": "Extracurriculars",
        "coefficient": 0.554,
        "ciLow": 0.473,
        "ciHigh": 0.632
      },
      {
        "key": "Teacher_Quality",
        "label": "Teacher quality",
        "coefficient": 0.533,
        "ciLow": 0.458,
        "ciHigh": 0.607
      },
      {
        "key": "Family_Income",
        "label": "Family income",
        "coefficient": 0.532,
        "ciLow": 0.461,
        "ciHigh": 0.588
      },
      {
        "key": "Motivation_Level",
        "label": "Motivation level",
        "coefficient": 0.529,
        "ciLow": 0.469,
        "ciHigh": 0.583
      },
      {
        "key": "Peer_Influence",
        "label": "Peer influence",
        "coefficient": 0.514,
        "ciLow": 0.462,
        "ciHigh": 0.577
      },
      {
        "key": "Tutoring_Sessions",
        "label": "Tutoring sessions",
        "coefficient": 0.497,
        "ciLow": 0.46,
        "ciHigh": 0.529
      },
      {
        "key": "Parental_Education_Level",
        "label": "Parental education",
        "coefficient": 0.488,
        "ciLow": 0.444,
        "ciHigh": 0.542
      },
      {
        "key": "Distance_from_Home",
        "label": "Distance from home",
        "coefficient": -0.472,
        "ciLow": -0.538,
        "ciHigh": -0.408
      },
      {
        "key": "Hours_Studied",
        "label": "Hours studied",
        "coefficient": 0.295,
        "ciLow": 0.286,
        "ciHigh": 0.303
      },
      {
        "key": "Attendance",
        "label": "Attendance",
        "coefficient": 0.199,
        "ciLow": 0.195,
        "ciHigh": 0.203
      },
      {
        "key": "Physical_Activity",
        "label": "Physical activity",
        "coefficient": 0.188,
        "ciLow": 0.144,
        "ciHigh": 0.236
      },
      {
        "key": "Previous_Scores",
        "label": "Previous score",
        "coefficient": 0.049,
        "ciLow": 0.046,
        "ciHigh": 0.053
      },
      {
        "key": "Gender",
        "label": "Gender",
        "coefficient": -0.041,
        "ciLow": -0.133,
        "ciHigh": 0.056
      },
      {
        "key": "School_Type",
        "label": "School type",
        "coefficient": -0.033,
        "ciLow": -0.117,
        "ciHigh": 0.07
      },
      {
        "key": "Sleep_Hours",
        "label": "Sleep hours",
        "coefficient": -0.001,
        "ciLow": -0.032,
        "ciHigh": 0.026
      }
    ]
  },
  "maps": {
    "Parental_Involvement": {
      "Low": 0,
      "Medium": 1,
      "High": 2
    },
    "Access_to_Resources": {
      "Low": 0,
      "Medium": 1,
      "High": 2
    },
    "Motivation_Level": {
      "Low": 0,
      "Medium": 1,
      "High": 2
    },
    "Family_Income": {
      "Low": 0,
      "Medium": 1,
      "High": 2
    },
    "Teacher_Quality": {
      "Low": 0,
      "Medium": 1,
      "High": 2
    },
    "Parental_Education_Level": {
      "High School": 0,
      "College": 1,
      "Postgraduate": 2
    },
    "Distance_from_Home": {
      "Near": 0,
      "Moderate": 1,
      "Far": 2
    },
    "Peer_Influence": {
      "Negative": 0,
      "Neutral": 1,
      "Positive": 2
    },
    "Extracurricular_Activities": {
      "No": 0,
      "Yes": 1
    },
    "Internet_Access": {
      "No": 0,
      "Yes": 1
    },
    "Learning_Disabilities": {
      "No": 0,
      "Yes": 1
    },
    "School_Type": {
      "Public": 0,
      "Private": 1
    },
    "Gender": {
      "Female": 0,
      "Male": 1
    }
  },
  "reverseMaps": {
    "Parental_Involvement": {
      "0": "Low",
      "1": "Medium",
      "2": "High"
    },
    "Access_to_Resources": {
      "0": "Low",
      "1": "Medium",
      "2": "High"
    },
    "Motivation_Level": {
      "0": "Low",
      "1": "Medium",
      "2": "High"
    },
    "Family_Income": {
      "0": "Low",
      "1": "Medium",
      "2": "High"
    },
    "Teacher_Quality": {
      "0": "Low",
      "1": "Medium",
      "2": "High"
    },
    "Parental_Education_Level": {
      "0": "High School",
      "1": "College",
      "2": "Postgraduate"
    },
    "Distance_from_Home": {
      "0": "Near",
      "1": "Moderate",
      "2": "Far"
    },
    "Peer_Influence": {
      "0": "Negative",
      "1": "Neutral",
      "2": "Positive"
    },
    "Extracurricular_Activities": {
      "0": "No",
      "1": "Yes"
    },
    "Internet_Access": {
      "0": "No",
      "1": "Yes"
    },
    "Learning_Disabilities": {
      "0": "No",
      "1": "Yes"
    },
    "School_Type": {
      "0": "Public",
      "1": "Private"
    },
    "Gender": {
      "0": "Female",
      "1": "Male"
    }
  },
  "labels": {
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
    "Exam_Score": "Exam score"
  },
  "presets": [
    {
      "id": "attendance-recovery",
      "label": "Attendance recovery",
      "description": "Raise attendance and sleep slightly to stabilize the student.",
      "changes": {
        "Attendance": 6,
        "Sleep_Hours": 1
      }
    },
    {
      "id": "tutoring-boost",
      "label": "Tutoring boost",
      "description": "Add tutoring and improve access to resources.",
      "changes": {
        "Tutoring_Sessions": 2,
        "Access_to_Resources": 1
      }
    },
    {
      "id": "study-plan",
      "label": "Study plan",
      "description": "Increase study time, motivation, and extracurricular balance.",
      "changes": {
        "Hours_Studied": 4,
        "Motivation_Level": 1,
        "Extracurricular_Activities": 1
      }
    }
  ]
};
