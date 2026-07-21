import { useEffect, useState } from "react";
import api from "../services/api";

function TeacherSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Get Teacher Submissions
  // ==========================
  const getSubmissions = async () => {
    try {
      setLoading(true);

      const res = await api.get("/submission/teacher");

      setSubmissions(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  // ==========================
  // Evaluate Submission
  // ==========================
  const handleEvaluate = async (submissionId) => {
    try {
      const res = await api.post("/ai-evaluation/evaluate", {
        submissionId,
      });

      alert(res.data.message);

      // Refresh submissions
      getSubmissions();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "AI Evaluation Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold mb-8">
            Student Submissions 👨‍🎓
          </h1>

          {loading ? (
            <p className="text-gray-500">
              Loading submissions...
            </p>
          ) : submissions.length === 0 ? (
            <p className="text-gray-500">
              No submissions found.
            </p>
          ) : (
            <div className="space-y-6">
              {submissions.map((submission) => (
                <div
                  key={submission._id}
                  className="border rounded-xl p-6 shadow-sm"
                >
                  {/* Student */}
                  <h2 className="text-xl font-bold">
                    Student : {submission.student?.name}
                  </h2>

                  <p className="text-gray-500">
                    Email : {submission.student?.email}
                  </p>

                  <hr className="my-4" />

                  {/* Assignment */}
                  <h3 className="text-lg font-bold">
                    Assignment :{" "}
                    {submission.assignment?.title}
                  </h3>

                  <p className="text-gray-600">
                    Subject :{" "}
                    {submission.assignment?.subject}
                  </p>

                  {/* Answers */}
                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-3">
                      Submitted Answers
                    </h3>

                    {submission.answers?.map(
                      (answer, index) => (
                        <div
                          key={answer._id}
                          className="bg-gray-100 rounded-lg p-4 mb-3"
                        >
                          <p className="font-semibold">
                            Question {index + 1}
                          </p>

                          <p className="text-gray-700 mt-2">
                            {answer.answer}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* AI Status */}
                  <div className="mt-6">
                    {submission.evaluated ? (
                      <div className="bg-green-100 rounded-lg p-5">
                        <p className="text-green-700 font-bold">
                          ✅ AI Evaluation Completed
                        </p>

                        <p className="mt-2 font-semibold">
                          Overall Score :
                          <span className="text-blue-600">
                            {" "}
                            {submission.score}/10
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div className="bg-yellow-100 rounded-lg p-5">
                        <p className="font-bold text-yellow-700">
                          ⏳ Waiting for AI Evaluation
                        </p>

                        <button
                          onClick={() =>
                            handleEvaluate(
                              submission._id
                            )
                          }
                          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                        >
                          Evaluate with AI
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default TeacherSubmissions;