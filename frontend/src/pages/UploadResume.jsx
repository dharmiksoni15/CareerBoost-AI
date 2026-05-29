import React, { useState } from "react";
import api from "../services/api";

function UploadResume() {

  const [file, setFile] = useState(null);

  // Handle File Change
  const handleFileChange = (e) => {

    setFile(e.target.files[0]);

  };

  // Handle Upload
  const handleUpload = async (e) => {

    e.preventDefault();

    // Validation
    if (!file) {

      alert("Please select a file");

      return;

    }

    try {

      // FormData object
      const formData = new FormData();

      formData.append("resume", file);

      // API Request
      const response = await api.post(

        "/resume/upload",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }

      );

      console.log(
        "UPLOAD SUCCESS:",
        response.data
      );

      alert("Resume uploaded successfully");

    } catch (error) {

      console.log(
        "UPLOAD ERROR:",
        error.response?.data || error.message
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleUpload}
        className="bg-white p-10 rounded-2xl shadow-lg w-[450px]"
      >

        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Upload Resume
        </h1>

        {/* File Input */}
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        {/* Upload Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Upload Resume
        </button>

      </form>

    </div>

  );

}

export default UploadResume;