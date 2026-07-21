import { useEffect, useState } from "react";
import api from "../services/api";

function History({ refreshHistory, setSelectedEvaluation }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHistory = async () => {
    try {
      setLoading(true);

      const res = await api.get("/evaluation/history");

      setHistory(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistory();
  }, [refreshHistory]);


  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Evaluation History
      </h2>


      {loading ? (

        <p className="text-gray-500">
          Loading...
        </p>

      ) : history.length === 0 ? (

        <p className="text-gray-500">
          No evaluations found.
        </p>

      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <div
              key={item._id}
              
              onClick={() => setSelectedEvaluation(item)}

              className="
                border 
                rounded-lg 
                p-4 
                flex 
                justify-between 
                items-center 
                hover:bg-blue-50 
                cursor-pointer 
                transition
              "
            >

              <div>

                <h3 className="font-bold text-lg">
                  {item.subject}
                </h3>


                <p className="text-gray-500 text-sm line-clamp-1">
                  {item.question}
                </p>


                <p className="text-blue-600 text-sm mt-2">
                  View Details →
                </p>

              </div>



              <div className="text-right">

                <p className="text-green-600 text-xl font-bold">
                  {item.score}/10
                </p>


                <p className="text-xs text-gray-400">
                  {new Date(item.createdAt)
                    .toLocaleDateString()}
                </p>

              </div>


            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default History;