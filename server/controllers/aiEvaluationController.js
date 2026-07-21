import Submission from "../models/Submission.js";
import Assignment from "../models/Assignment.js";
import { evaluateWithGemini } from "../services/geminiService.js";

// ======================================
// Evaluate Complete Submission
// ======================================
export const evaluateSubmission = async (req, res) => {
  try {
    const { submissionId } = req.body;

    // Find Submission
    const submission = await Submission.findById(submissionId);

    if (!submission) {
      return res.status(404).json({
        message: "Submission not found",
      });
    }

    // Prevent Duplicate Evaluation
    if (submission.evaluated) {
      return res.status(400).json({
        message: "Submission already evaluated",
      });
    }

    // Find Assignment
    const assignment = await Assignment.findById(
      submission.assignment
    );

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    let totalScore = 0;
    const feedbacks = [];

    // Evaluate Each Answer
    for (const item of submission.answers) {
      const question = assignment.questions.find(
        (q) => q._id.toString() === item.questionId.toString()
      );

      if (!question) continue;

      const result = await evaluateWithGemini(
        assignment.subject,
        question.text,
        item.answer
      );

      totalScore += result.score;

      feedbacks.push({
        question: question.text,
        score: result.score,
        feedback: result.feedback,
        strengths: result.strengths,
        weaknesses: result.weaknesses,
        suggestions: result.suggestions,
      });
    }

    // Calculate Overall Score
    const finalScore =
      feedbacks.length > 0
        ? totalScore / feedbacks.length
        : 0;

    // Save Evaluation
    submission.score = Number(finalScore.toFixed(2));
    submission.feedback = feedbacks;
    submission.evaluated = true;

    await submission.save();

    res.status(200).json({
      message: "AI Evaluation Completed",
      score: submission.score,
      feedback: submission.feedback,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};