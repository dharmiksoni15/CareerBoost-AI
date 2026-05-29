import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Login Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const payload = {
        email: form.email,
        password: form.password,
      };

      const response = await api.post(
        "/auth/login",
        payload
      );

      console.log(
        "LOGIN SUCCESS:",
        response.data
      );

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Redirect Dashboard
      navigate("/dashboard");

    } catch (error) {

      console.log(
        "LOGIN ERROR:",
        error.response?.data || error.message
      );

    }

  };

  return (

    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Login Page
        </h1>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;