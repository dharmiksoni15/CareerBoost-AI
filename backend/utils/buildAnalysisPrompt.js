// Function to create AI analysis prompt
const buildAnalysisPrompt = (resumeText, jobDescription) => {
  // Create structured prompt for Gemini AI
  return `
You are an expert AI career assistant.

Analyze the following resume according to the given job description.

Resume Content:
${resumeText}

Job Description:
${jobDescription}

Please provide:

1. Matching skills
2. Missing skills
3. Resume improvement suggestions
4. Give overall candidate score out of 100
5. Mention whether candidate is a good fit or not

Give the response in a clear and professional format.

Return response Only in this format:

Matching skills:
- Skill 1
- Skill 2
- Skill 3

Missing skills:
- Skill A
- Skill B

resume improvement suggestions:
1. Suggestion 1
2. Suggestion 2

overall score out of 100:
- Score

Final Verdict:
- Candidate is a good fit / not a good fit

`;
};

// Export prompt builder function
module.exports = buildAnalysisPrompt;