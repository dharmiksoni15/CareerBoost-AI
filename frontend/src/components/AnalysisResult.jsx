import React from "react";

const AnalysisResult = ({ data }) => {
  
  // No data
  if (!data) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white">
        No AI analysis generated yet.
      </div>
    );
  }

  // If backend returns TEXT (current Gemini response)
  if (typeof data === "string") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">
          AI Analysis Result
        </h2>

        <div className="text-white whitespace-pre-wrap">
          {data}
        </div>
      </div>
    );
  }

  // Future object support
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">
        AI Analysis Result
      </h2>

      <pre className="text-white whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default AnalysisResult;