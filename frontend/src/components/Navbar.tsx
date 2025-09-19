import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { role, logout } = useAuth();

  return (
    <nav className="bg-white/90 backdrop-blur shadow-md px-6 py-3 flex justify-between items-center fixed top-0 w-full z-20">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">
        Smart Student Hub
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
        >
          Home
        </Link>

        {!role && (
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </Link>
        )}

        {role && (
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition-all duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
