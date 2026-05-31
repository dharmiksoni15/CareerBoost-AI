import React, { useState, useEffect } from "react";
import ResumeUploadCard from "../components/ResumeUploadCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import AnalysisResult from "../components/AnalysisResult";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useState(null);
  const [jobDescriptionId, setJobDescriptionId] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [ready, setReady] = useState(false);

  const navigate = useNavigate();

  // 🔐 AUTH GUARD
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  // READY CHECK
  useEffect(() => {
    setReady(!!resumeId && !!jobDescriptionId);
  }, [resumeId, jobDescriptionId]);

  const handleAnalyze = async () => {
    if (!ready) return alert("Upload resume + job description first");

    setLoading(true);
    setAnalysis(null);

    try {
      const res = await api.post("/ai/analyze", {
        resumeId,
        jobDescriptionId,
      });

      setAnalysis(res.data.analysis);
    } catch (err) {
      console.log(err);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] px-4 py-8 text-white">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">
          CareerBoost Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ResumeUploadCard onUpload={setResumeId} />
        <JobDescriptionCard onSave={setJobDescriptionId} />
      </div>

      <div className="mt-6 text-center">
        <button
          disabled={!ready || loading}
          onClick={handleAnalyze}
          className="bg-blue-600 px-6 py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>

      <div className="mt-6">
        <AnalysisResult data={analysis} />
      </div>
    </div>
  );
};

export default Dashboard;