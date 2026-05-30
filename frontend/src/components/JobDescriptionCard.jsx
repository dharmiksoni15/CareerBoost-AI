import React, { useState } from "react";

const MAX_CHARS = 2000;

const JobDescriptionCard = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg flex flex-col w-full">
      <h2 className="text-xl font-bold text-white mb-4">Job Description</h2>
      <textarea
        className="w-full min-h-[160px] max-h-96 resize-y rounded-xl bg-white/10 text-white placeholder-white/60 p-4 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-inner"
        placeholder="Paste Job Description Here..."
        maxLength={MAX_CHARS}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex justify-end mt-2">
        <span className="text-xs text-white/60">
          {value.length} / {MAX_CHARS}
        </span>
      </div>
    </div>
  );
};

export default JobDescriptionCard;  