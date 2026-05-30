import React, { useState } from "react";
import api from "../services/api";

const MAX_CHARS = 2000;

const JobDescriptionCard = ({ onSave }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [value, setValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setError("");
    if (!jobTitle.trim() || !value.trim()) {
      setError("Job title and description are required.");
      return;
    }
    setSaving(true);
    setSuccess(false);
    try {
      const payload = { jobTitle: jobTitle.trim(), description: value.trim() };
      const res = await api.post("/job-description/create", payload);
      if (res.data && res.data.jobDescription && onSave) {
        onSave(res.data.jobDescription._id);
        setSuccess(true);
      } else if (res.data && res.data.success === false) {
        setError(res.data.message || "Failed to save job description");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to save job description");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg flex flex-col w-full">
      <h2 className="text-xl font-bold text-white mb-4">Job Description</h2>

      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => { setJobTitle(e.target.value); setSuccess(false); setError(""); }}
        className="w-full mb-3 px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/60 border border-white/10 focus:outline-none"
      />

      <textarea
        className="w-full min-h-[160px] max-h-96 resize-y rounded-xl bg-white/10 text-white placeholder-white/60 p-4 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-inner"
        placeholder="Paste Job Description Here..."
        maxLength={MAX_CHARS}
        value={value}
        onChange={(e) => { setValue(e.target.value); setSuccess(false); setError(""); }}
        disabled={saving}
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-white/60">{value.length} / {MAX_CHARS}</span>
        <button
          type="button"
          className="px-4 py-1 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-60"
          onClick={handleSave}
          disabled={saving || !value.trim() || !jobTitle.trim()}
        >
          {saving ? "Saving..." : success ? "Saved!" : "Save"}
        </button>
      </div>

      {error && (
        <div className="mt-3 text-sm text-red-400 font-medium">{error}</div>
      )}

      {success && (
        <div className="mt-2 text-green-400 text-sm font-semibold">Job description saved!</div>
      )}
    </div>
  );
};

export default JobDescriptionCard;