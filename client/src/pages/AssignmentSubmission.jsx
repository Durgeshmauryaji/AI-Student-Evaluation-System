import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function AssignmentSubmission() {

  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);

  const [answers, setAnswers] = useState({});


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

  }, []);



  // Store answers
  const handleAnswerChange = (questionId, value) => {

    setAnswers({

      ...answers,

      [questionId]: value,

    });

  };



  // Submit Assignment
  const handleSubmit = async () => {

    try {


      const formattedAnswers =
        Object.keys(answers).map((questionId) => ({

          questionId,

          answer: answers[questionId],

        }));


      const res = await api.post(
        "/submission/create",
        {
          assignmentId: id,
          answers: formattedAnswers,
        }
      );


      // console.log(res.data);


      alert(
        "Assignment Submitted Successfully"
      );


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

      <div className="min-h-screen flex justify-center items-center">

        Loading Assignment...

      </div>

    );

  }



  if (!assignment) {

    return (

      <div className="min-h-screen flex justify-center items-center">

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

          Subject : {assignment.subject}

        </p>


        <p className="text-gray-500">

          Teacher : {assignment.teacher?.name}

        </p>


        <p className="text-gray-500 mb-8">

          Deadline :{" "}

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

              value={
                answers[question._id] || ""
              }

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

          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"

        >

          Submit Assignment

        </button>


      </div>

    </div>

  );

}


export default AssignmentSubmission;