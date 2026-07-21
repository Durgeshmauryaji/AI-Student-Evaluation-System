import { Link } from "react-router-dom";
import Button from "../components/Button";
import Features from "../components/Features";

function Landing() {
  return (
    <>
      <section className="min-h-[90vh] flex items-center bg-slate-100">
        <div className="max-w-7xl mx-auto w-full px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                AI Student{" "}
                <span className="text-blue-600">Evaluation</span> System
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Evaluate student answers instantly using Artificial
                Intelligence and receive detailed feedback, strengths,
                weaknesses, and suggestions.
              </p>

              <div className="flex gap-4 mt-8">
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>

                <Link to="/login">
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    Login
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
             <div className="md:col-span-1 flex justify-center items-center">
              <img
                src="/ai-student.png"
                alt="AI Student Evaluation System"
                className="w-full max-w-none object-contain scale-115"
              />
            </div>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
}

export default Landing;