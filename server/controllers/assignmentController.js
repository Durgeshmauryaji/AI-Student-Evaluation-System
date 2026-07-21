import Assignment from "../models/Assignment.js";

// ==========================
// Create Assignment
// ==========================
export const createAssignment = async (req, res) => {
  try {
    // Only Teacher can create assignment
    if (req.user.role !== "teacher") {
      return res.status(403).json({
        message: "Only teachers can create assignments",
      });
    }

    // console.log("================================");
    // console.log("Create Assignment");
    // console.log("Logged User ID:", req.user._id);
    // console.log("Role:", req.user.role);
    // console.log("================================");

    const {
      title,
      subject,
      questions,
      deadline,
    } = req.body;

    const assignment = await Assignment.create({
      title,
      subject,
      questions,
      deadline,
      teacher: req.user._id,
    });

    res.status(201).json(assignment);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================
// Get Logged-in Teacher Assignments
// ==========================
export const getMyAssignments = async (req, res) => {
  try {

    // console.log("================================");
    // console.log("My Assignments");
    // console.log("Logged Teacher ID:", req.user._id);
    // console.log("Role:", req.user.role);
    // console.log("================================");

    const assignments = await Assignment.find({
      teacher: req.user._id,
    }).sort({
      createdAt: -1,
    });

    // console.log(assignments);

    res.status(200).json(assignments);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================
// Get All Assignments (Student)
// ==========================
export const getAllAssignments = async (req, res) => {
  try {

    const assignments = await Assignment.find()
      .populate("teacher", "name email")
      .sort({
        createdAt: -1,
      });

    res.status(200).json(assignments);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================
// Get Assignment By ID
// ==========================
export const getAssignmentById = async (req, res) => {
  try {

    const assignment = await Assignment.findById(req.params.id)
      .populate("teacher", "name email");

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    res.status(200).json(assignment);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================
// Update Assignment
// ==========================
export const updateAssignment = async (req, res) => {
  try {

    const assignment = await Assignment.findById(req.params.id);

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    if (
      assignment.teacher.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    assignment.title =
      req.body.title ?? assignment.title;

    assignment.subject =
      req.body.subject ?? assignment.subject;

    assignment.questions =
      req.body.questions ?? assignment.questions;

    assignment.deadline =
      req.body.deadline ?? assignment.deadline;

    const updatedAssignment =
      await assignment.save();

    res.status(200).json(updatedAssignment);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================
// Delete Assignment
// ==========================
export const deleteAssignment = async (req, res) => {
  try {

    const assignment = await Assignment.findById(req.params.id);

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    if (
      assignment.teacher.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await assignment.deleteOne();

    res.status(200).json({
      message: "Assignment deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};