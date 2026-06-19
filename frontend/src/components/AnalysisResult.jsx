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

  // Always show a safe placeholder. The dashboard page renders the full UI.
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white">
      No AI analysis generated yet.
    </div>
  );
};

export default AnalysisResult;