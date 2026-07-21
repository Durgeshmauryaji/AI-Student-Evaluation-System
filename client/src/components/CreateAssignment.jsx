import { useState } from "react";
import Button from "./Button";
import api from "../services/api";

function CreateAssignment() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    deadline: "",
    questions: [
      {
        questionNumber: 1,
        text: "",
      },
    ],
  });

  // Handle Title, Subject, Deadline
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Question Change
  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].text = value;

    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  // Add Question
  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          questionNumber: formData.questions.length + 1,
          text: "",
        },
      ],
    });
  };

  // Remove Question
  const removeQuestion = (index) => {
    if (formData.questions.length === 1) return;

    const updatedQuestions = formData.questions.filter(
      (_, i) => i !== index
    );

    const renumberedQuestions = updatedQuestions.map((q, i) => ({
      ...q,
      questionNumber: i + 1,
    }));

    setFormData({
      ...formData,
      questions: renumberedQuestions,
    });
  };

  // Submit Assignment
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/assignment/create", formData);

      alert("Assignment Created Successfully");

      // Reset Form
      setFormData({
        title: "",
        subject: "",
        deadline: "",
        questions: [
          {
            questionNumber: 1,
            text: "",
          },
        ],
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to create assignment"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Create Assignment
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Assignment Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        {/* Subject */}
        <input
          className="w-full border p-3 rounded-lg mb-6"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* Questions */}
        {formData.questions.map((question, index) => (
          <div key={index} className="mb-5">
            <label className="font-semibold">
              Question {question.questionNumber}
            </label>

            <textarea
              className="w-full border p-3 rounded-lg mt-2"
              rows="3"
              placeholder={`Enter Question ${question.questionNumber}`}
              value={question.text}
              onChange={(e) =>
                handleQuestionChange(index, e.target.value)
              }
            />

            {formData.questions.length > 1 && (
              <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="text-red-500 mt-2 hover:underline"
              >
                Remove Question
              </button>
            )}
          </div>
        ))}

        {/* Add Question */}
        <button
          type="button"
          onClick={addQuestion}
          className="mb-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          + Add Question
        </button>

        {/* Deadline */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Deadline
          </label>

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">
          {loading ? "Creating..." : "Create Assignment"}
        </Button>
      </form>
    </div>
  );
}

export default CreateAssignment;