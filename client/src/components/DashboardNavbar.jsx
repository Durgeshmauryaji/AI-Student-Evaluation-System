import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome {user?.name} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          AI Student Evaluation Dashboard
        </p>
      </div>


      <div className="flex gap-4">

        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="
            border 
            border-blue-600 
            text-blue-600 
            px-5 
            py-2 
            rounded-lg 
            hover:bg-blue-600 
            hover:text-white 
            transition
          "
        >
          🏠 Home
        </button>


        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="
            bg-red-500 
            text-white 
            px-5 
            py-2 
            rounded-lg 
            hover:bg-red-600 
            transition
          "
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default DashboardNavbar;