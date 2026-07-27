import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function AssignmentSubmission() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});

  // ==========================
  // Get Assignment
  // ==========================
  const getAssignment = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/assignment/${id}`);

      setAssignment(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAssignment();
  }, [id]);

  // ==========================
  // Store Answers
  // ==========================
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // ==========================
  // Submit Assignment
  // ==========================
  const handleSubmit = async () => {
    try {
      // Check all questions answered
      const unanswered = assignment.questions.some(
        (q) => !answers[q._id]?.trim()
      );

      if (unanswered) {
        return alert("Please answer all questions before submitting.");
      }

      const formattedAnswers = assignment.questions.map((q) => ({
        questionId: q._id,
        answer: answers[q._id],
      }));

      await api.post("/submission/create", {
        assignmentId: id,
        answers: formattedAnswers,
      });

      alert("Assignment Submitted Successfully!");

      // Redirect to Student Dashboard
      navigate("/student-dashboard");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Submission Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading Assignment...
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Assignment Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold">
          {assignment.title}
        </h1>

        <p className="text-gray-500 mt-2">
          <strong>Subject:</strong> {assignment.subject}
        </p>

        <p className="text-gray-500">
          <strong>Teacher:</strong>{" "}
          {assignment.teacher?.name}
        </p>

        <p className="text-gray-500 mb-8">
          <strong>Deadline:</strong>{" "}
          {new Date(
            assignment.deadline
          ).toLocaleDateString()}
        </p>

        <hr className="mb-8" />

        {assignment.questions.map((question) => (
          <div
            key={question._id}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-3">
              Question {question.questionNumber}
            </h2>

            <p className="mb-4">
              {question.text}
            </p>

            <textarea
              rows="6"
              placeholder="Write your answer here..."
              value={answers[question._id] || ""}
              onChange={(e) =>
                handleAnswerChange(
                  question._id,
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Assignment
        </button>
      </div>
    </div>
  );
}

export default AssignmentSubmission;
