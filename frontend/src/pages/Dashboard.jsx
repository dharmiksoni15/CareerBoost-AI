import React, { useState } from "react";

// Placeholder imports (do not create these components yet)
import ResumeUploadCard from "../components/ResumeUploadCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import AnalysisResult from "../components/AnalysisResult";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    // Simulate analysis delay
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] px-4 py-8">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {/* Main Dashboard Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Resume Upload Card */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/20">
              <ResumeUploadCard />
            </div>
          </div>
          {/* Right: Job Description Card */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/20">
              <JobDescriptionCard />
            </div>
          </div>
        </div>
        {/* Bottom: Analyze Resume Button */}
        <div className="flex flex-col items-center gap-6">
          <button
            className={`px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg transition-all duration-200 backdrop-blur-md border border-white/20 flex items-center justify-center ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:from-blue-700 hover:to-indigo-800"
            }`}
            disabled={loading}
            onClick={handleAnalyze}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
          {/* Placeholder for analysis result */}
          <div className="w-full">
            <AnalysisResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;