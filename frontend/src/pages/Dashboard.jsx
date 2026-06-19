import React, { useState } from "react";
import ResumeUploadCard from "../components/ResumeUploadCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import AnalysisResult from "../components/AnalysisResult";
import AnalysisScore from "../components/ai-dashboard/AnalysisScore";
import SummaryCard from "../components/ai-dashboard/SummaryCard";
import StrengthCard from "../components/ai-dashboard/StrengthCard";
import WeaknessCard from "../components/ai-dashboard/WeaknessCard";
import ATSChecklist from "../components/ai-dashboard/ATSChecklist";
import InterviewAccordion from "../components/ai-dashboard/InterviewAccordion";
import HiringVerdict from "../components/ai-dashboard/HiringVerdict";
import { formatAnalysisResponse } from "../utils/formatAnalysisResponse";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useState(null);
  const [jobDescriptionId, setJobDescriptionId] = useState(null);
  const [analysis, setAnalysis] = useState(()=>{
    try{ const raw = localStorage.getItem('analysis'); return raw? JSON.parse(raw): null }catch(e){ return null }
  });
  const [ready, setReady] = useState(false);

  // Listen for both resume and job description to be ready
  React.useEffect(() => {
    setReady(!!resumeId && !!jobDescriptionId);
  }, [resumeId, jobDescriptionId]);

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!ready) {
      alert("Please upload resume and save job description first.");
      return;
    }
    setLoading(true);
    setAnalysis(null);
    try {
      const res = await api.post("/ai/analyze", { resumeId, jobDescriptionId });
  console.log("AI RESPONSE:", res.data);
  const formatted = formatAnalysisResponse(res.data.analysis);
  setAnalysis(formatted);
  try{ localStorage.setItem('analysis', JSON.stringify(formatted)) }catch(e){}
    } catch (err) {
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] px-4 py-8">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">AI-Powered Resume Analyzer</h1>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 shadow-lg"
          >
            Logout
          </button>
        </div>
        {/* Main Dashboard Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Resume Upload Card */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/20">
              <ResumeUploadCard onUpload={setResumeId} />
            </div>
          </div>
          {/* Right: Job Description Card */}
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/20">
              <JobDescriptionCard onSave={setJobDescriptionId} />
            </div>
          </div>
        </div>
        {/* Bottom: Analyze Resume Button */}
        <div className="flex flex-col items-center gap-6">
          <button
            className={`px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg transition-all duration-200 backdrop-blur-md border border-white/20 flex items-center justify-center ${
              loading || !ready
                ? "opacity-60 cursor-not-allowed"
                : "hover:from-blue-700 hover:to-indigo-800"
            }`}
            disabled={loading || !ready}
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
            {loading
              ? "Analyzing..."
              : ready
                ? "Analyze Resume"
                : "Upload Resume & Save Job Description"}
          </button>
          {/* Analysis Result */}
          <div className="w-full">
            {!analysis ? (
              <AnalysisResult data={null} />
            ) : (
              (() => {
                const formatted = formatAnalysisResponse(analysis || {});
                return (
                  <div className="space-y-6">
                    <AnalysisScore score={formatted.score} />
                    <SummaryCard summary={formatted.summary} />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Strengths</h4>
                        <div className="grid gap-3">
                          {(formatted.strengths||[]).map((s, i) => (
                            <StrengthCard key={i} title={s} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Improvement Areas</h4>
                        <div className="grid gap-3">
                          {(formatted.weaknesses||[]).map((w, i) => (
                            <WeaknessCard key={i} title={w} priority={i===0? 'High': 'Medium'} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <ATSChecklist items={formatted.atsSuggestions} />
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-3">Interview Questions</h4>
                        <InterviewAccordion questions={formatted.interviewQuestions||[]} />
                      </div>
                    </div>

                    <HiringVerdict verdict={formatted.recommendation} />
                  </div>
                );
              })()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
