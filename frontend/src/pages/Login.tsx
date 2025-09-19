import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transform transition hover:scale-105 duration-300">
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-2 text-center text-indigo-600">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please select your role to continue
        </p>

        {/* Role Selector */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Login as</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "student" | "admin")}
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Continue as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Powered by <span className="font-semibold text-indigo-600">Smart Student Hub</span>
        </p>
      </div>
    </div>
  );
}
