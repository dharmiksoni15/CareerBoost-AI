import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

  // Handle Register Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await api.post(
        "/auth/register",
        payload
      );

      console.log(
        "REGISTER SUCCESS:",
        response.data
      );

      // Redirect to Login Page
      navigate("/login");

    } catch (error) {

      console.log(
        "REGISTER ERROR:",
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

        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Register Page
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

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

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;