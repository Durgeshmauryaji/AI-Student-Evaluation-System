import express from "express";

import {
  createSubmission,
  getMyResults,
  getTeacherSubmissions,
  getTeacherSubmissionOverview,
} from "../controllers/submissionController.js";

import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();



// ==========================
// Create Submission
// ==========================
router.post(
  "/create",
  protect,
  createSubmission
);



// ==========================
// Student Results
// ==========================
router.get(
  "/my-results",
  protect,
  getMyResults
);



// ==========================
// Teacher Submissions
// ==========================
router.get(
  "/teacher",
  protect,
  getTeacherSubmissions
);



// ==========================
// Teacher Submission Overview
// ==========================
router.get(
  "/teacher-overview",
  protect,
  getTeacherSubmissionOverview
);



export default router;