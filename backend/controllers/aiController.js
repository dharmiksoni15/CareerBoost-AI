const ai = require("../config/gemini");

// ================= TEST GEMINI =================
const testGemini = async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say: CareerBoost AI is working fine",
    });

    res.status(200).json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= ANALYZE RESUME =================
const analyzeResume = async (req, res) => {
  try {
    const { resumeId, jobDescriptionId } = req.body;

    if (!resumeId || !jobDescriptionId) {
      return res.status(400).json({
        success: false,
        message: "Resume ID and Job Description ID required",
      });
    }

    res.status(200).json({
      success: true,
      message: "Analyze route working (backend fixed)",
      data: {
        resumeId,
        jobDescriptionId,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  testGemini,
  analyzeResume,
};