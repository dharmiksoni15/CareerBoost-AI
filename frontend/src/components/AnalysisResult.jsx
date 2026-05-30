import React from "react";

const sampleData = {
  swot: {
    strengths: [
      "Strong experience in React and Node.js",
      "Excellent problem-solving skills",
      "Proven leadership in agile teams",
    ],
    weaknesses: [
      "Limited exposure to cloud infrastructure",
      "Needs improvement in advanced data structures",
    ],
    opportunities: [
      "Upskill in AWS and DevOps tools",
      "Mentorship opportunities in current company",
    ],
    threats: [
      "High competition for full-stack roles",
      "Rapidly evolving frontend frameworks",
    ],
  },
  matchingSkills: [
    "JavaScript",
    "React",
    "Node.js",
    "REST APIs",
    "Team Collaboration",
  ],
  missingSkills: [
    "AWS",
    "Docker",
    "CI/CD Pipelines",
  ],
  suggestions: [
    "Highlight leadership in agile projects more prominently.",
    "Add recent certifications or online courses.",
    "Include more quantifiable achievements.",
  ],
  interviewQuestions: [
    "Describe a challenging bug you fixed in a React application.",
    "How would you design a scalable REST API?",
    "What strategies do you use for effective team communication?",
  ],
  overallScore: 87,
  verdict: "Strong candidate for the role. Addressing cloud and DevOps skills will further boost your profile.",
};

const Card = ({ title, children }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg flex flex-col min-w-0">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <div className="text-white/90 text-sm">{children}</div>
  </div>
);

const AnalysisResult = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
      <Card title="SWOT Analysis">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="font-bold text-green-400">Strengths:</span>
            <ul className="list-disc ml-5 mt-1">
              {sampleData.swot.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <span className="font-bold text-yellow-400 mt-2 block">Opportunities:</span>
            <ul className="list-disc ml-5 mt-1">
              {sampleData.swot.opportunities.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bold text-red-400">Weaknesses:</span>
            <ul className="list-disc ml-5 mt-1">
              {sampleData.swot.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
            <span className="font-bold text-pink-400 mt-2 block">Threats:</span>
            <ul className="list-disc ml-5 mt-1">
              {sampleData.swot.threats.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      <Card title="Matching Skills">
        <ul className="list-disc ml-5">
          {sampleData.matchingSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </Card>
      <Card title="Missing Skills">
        <ul className="list-disc ml-5">
          {sampleData.missingSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </Card>
      <Card title="Resume Suggestions">
        <ul className="list-disc ml-5">
          {sampleData.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Card>
      <Card title="Interview Questions">
        <ul className="list-disc ml-5">
          {sampleData.interviewQuestions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </Card>
      <Card title="Overall Score">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-blue-400">{sampleData.overallScore}</span>
          <span className="text-white/70">/ 100</span>
        </div>
      </Card>
      <Card title="Final Verdict">
        <div className="text-base font-medium text-white/90">
          {sampleData.verdict}
        </div>
      </Card>
    </div>
  );
};

export default AnalysisResult;
