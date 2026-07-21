import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function StudentAssignments() {


  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();



  const getAssignments = async () => {

    try {

      setLoading(true);

      const res = await api.get(
        "/assignment/all"
      );

      setAssignments(res.data);


    } catch(error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };



  useEffect(()=>{

    getAssignments();

  },[]);




  return (

    <div className="min-h-screen bg-slate-100 py-10">


      <div className="max-w-6xl mx-auto px-6">


        <div className="bg-white rounded-xl shadow-lg p-8">


          <h1 className="text-3xl font-bold mb-8">

            Available Assignments 📚

          </h1>



          {
            loading ? (

              <p>
                Loading assignments...
              </p>


            ) : assignments.length === 0 ? (

              <p className="text-gray-500">

                No assignments available.

              </p>


            ) : (


              <div className="grid md:grid-cols-2 gap-6">


                {
                  assignments.map((assignment)=>(


                    <div

                      key={assignment._id}

                      className="border rounded-xl p-6 shadow-sm"

                    >


                      <h2 className="text-xl font-bold">

                        {assignment.title}

                      </h2>



                      <p className="text-gray-600 mt-2">

                        Subject:
                        {" "}
                        {assignment.subject}

                      </p>



                      <p className="text-gray-600">

                        Teacher:
                        {" "}
                        {assignment.teacher?.name}

                      </p>



                      <p className="text-gray-600">

                        Questions:
                        {" "}
                        {assignment.questions.length}

                      </p>



                      <p className="text-gray-600">

                        Deadline:
                        {" "}
                        {
                          new Date(
                            assignment.deadline
                          ).toLocaleDateString()
                        }

                      </p>



                      <button

                        onClick={()=> 
                          navigate(
                            `/assignment/${assignment._id}`
                          )
                        }

                        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"

                      >

                        View Assignment

                      </button>



                    </div>


                  ))

                }


              </div>


            )

          }



        </div>


      </div>


    </div>

  );

}


export default StudentAssignments;