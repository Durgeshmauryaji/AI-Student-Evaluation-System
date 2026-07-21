function ResultCard({ result }) {

  if (!result) {

    return (

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-2xl font-bold mb-4">

          AI Evaluation

        </h2>

        <p className="text-gray-500">

          Submit an answer to view the evaluation.

        </p>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">

        Evaluation Result

      </h2>

      <h3 className="text-4xl font-bold text-green-600">

        {result.score}/10

      </h3>

      <p className="mt-6">

        <strong>Feedback :</strong>

      </p>

      <p className="text-gray-600">

        {result.feedback}

      </p>

      <div className="mt-6">

        <h3 className="font-bold">

          Strengths

        </h3>

        <ul className="list-disc ml-6">

          {

            result.strengths.map((item, index)=>(

              <li key={index}>{item}</li>

            ))

          }

        </ul>

      </div>

      <div className="mt-6">

        <h3 className="font-bold">

          Weaknesses

        </h3>

        <ul className="list-disc ml-6">

          {

            result.weaknesses.map((item,index)=>(

              <li key={index}>{item}</li>

            ))

          }

        </ul>

      </div>

      <div className="mt-6">

        <h3 className="font-bold">

          Suggestions

        </h3>

        <ul className="list-disc ml-6">

          {

            result.suggestions.map((item,index)=>(

              <li key={index}>{item}</li>

            ))

          }

        </ul>

      </div>

    </div>

  )

}

export default ResultCard