import DashboardNavbar from "../components/DashboardNavbar";
import StudentAssignmentList from "../components/StudentAssignmentList";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <DashboardNavbar />

        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold mb-4">Student Dashboard 🎓</h2>

          <p className="text-gray-600">
            Welcome <strong>{user?.name}</strong>. View available assignments,
            submit your answers and receive AI-powered evaluation with detailed
            feedback.
          </p>
        </div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link
            to="/student-assignments"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition block"
          >
            <h3 className="text-xl font-bold">Assignments 📚</h3>

            <p className="text-gray-500 mt-2">View available assignments.</p>
          </Link>

          <Link
            to="/student-pending-assignments"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition block"
          >
            <h3 className="text-xl font-bold">Submit Answer</h3>

            <p className="text-gray-500 mt-2">
              Submit your assignment answers.
            </p>
          </Link>

          <Link
            to="/student-results"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition block"
          >
            <h3 className="text-xl font-bold">Evaluation History 📊</h3>

            <p className="text-gray-500 mt-2">Check AI feedback and scores.</p>
          </Link>
        </div>

        {/* Available Assignments */}

        <StudentAssignmentList />
      </div>
    </div>
  );
}

export default StudentDashboard;
