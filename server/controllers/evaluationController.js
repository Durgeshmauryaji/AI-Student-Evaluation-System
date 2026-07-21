import Evaluation from "../models/Evaluation.js";
import { evaluateWithGemini } from "../services/geminiService.js";

// ===============================
// Create Evaluation
// ===============================
export const evaluateAnswer = async (req, res) => {
  try {
    const { subject, question, answer } = req.body;

    let result;

    try {
      // Evaluate using Gemini AI
      result = await evaluateWithGemini(
        subject,
        question,
        answer
      );
    } catch (aiError) {
      console.error("Gemini Error:", aiError.message);

      // Fallback Response (if Gemini fails)
      result = {
        score: 8,
        feedback:
          "AI service is currently unavailable. Showing default evaluation.",
        strengths: [
          "Clear explanation",
          "Correct concepts",
        ],
        weaknesses: [
          "Examples are missing",
        ],
        suggestions: [
          "Add one real-world example.",
          "Improve the conclusion.",
        ],
      };
    }

    const evaluation = await Evaluation.create({
      user: req.user._id,

      subject,
      question,
      answer,

      score: result.score,
      feedback: result.feedback,
      strengths: result.strengths,
      weaknesses: result.weaknesses,
      suggestions: result.suggestions,
    });

    res.status(201).json(evaluation);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Get Logged-in User History
// ===============================
export const getEvaluationHistory = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};