import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function StudentAssignmentList() {

  const navigate = useNavigate();

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch all assignments
  const getAssignments = async () => {
    try {
      setLoading(true);

      const res = await api.get("/assignment/all");

      setAssignments(res.data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getAssignments();
  }, []);


  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Available Assignments
      </h2>


      {loading ? (

        <p className="text-gray-500">
          Loading assignments...
        </p>


      ) : assignments.length === 0 ? (

        <p className="text-gray-500">
          No assignments available.
        </p>


      ) : (

        <div className="space-y-5">

          {assignments.map((assignment) => (

            <div
              key={assignment._id}
              className="border rounded-xl p-5 hover:bg-gray-50 transition"
            >

              <div className="flex justify-between items-start">


                <div>

                  <h3 className="text-xl font-bold">
                    {assignment.title}
                  </h3>


                  <p className="text-gray-600 mt-2">
                    <strong>Subject:</strong>{" "}
                    {assignment.subject}
                  </p>


                  <p className="text-gray-600">
                    <strong>Teacher:</strong>{" "}
                    {assignment.teacher?.name}
                  </p>


                  <p className="text-gray-600">
                    <strong>Questions:</strong>{" "}
                    {assignment.questions.length}
                  </p>


                  <p className="text-gray-600">
                    <strong>Deadline:</strong>{" "}
                    {new Date(
                      assignment.deadline
                    ).toLocaleDateString()}
                  </p>


                </div>



                <button
                  onClick={() =>
                    navigate(
                      `/assignment/${assignment._id}`
                    )
                  }
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Start Assignment
                </button>


              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}


export default StudentAssignmentList;