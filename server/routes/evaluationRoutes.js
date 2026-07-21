import express from "express";

import {
  evaluateAnswer,
  getEvaluationHistory
} from "../controllers/evaluationController.js";

import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();



router.post(
  "/evaluate",
  protect,
  evaluateAnswer
);



router.get(
  "/history",
  protect,
  getEvaluationHistory
);



export default router;