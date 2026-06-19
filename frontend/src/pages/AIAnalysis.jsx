import React, { useState } from "react";
import api from "../services/api";
import AnalysisScore from "../components/ai-dashboard/AnalysisScore";
import SummaryCard from "../components/ai-dashboard/SummaryCard";
import StrengthCard from "../components/ai-dashboard/StrengthCard";
import WeaknessCard from "../components/ai-dashboard/WeaknessCard";
import ATSChecklist from "../components/ai-dashboard/ATSChecklist";
import InterviewAccordion from "../components/ai-dashboard/InterviewAccordion";
import HiringVerdict from "../components/ai-dashboard/HiringVerdict";
import { formatAnalysisResponse } from "../utils/formatAnalysisResponse";

function AIAnalysis() {
  const [analysis, setAnalysis] = useState(()=>{
    try{
      const raw = localStorage.getItem('analysis');
      return raw? JSON.parse(raw): null;
    }catch(e){return null}
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        resumeId: "6a19ec38d822ba27b9daebac",
        jobDescriptionId: "6a19ec62d822ba27b9daebad",
      };

      const response = await api.post("/ai/analyze", payload);
  const formatted = formatAnalysisResponse(response.data.analysis);
  setAnalysis(formatted);
  try{ localStorage.setItem('analysis', JSON.stringify(formatted)) }catch(e){}
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] p-8 text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">AI Resume Insights</h1>
          <button onClick={handleAnalysis} className="bg-blue-600 px-4 py-2 rounded-lg disabled:opacity-60" disabled={loading}>{loading?'Analyzing...':'Run Analysis'}</button>
        </div>

        {error && (
          <div className="bg-red-900/30 p-4 rounded-lg">
            <div className="font-semibold">Error</div>
            <div className="text-sm">{error}</div>
            <button className="mt-2 underline" onClick={handleAnalysis}>Retry</button>
          </div>
        )}

        {!analysis ? (
          <div className="bg-white/5 rounded-2xl p-8 text-center">{loading? 'Analyzing...': 'No AI analysis yet. Click "Run Analysis"'}</div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <AnalysisScore score={analysis.score} />
              <SummaryCard summary={analysis.summary} />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Strengths</h4>
                  <div className="grid gap-3">
                    {(analysis.strengths||[]).map((s,i)=>(<StrengthCard key={i} title={s} />))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Improvement Areas</h4>
                  <div className="grid gap-3">
                    {(analysis.weaknesses||[]).map((w,i)=>(<WeaknessCard key={i} title={w} priority={i===0?'High':'Medium'} />))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-3">Interview Questions</h4>
                <InterviewAccordion questions={analysis.interviewQuestions||[]} />
              </div>
            </div>

            <div className="space-y-4">
              <ATSChecklist items={analysis.atsSuggestions} />
              <HiringVerdict verdict={analysis.recommendation} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAnalysis;