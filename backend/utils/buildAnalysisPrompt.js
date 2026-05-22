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
4. Overall candidate fit for the role

Give the response in a clear and professional format.
`;
};

// Export prompt builder function
module.exports = buildAnalysisPrompt;