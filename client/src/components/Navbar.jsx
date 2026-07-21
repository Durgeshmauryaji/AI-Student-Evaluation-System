import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          AI Student Evaluation
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>

          <Link
            to="/features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-6 flex flex-col gap-4">
          <Link
            to="/about"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/features"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
