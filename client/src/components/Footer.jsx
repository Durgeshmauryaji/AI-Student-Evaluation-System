import { Link } from "react-router-dom";


function Footer() {

  return (

    <footer className="bg-slate-900 text-white mt-16">


      <div className="max-w-7xl mx-auto px-6 py-10">


        <div className="grid md:grid-cols-3 gap-8">



          {/* Project Info */}

          <div>


            <h2 className="text-2xl font-bold mb-3">

              AI Student Evaluation System 🤖

            </h2>


            <p className="text-gray-400">

              An AI powered platform to evaluate student
              assignments automatically and provide smart
              feedback using Artificial Intelligence.

            </p>


          </div>






          {/* Quick Links */}

          <div>


            <h3 className="text-xl font-semibold mb-3">

              Quick Links

            </h3>



            <ul className="space-y-2">


              <li>

                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>

              </li>




              <li>

                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>

              </li>




              <li>

                <Link
                  to="/features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </Link>

              </li>




              <li>

                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>

              </li>


            </ul>


          </div>








          {/* Technology */}

          <div>


            <h3 className="text-xl font-semibold mb-3">

              Built With

            </h3>



            <ul className="space-y-2 text-gray-400">


              <li>
                React.js + Tailwind CSS
              </li>


              <li>
                Node.js + Express.js
              </li>


              <li>
                MongoDB
              </li>


              <li>
                Gemini AI
              </li>


            </ul>


          </div>



        </div>





        <hr className="border-gray-700 my-8" />





        <div className="text-center text-gray-400">


          <p>

            © {new Date().getFullYear()} AI Student Evaluation System.
            All Rights Reserved.

          </p>


          <p className="mt-2">

            Developed with ❤️ by Durgesh Kumar

          </p>


        </div>



      </div>


    </footer>

  );

}


export default Footer;