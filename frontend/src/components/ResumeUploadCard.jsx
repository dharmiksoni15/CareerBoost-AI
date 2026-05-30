import React, { useRef, useState } from "react";
import api from "../services/api";

const ResumeUploadCard = ({ onUpload }) => {
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      await uploadFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await uploadFile(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const uploadFile = async (file) => {
    setUploading(true);
    setFileName(file.name);
    setSuccess(false);
    try {
      const formData = new FormData();
      formData.append("resume", file);
      const res = await api.post("/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data && res.data.resume && onUpload) {
        onUpload(res.data.resume._id);
        setSuccess(true);
      }
    } catch (err) {
      alert("Resume upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-dashed border-white/30 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/20 hover:border-blue-500"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
      style={{ minHeight: "260px" }}
    >
      {/* Upload Icon */}
      <svg
        className="w-16 h-16 text-blue-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="8"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 34V18m0 0l-6 6m6-6l6 6M12 38h24"
        />
      </svg>
      <p className="text-lg text-white font-semibold mb-2">
        {uploading
          ? "Uploading..."
          : success
          ? "Resume uploaded!"
          : "Drop or Upload Your Resume"}
      </p>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      {fileName && !uploading && (
        <div
          className={`mt-4 px-4 py-2 rounded-lg text-white text-sm font-medium shadow-inner ${
            success ? "bg-green-500/60" : "bg-white/20"
          }`}
        >
          {fileName} {success && <span className="ml-2">✔️</span>}
        </div>
      )}
    </div>
  );
};

export default ResumeUploadCard;