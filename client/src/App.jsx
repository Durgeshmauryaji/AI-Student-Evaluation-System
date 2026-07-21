import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AssignmentSubmission from "./pages/AssignmentSubmission";
import StudentResults from "./pages/StudentResults";
import StudentPendingAssignments from "./pages/StudentPendingAssignments";
import StudentAssignments from "./pages/StudentAssignments";
import TeacherSubmissions from "./pages/TeacherSubmissions";
import TeacherEvaluations from "./pages/TeacherEvaluations";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

        {/* Student */}
        <Route
          path="/student-assignments"
          element={<StudentAssignments />}
        />

        <Route
          path="/student-pending-assignments"
          element={<StudentPendingAssignments />}
        />

        <Route
          path="/student-results"
          element={<StudentResults />}
        />

        <Route
          path="/assignment/:id"
          element={<AssignmentSubmission />}
        />

        {/* Teacher */}
        <Route
          path="/teacher-submissions"
          element={<TeacherSubmissions />}
        />

        <Route
          path="/teacher-evaluations"
          element={<TeacherEvaluations />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;