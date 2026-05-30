// Function to create AI analysis prompt

const buildAnalysisPrompt = (
  resumeText,
  jobDescription
) => {

  return `

You are an expert AI Resume Reviewer and Interview Coach.

Analyze the resume according to the job description.

================ RESUME ================

${resumeText}

================ JOB DESCRIPTION ================

${jobDescription}

================ TASKS ================

1. Identify matching skills

2. Identify missing skills

3. Give resume improvement suggestions

4. Suggest ATS optimization improvements

5. Give overall candidate score out of 100

6. Mention whether candidate is a good fit or not

7. Generate 5 technical interview questions based on:
   - Resume skills
   - Projects
   - Missing skills
   - Job description

================ RESPONSE FORMAT ================

================ RESPONSE FORMAT ================

Return ONLY valid JSON.

{
  "score": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestion": ""
}

`;

};

module.exports = buildAnalysisPrompt;