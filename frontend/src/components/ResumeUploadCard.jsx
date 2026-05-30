import React, { useRef, useState } from "react";

const ResumeUploadCard = () => {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
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
        Drop or Upload Your Resume
      </p>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      {fileName && (
        <div className="mt-4 px-4 py-2 rounded-lg bg-white/20 text-white text-sm font-medium shadow-inner">
          {fileName}
        </div>
      )}
    </div>
  );
};

export default ResumeUploadCard;