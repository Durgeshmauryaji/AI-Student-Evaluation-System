import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    // Student who submitted
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Assignment
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },

    // Student Answers
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },

        answer: {
          type: String,
          required: true,
        },
      },
    ],

    // AI Overall Score
    score: {
      type: Number,
      default: null,
    },

    // AI Feedback (Question-wise)
    feedback: [
      {
        question: {
          type: String,
        },

        score: {
          type: Number,
        },

        feedback: {
          type: String,
        },

        strengths: [
          {
            type: String,
          },
        ],

        weaknesses: [
          {
            type: String,
          },
        ],

        suggestions: [
          {
            type: String,
          },
        ],
      },
    ],

    // Evaluation Status
    evaluated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Submission = mongoose.model(
  "Submission",
  submissionSchema
);

export default Submission;