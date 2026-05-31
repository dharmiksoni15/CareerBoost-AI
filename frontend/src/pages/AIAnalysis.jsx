import React, { useState } from "react";
import api from "../services/api";

function AIAnalysis() {
  const [analysis, setAnalysis] = useState(null);

  // Handle AI Analysis
  const handleAnalysis = async () => {
     console.log("ANALYZE CLICKED");
    try {
      const payload = {
        resumeId: "6a19ec38d822ba27b9daebac",
        jobDescriptionId: "6a19ec62d822ba27b9daebad",
      };

      const response = await api.post("/ai/analyze", payload);

      console.log("AI ANALYSIS SUCCESS:", response.data);

      setAnalysis(response.data.analysis); // 👈 object store
    } catch (error) {
      console.log("AI ANALYSIS ERROR:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        AI Resume Analysis
      </h1>

      {/* Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={handleAnalysis}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          Generate AI Analysis
        </button>
      </div>

      {/* Result */}
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          AI Result
        </h2>

        {!analysis ? (
          "No AI analysis generated yet."
        ) : (
          <div className="space-y-4">

            {/* Score */}
            <h3 className="text-xl font-bold">
              Score: {analysis.score}/100
            </h3>

            {/* Summary */}
            <p>{analysis.summary}</p>

            {/* Strengths */}
            <div>
              <h4 className="font-bold">Strengths</h4>
              <ul className="list-disc ml-5">
                {analysis.strengths?.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div>
              <h4 className="font-bold">Weaknesses</h4>
              <ul className="list-disc ml-5">
                {analysis.weaknesses?.map((item, i) => (
                  <li key={i}>⚠ {item}</li>
                ))}
              </ul>
            </div>

            {/* Suggestion */}
            <p className="mt-3">
              💡 {analysis.suggestion}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}

export default AIAnalysis;