import React from "react";

const ScoreCard = ({ score = 78, max = 100 }) => {
  const radius = 48;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const percent = Math.min(Math.max(score / max, 0), 1);
  const strokeDashoffset = circumference - percent * circumference;

  return (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg w-full max-w-xs mx-auto">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="block">
          <circle
            stroke="#334155"
            fill="none"
            strokeWidth={stroke}
            cx={radius}
            cy={radius}
            r={normalizedRadius}
          />
          <circle
            stroke="url(#blue-gradient)"
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
          <defs>
            <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-blue-400 select-none">
          {score}
        </span>
      </div>
      <div className="mt-2 text-white/80 text-sm font-medium">Score out of {max}</div>
    </div>
  );
};

export default ScoreCard;
