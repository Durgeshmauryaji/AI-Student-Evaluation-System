function Features() {

  const features = [
    {
      icon: "🤖",
      title: "AI Based Evaluation",
      description:
        "Automatically evaluate student answers using Artificial Intelligence and generate accurate scores."
    },

    {
      icon: "📊",
      title: "Smart Scoring System",
      description:
        "AI analyzes answers and provides marks based on correctness, relevance and quality."
    },

    {
      icon: "📝",
      title: "Detailed Feedback",
      description:
        "Students receive detailed feedback including strengths, weaknesses and improvement suggestions."
    },

    {
      icon: "👨‍🏫",
      title: "Teacher Dashboard",
      description:
        "Teachers can create assignments, view submissions and manage student evaluations easily."
    },

    {
      icon: "🎓",
      title: "Student Performance Tracking",
      description:
        "Students can view their evaluation history, scores and AI generated feedback."
    },

    {
      icon: "⚡",
      title: "Fast Evaluation",
      description:
        "Reduce manual checking time and evaluate multiple submissions quickly."
    }

  ];



  return (

    <div className="min-h-screen bg-slate-100 py-12">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">


          <h1 className="text-4xl font-bold text-slate-900">

            Powerful Features 🚀

          </h1>


          <p className="text-gray-600 mt-4 text-lg">

            Explore how AI makes student evaluation smarter,
            faster and more efficient.

          </p>


        </div>





        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-8">


          {
            features.map((feature,index)=>(


              <div

                key={index}

                className="
                bg-white
                rounded-xl
                shadow-lg
                p-8
                hover:shadow-xl
                transition
                "

              >


                <div className="text-4xl mb-4">

                  {feature.icon}

                </div>



                <h2 className="text-xl font-bold mb-3">

                  {feature.title}

                </h2>



                <p className="text-gray-600 leading-6">

                  {feature.description}

                </p>


              </div>


            ))
          }



        </div>




        {/* Bottom Section */}

        <div className="mt-16 bg-slate-900 text-white rounded-xl p-10 text-center">


          <h2 className="text-3xl font-bold">

            Transform Traditional Evaluation With AI 🤖

          </h2>


          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">

            Our platform combines Artificial Intelligence,
            automation and modern web technologies to create
            an efficient evaluation system for teachers and students.

          </p>


        </div>



      </div>


    </div>

  );

}


export default Features;