import React, { useState } from "react";
import api from "../services/api";

function JobDescription() {
  const [form, setForm] = useState({
    jobTitle: "",
    description: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        jobTitle: form.jobTitle,
        description: form.description,
      };

      const response = await api.post(
        "/job-description/create",

        payload,
      );

      console.log("JOB DESCRIPTION SUCCESS:", response.data);

      alert("Job Description Added Successfully");
    } catch (error) {
      console.log(
        "JOB DESCRIPTION ERROR:",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[600px]"
      >
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Add Job Description
        </h1>

        {/* Job Title */}
        <input
          type="text"
          name="jobTitle"
          placeholder="Enter Job Title"
          value={form.jobTitle}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        {/* Job Description */}
        <textarea
          name="description"
          placeholder="Paste Job Description Here..."
          value={form.description}
          onChange={handleChange}
          rows="10"
          className="w-full border p-3 rounded-lg mb-6"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Save Job Description
        </button>
      </form>
    </div>
  );
}

export default JobDescription;
