import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ loginId: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { loginId, password } = formData;

    if (loginId === "admin" && password === "password123") {
      setErrorMessage("");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid login ID or password");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 absolute inset-0 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-black/20 mix-blend-multiply"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-gray-600">Login to your account</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <label
              htmlFor="loginId"
              className="block text-sm font-medium text-gray-700"
            >
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your login ID"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-sm text-center text-red-500">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-transform duration-300 transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline hover:text-blue-600"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
