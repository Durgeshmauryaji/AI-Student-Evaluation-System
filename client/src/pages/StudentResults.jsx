import { useEffect, useState } from "react";
import api from "../services/api";

function StudentResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Get Student Results
  // ==========================
  const getResults = async () => {
    try {
      setLoading(true);

      const res = await api.get("/submission/my-results");

      setResults(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">
            My AI Evaluation Results 🎓
          </h1>

          {loading ? (
            <p className="text-gray-500">
              Loading Results...
            </p>
          ) : results.length === 0 ? (
            <p className="text-gray-500">
              No results available.
            </p>
          ) : (
            <div className="space-y-8">
              {results.map((result) => {
                // feedback is already an array
                const feedback = result.feedback || [];

                return (
                  <div
                    key={result._id}
                    className="border rounded-xl p-6 shadow-sm"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl font-bold">
                          {result.assignment?.title}
                        </h2>

                        <p className="text-gray-500">
                          {result.assignment?.subject}
                        </p>
                      </div>

                      <div className="bg-blue-100 px-5 py-3 rounded-xl text-center">
                        <p className="font-bold text-blue-700">
                          Score
                        </p>

                        <p className="text-2xl font-bold">
                          {result.score ?? "-"}
                          /10
                        </p>
                      </div>
                    </div>

                    <hr className="my-6" />

                    {!result.evaluated ? (
                      <div className="bg-yellow-100 p-5 rounded-xl">
                        <p className="font-semibold text-yellow-700">
                          ⏳ This assignment has not been evaluated yet.
                        </p>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold mb-4">
                          Question Wise Evaluation
                        </h3>

                        {feedback.length === 0 ? (
                          <p className="text-gray-500">
                            No feedback available.
                          </p>
                        ) : (
                          feedback.map((item, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 rounded-xl p-5 mb-5"
                            >
                              <h4 className="font-bold text-lg">
                                Question {index + 1}
                              </h4>

                              <p className="mt-2 font-medium">
                                {item.question}
                              </p>

                              <p className="mt-3 font-semibold">
                                Score :
                                <span className="ml-2 text-blue-600">
                                  {item.score}/10
                                </span>
                              </p>

                              <div className="mt-5">
                                <h5 className="font-bold">
                                  AI Feedback
                                </h5>

                                <p className="text-gray-700 mt-1">
                                  {item.feedback}
                                </p>
                              </div>

                              <div className="mt-5">
                                <h5 className="font-bold text-green-700">
                                  ✅ Strengths
                                </h5>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                  {item.strengths?.map((strength, i) => (
                                    <li key={i}>
                                      {strength}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mt-5">
                                <h5 className="font-bold text-red-700">
                                  ⚠️ Weaknesses
                                </h5>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                  {item.weaknesses?.map((weakness, i) => (
                                    <li key={i}>
                                      {weakness}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mt-5">
                                <h5 className="font-bold text-blue-700">
                                  💡 Suggestions
                                </h5>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                  {item.suggestions?.map((suggestion, i) => (
                                    <li key={i}>
                                      {suggestion}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentResults;