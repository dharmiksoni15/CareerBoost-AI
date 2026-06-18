// ==================== IMPORTS ====================

// Gemini client
const ai = require("../config/gemini");

// Models
const Resume = require("../models/Resume");
const JobDescription = require("../models/JobDescription");

// Utilities
const extractResumeText = require("../utils/extractResumeText");
const buildAnalysisPrompt = require("../utils/buildAnalysisPrompt");
const { generateWithFallback } = require("../services/aiService");

console.log("Extract Function:", extractResumeText);

// ==================== TEST GEMINI ====================

const testGemini = async (req, res) => {
  try {
    console.log("TEST GEMINI ROUTE HIT");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Say: Gemini API is working",
    });

    return res.status(200).json({
      success: true,
      message: "Gemini working successfully",
      result: response.text,
    });
  } catch (error) {
    console.log("Gemini Test Error:", error);

    return res.status(500).json({
      success: false,
      message: "Gemini API failed",
      error: error.message,
    });
  }
};

// ==================== ANALYZE RESUME ====================

const analyzeResume = async (req, res) => {
  console.log("ANALYZE CONTROLLER HIT");

  try {
    // ==================== GET DATA ====================
    const { resumeId, jobDescriptionId } = req.body;

    console.log("Request Body:", req.body);

    // ==================== VALIDATION ====================
    if (!resumeId || !jobDescriptionId) {
      return res.status(400).json({
        success: false,
        message: "Resume ID and Job Description ID are required",
      });
    }

    // ==================== FIND RESUME ====================
    const resume = await Resume.findOne({
      _id: resumeId,
      user: req.user._id,
    });

    console.log("Resume Data:", resume);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    // ==================== FIND JOB DESCRIPTION ====================
    const jobDescription = await JobDescription.findOne({
      _id: jobDescriptionId,
      userId: req.user._id,
    });

    console.log("Job Description Data:", jobDescription);

    if (!jobDescription) {
      return res.status(404).json({
        success: false,
        message: "Job description not found",
      });
    }

    // ==================== EXTRACT TEXT ====================
    const resumeText = await extractResumeText(resume.filePath);

    console.log("Extracted Resume Text Success");
    console.log(resumeText);

    // ==================== BUILD PROMPT ====================
    const prompt = buildAnalysisPrompt(resumeText, jobDescription.description);

    console.log("Prompt Generated");
    console.log("Prompt:", prompt);

    // ==================== 🔥 MOCK MODE (DEV ONLY) ====================
    // if (process.env.NODE_ENV === "development") {
    //   console.log("MOCK MODE ACTIVE - skipping Gemini API");

    //   return res.status(200).json({
    //     success: true,
    //     message: "Mock AI response (development mode)",
    //     analysis: {
    //       score: 72,
    //       summary:
    //         "Good resume overall but needs improvement in backend and system design.",
    //       strengths: ["React", "Node.js", "MongoDB basics"],
    //       weaknesses: [
    //         "System design",
    //         "Scalability",
    //         "Advanced backend architecture",
    //       ],
    //       suggestion:
    //         "Add more real-world projects, deployment experience, and system design knowledge.",
    //     },
    //   });
    // }

    // ==================== GEMINI REQUEST ====================
    let response;

    try {
      response = await generateWithFallback(prompt);
    } catch (geminiError) {
      console.log("Gemini API Error:", geminiError);

      if (geminiError.status === 429) {
        return res.status(429).json({
          success: false,
          message:
            "Gemini quota exceeded. Please wait or upgrade your API plan.",
        });
      }

      if (geminiError.status === 503) {
        return res.status(503).json({
          success: false,
          message: "Gemini servers are busy. Try again later.",
        });
      }

      if (geminiError.status === 404) {
        return res.status(404).json({
          success: false,
          message: "Gemini model not found.",
        });
      }

      throw geminiError;
    }

    // ==================== RESPONSE HANDLING ====================
    let analysisData = {
      score: 0,
      summary: "",
      strengths: [],
      weaknesses: [],
      suggestion: "",
    };

    if (response && response.text) {
      try {
        const cleanText = response.text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        analysisData = JSON.parse(cleanText);
      } catch (e) {
        analysisData.summary = response.text;
      }
    }

    return res.status(200).json({
      success: true,
      message: "Resume analyzed successfully",
      analysis: analysisData,
    });
  } catch (error) {
    console.log("Resume Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ==================== EXPORTS ====================

module.exports = {
  testGemini,
  analyzeResume,
};
