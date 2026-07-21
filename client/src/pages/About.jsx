function About() {

  const technologies = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI"
  ];


  const steps = [
    {
      icon: "📝",
      title: "Create Assignment",
      desc: "Teachers can create assignments with multiple questions for students."
    },

    {
      icon: "📤",
      title: "Student Submission",
      desc: "Students submit their answers through an easy-to-use interface."
    },

    {
      icon: "🤖",
      title: "AI Evaluation",
      desc: "AI analyzes answers and generates scores with detailed feedback."
    },

    {
      icon: "📊",
      title: "Performance Analysis",
      desc: "Students and teachers can track evaluation results."
    }
  ];



  return (

    <div className="min-h-screen bg-slate-100 py-12">


      <div className="max-w-6xl mx-auto px-6">



        {/* Hero Section */}

        <div className="bg-white rounded-xl shadow-lg p-10 text-center">


          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">

            About AI Student Evaluation System 

          </h1>


          <p className="mt-5 text-gray-600 text-lg leading-8 max-w-4xl mx-auto">

            AI Student Evaluation System is an intelligent
            education platform that uses Artificial Intelligence
            to automate assignment evaluation and provide
            meaningful feedback to students.

          </p>


        </div>






        {/* Overview */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">


          <div className="bg-white rounded-xl shadow-lg p-8">


            <h2 className="text-2xl font-bold mb-4">

              🎯 Our Objective

            </h2>


            <p className="text-gray-600 leading-7">

              The main goal of this system is to reduce manual
              evaluation effort for teachers and provide students
              with quick, accurate and detailed feedback.

              AI helps analyze answers, calculate scores and
              suggest areas of improvement.

            </p>


          </div>





          <div className="bg-white rounded-xl shadow-lg p-8">


            <h2 className="text-2xl font-bold mb-4">

              💡 Why AI Evaluation?

            </h2>


            <ul className="space-y-3 text-gray-600">


              <li>
                ✅ Faster assignment checking
              </li>


              <li>
                ✅ Consistent evaluation
              </li>


              <li>
                ✅ Detailed student feedback
              </li>


              <li>
                ✅ Better learning improvement
              </li>


            </ul>


          </div>


        </div>







        {/* Working Process */}

        <div className="mt-12">


          <h2 className="text-3xl font-bold text-center mb-8">

            How It Works ⚡

          </h2>



          <div className="grid md:grid-cols-4 gap-6">


            {
              steps.map((step,index)=>(


                <div

                  key={index}

                  className="
                  bg-white
                  p-6
                  rounded-xl
                  shadow-lg
                  text-center
                  "

                >


                  <div className="text-4xl mb-4">

                    {step.icon}

                  </div>


                  <h3 className="font-bold text-lg">

                    {step.title}

                  </h3>


                  <p className="text-gray-600 mt-3 text-sm">

                    {step.desc}

                  </p>


                </div>


              ))
            }


          </div>


        </div>







        {/* Technology Stack */}

        <div className="mt-12 bg-slate-900 rounded-xl p-10 text-white">


          <h2 className="text-3xl font-bold text-center mb-8">

            Technology Stack 🚀

          </h2>



          <div className="flex flex-wrap justify-center gap-4">


            {
              technologies.map((tech,index)=>(


                <span

                  key={index}

                  className="
                  bg-slate-700
                  px-5
                  py-3
                  rounded-full
                  "

                >

                  {tech}

                </span>


              ))
            }


          </div>


        </div>





      </div>


    </div>

  );

}


export default About;