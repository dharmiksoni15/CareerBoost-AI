export function formatAnalysisResponse(raw){
  // Normalize input and provide robust defaults to avoid crashes after refresh
  const r = raw || {};

  const scoreVal = Number(r?.overallScore ?? r?.score ?? 0) || 0;
  const score = Math.max(0, Math.min(100, Math.round(scoreVal)));

  const recommendation =
    score >= 90 ? 'Strongly Recommended' : score >= 75 ? 'Recommended' : score >= 60 ? 'Consider' : 'Not Recommended';

  return {
    score,
    recommendation,
    summary: r?.summary || r?.message || '',
    strengths: Array.isArray(r?.strengths) ? r.strengths : (r?.strengths ? [r.strengths] : []),
    weaknesses: Array.isArray(r?.weaknesses) ? r.weaknesses : (r?.weaknesses ? [r.weaknesses] : []),
    atsSuggestions: Array.isArray(r?.missingKeywords) ? r.missingKeywords : (r?.missingKeywords ? [r.missingKeywords] : []),
    interviewQuestions: Array.isArray(r?.interviewQuestions) ? r.interviewQuestions : (r?.questions ? r.questions : []),
    model: r?.model || null,
  };
}
