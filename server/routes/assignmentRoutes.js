import express from "express";

import {
  createAssignment,
  getMyAssignments,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================
// Create Assignment
// ==========================
router.post(
  "/create",
  protect,
  createAssignment
);

// ==========================
// Get Logged-in Teacher Assignments
// ==========================
router.get(
  "/my",
  protect,
  getMyAssignments
);

// ==========================
// Get All Assignments (Student)
// ==========================
router.get(
  "/all",
  protect,
  getAllAssignments
);

// ==========================
// Get Assignment By ID
// ==========================
router.get(
  "/:id",
  protect,
  getAssignmentById
);

// ==========================
// Update Assignment
// ==========================
router.put(
  "/:id",
  protect,
  updateAssignment
);

// ==========================
// Delete Assignment
// ==========================
router.delete(
  "/:id",
  protect,
  deleteAssignment
);

export default router;