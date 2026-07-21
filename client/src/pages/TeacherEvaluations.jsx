import { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import api from "../services/api";

function TeacherEvaluations() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvaluations = async () => {
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
    getEvaluations();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto py-10 px-6">

        <DashboardNavbar />

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h1 className="text-3xl font-bold">
            AI Evaluation Reports
          </h1>

          <p className="text-gray-500 mt-2">
            View AI generated evaluation reports for all student submissions.
          </p>
        </div>

        {loading ? (
          <div className="bg-white mt-8 rounded-xl shadow p-8 text-center">
            Loading evaluations...
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white mt-8 rounded-xl shadow p-8 text-center">
            No evaluations found.
          </div>
        ) : (
          submissions.map((submission) => (
            <div
              key={submission._id}
              className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >
              {/* Header */}

              <div className="flex justify-between items-center border-b pb-5">

                <div>
                  <h2 className="text-2xl font-bold">
                    {submission.assignment?.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Student :
                    {" "}
                    {submission.student?.name}
                  </p>

                  <p className="text-gray-500">
                    Subject :
                    {" "}
                    {submission.assignment?.subject}
                  </p>
                </div>

                <div className="text-right">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    Score : {submission.score}/10
                  </span>
                </div>

              </div>

              {/* Question-wise Feedback */}

              <div className="mt-8 space-y-8">

                {submission.feedback?.map((item, index) => (

                  <div
                    key={index}
                    className="border rounded-xl p-6"
                  >

                    <div className="flex justify-between">

                      <h3 className="text-xl font-bold">
                        Question {index + 1}
                      </h3>

                      <span className="font-semibold text-blue-600">
                        {item.score}/10
                      </span>

                    </div>

                    <p className="mt-4">
                      <strong>Question:</strong>
                      {" "}
                      {item.question}
                    </p>

                    <p className="mt-4 text-gray-700">
                      <strong>Feedback:</strong>
                      {" "}
                      {item.feedback}
                    </p>

                    {/* Strengths */}

                    <div className="mt-5">
                      <h4 className="font-bold text-green-600">
                        Strengths
                      </h4>

                      <ul className="list-disc ml-6 mt-2">

                        {item.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}

                      </ul>
                    </div>

                    {/* Weaknesses */}

                    <div className="mt-5">
                      <h4 className="font-bold text-red-600">
                        Weaknesses
                      </h4>

                      <ul className="list-disc ml-6 mt-2">

                        {item.weaknesses.map((weakness, i) => (
                          <li key={i}>{weakness}</li>
                        ))}

                      </ul>
                    </div>

                    {/* Suggestions */}

                    <div className="mt-5">
                      <h4 className="font-bold text-blue-600">
                        Suggestions
                      </h4>

                      <ul className="list-disc ml-6 mt-2">

                        {item.suggestions.map((suggestion, i) => (
                          <li key={i}>{suggestion}</li>
                        ))}

                      </ul>
                    </div>

                  </div>

                ))}

              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TeacherEvaluations;