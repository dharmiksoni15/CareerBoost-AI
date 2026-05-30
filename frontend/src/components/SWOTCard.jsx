import React from "react";

const swotData = {
  strengths: [
    "5+ years experience in full-stack development",
    "Strong leadership and mentoring skills",
    "Proficient in React, Node.js, and MongoDB",
  ],
  weaknesses: [
    "Limited exposure to cloud platforms (AWS, Azure)",
    "Needs improvement in advanced algorithms",
  ],
  opportunities: [
    "Pursue AWS certification to expand cloud skills",
    "Lead cross-functional projects for broader experience",
  ],
  threats: [
    "High competition for senior developer roles",
    "Rapid changes in JavaScript frameworks",
  ],
};

const icons = {
  strengths: (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ),
  weaknesses: (
    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  opportunities: (
    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
  ),
  threats: (
    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

const sectionStyles = {
  strengths: "bg-green-900/20 border-green-400/30",
  weaknesses: "bg-red-900/20 border-red-400/30",
  opportunities: "bg-yellow-900/20 border-yellow-400/30",
  threats: "bg-pink-900/20 border-pink-400/30",
};

const SWOTCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Strengths */}
      <div className={`rounded-2xl p-5 border shadow-lg ${sectionStyles.strengths} flex flex-col min-w-0`}>
        <div className="flex items-center gap-2 mb-2">
          {icons.strengths}
          <span className="text-green-300 font-semibold text-lg">Strengths</span>
        </div>
        <ul className="list-disc ml-7 text-white/90 text-sm">
          {swotData.strengths.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Weaknesses */}
      <div className={`rounded-2xl p-5 border shadow-lg ${sectionStyles.weaknesses} flex flex-col min-w-0`}>
        <div className="flex items-center gap-2 mb-2">
          {icons.weaknesses}
          <span className="text-red-300 font-semibold text-lg">Weaknesses</span>
        </div>
        <ul className="list-disc ml-7 text-white/90 text-sm">
          {swotData.weaknesses.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Opportunities */}
      <div className={`rounded-2xl p-5 border shadow-lg ${sectionStyles.opportunities} flex flex-col min-w-0`}>
        <div className="flex items-center gap-2 mb-2">
          {icons.opportunities}
          <span className="text-yellow-200 font-semibold text-lg">Opportunities</span>
        </div>
        <ul className="list-disc ml-7 text-white/90 text-sm">
          {swotData.opportunities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Threats */}
      <div className={`rounded-2xl p-5 border shadow-lg ${sectionStyles.threats} flex flex-col min-w-0`}>
        <div className="flex items-center gap-2 mb-2">
          {icons.threats}
          <span className="text-pink-200 font-semibold text-lg">Threats</span>
        </div>
        <ul className="list-disc ml-7 text-white/90 text-sm">
          {swotData.threats.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SWOTCard;
