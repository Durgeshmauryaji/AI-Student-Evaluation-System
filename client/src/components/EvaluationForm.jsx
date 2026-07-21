import { useState } from "react";
import Button from "./Button";
import api from "../services/api";

function EvaluationForm({ setResult, setRefreshHistory }) {
  const [formData, setFormData] = useState({
    subject: "",
    question: "",
    answer: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/evaluation", formData);

      // Update Result Card
      setResult(res.data);

      // Refresh History
      setRefreshHistory((prev) => !prev);

      // Clear Form
      setFormData({
        subject: "",
        question: "",
        answer: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Evaluation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Evaluate Student Answer
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Question"
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Student Answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Evaluating..." : "Evaluate Answer"}
        </Button>
      </form>
    </div>
  );
}

export default EvaluationForm;