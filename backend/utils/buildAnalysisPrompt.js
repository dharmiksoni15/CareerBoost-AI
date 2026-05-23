// Function to create AI analysis prompt

const buildAnalysisPrompt = (resumeText, jobDescription) => {

  return `

You are an expert AI Resume Reviewer and Career Coach.

Analyze the resume according to the job description.

================ RESUME ================
${resumeText}

================ JOB DESCRIPTION ================
${jobDescription}

Your task:

1. Identify matching skills
2. Identify missing skills
3. Give resume improvement suggestions
4. Suggest ATS optimization improvements
5. Evaluate projects and technical skills
6. Give overall candidate score out of 100
7. Give final hiring verdict

Return response ONLY in this format:

Matching Skills:
- Skill 1
- Skill 2
- Skill 3

Missing Skills:
- Skill 1
- Skill 2
- Skill 3

Resume Improvement Suggestions:
1. Suggestion 1
2. Suggestion 2
3. Suggestion 3

ATS Optimization Suggestions:
1. Suggestion 1
2. Suggestion 2

Overall Candidate Score:
- Score/100

Final Verdict:
- Good Fit / Average Fit / Not a Good Fit

`;

};

// Export function
module.exports = buildAnalysisPrompt;