function Contact() {


  return (

    <div className="min-h-screen bg-slate-100 py-12">


      <div className="max-w-6xl mx-auto px-6">



        {/* Heading */}

        <div className="text-center mb-12">


          <h1 className="text-4xl font-bold text-slate-900">

            Contact Us 📩

          </h1>


          <p className="text-gray-600 mt-4 text-lg">

            Have questions or suggestions?
            Feel free to connect with us.

          </p>


        </div>







        <div className="grid md:grid-cols-2 gap-8">





          {/* Contact Information */}

          <div className="bg-white rounded-xl shadow-lg p-8">


            <h2 className="text-2xl font-bold mb-6">

              Get In Touch 🤝

            </h2>



            <div className="space-y-5 text-gray-600">


              <div>

                <h3 className="font-semibold text-slate-900">

                  👨‍💻 Developer

                </h3>

                <p>
                  Durgesh Kumar
                </p>

              </div>




              <div>

                <h3 className="font-semibold text-slate-900">

                  📧 Email

                </h3>

                <p>

                  dkmaurya3241@gmail.com

                </p>

              </div>





              <div>

                <h3 className="font-semibold text-slate-900">

                  🚀 Project

                </h3>

                <p>

                  AI Student Evaluation System

                </p>

              </div>





              <div>

                <h3 className="font-semibold text-slate-900">

                  🛠 Technologies

                </h3>

                <p>

                  MERN Stack + Gemini AI

                </p>

              </div>



            </div>



          </div>









          {/* Contact Form */}

          <div className="bg-white rounded-xl shadow-lg p-8">


            <h2 className="text-2xl font-bold mb-6">

              Send Message ✉️

            </h2>




            <form className="space-y-5">


              <input

                type="text"

                placeholder="Your Name"

                className="
                w-full
                border
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />





              <input

                type="email"

                placeholder="Your Email"

                className="
                w-full
                border
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />







              <textarea

                rows="5"

                placeholder="Your Message"

                className="
                w-full
                border
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              ></textarea>







              <button

                type="button"

                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-lg
                hover:bg-blue-700
                transition
                "

              >

                Send Message

              </button>




            </form>



          </div>






        </div>







        {/* Bottom CTA */}

        <div className="mt-12 bg-slate-900 text-white rounded-xl p-10 text-center">


          <h2 className="text-3xl font-bold">

            Building Smarter Education With AI 🤖

          </h2>


          <p className="text-gray-300 mt-4">

            This project aims to make assignment evaluation
            faster, smarter and more helpful for both teachers
            and students.

          </p>


        </div>





      </div>


    </div>

  );

}


export default Contact;