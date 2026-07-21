import DashboardNavbar from "../components/DashboardNavbar";
import CreateAssignment from "../components/CreateAssignment";
import AssignmentList from "../components/AssignmentList";
import { Link } from "react-router-dom";
import TeacherSubmissionOverview from "../components/TeacherSubmissionOverview";

function TeacherDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <DashboardNavbar />

        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold mb-4">
            Teacher Dashboard 👨‍🏫
          </h2>

          <p className="text-gray-600">
            Welcome{" "}
            <span className="font-semibold">
              {user?.name}
            </span>
            . Here you can create assignments, view student
            submissions and review AI evaluations.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* Create Assignment */}
          <a
            href="#create-assignment"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition block"
          >
            <h3 className="text-xl font-bold">
              Create Assignment 📝
            </h3>

            <p className="text-gray-500 mt-2">
              Create questions for students.
            </p>
          </a>

          {/* Student Submissions */}
          <Link
            to="/teacher-submissions"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-green-50 transition block"
          >
            <h3 className="text-xl font-bold">
              Student Submissions 👨‍🎓
            </h3>

            <p className="text-gray-500 mt-2">
              View submitted answers.
            </p>
          </Link>

          {/* AI Evaluations */}
          <Link
            to="/teacher-evaluations"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-purple-50 transition block"
          >
            <h3 className="text-xl font-bold">
              AI Evaluations 📊
            </h3>

            <p className="text-gray-500 mt-2">
              Review AI generated feedback.
            </p>
          </Link>

        </div>

        {/* Create Assignment Form */}
        <div
          id="create-assignment"
          className="mt-10"
        >
          <CreateAssignment />
        </div>

        {/* Assignment List */}
        <div className="mt-10">
          <AssignmentList />
        </div>
        <div className="mt-10">
          <TeacherSubmissionOverview />
        </div>

      </div>
    </div>
  );
}

export default TeacherDashboard;