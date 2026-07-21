import express from "express";
import {
  evaluateSubmission,
} from "../controllers/aiEvaluationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================
// Evaluate Complete Submission
// ==========================
router.post(
  "/evaluate",
  protect,
  evaluateSubmission
);

export default router;