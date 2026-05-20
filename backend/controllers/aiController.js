// Import Gemini client
const ai = require("../config/gemini");

// Test Gemini API connection
const testGemini = async (req, res) => {
  try {
    // Send a simple prompt to Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say: CareerBoost AI Gemini setup is working.",
    });

    // Send Gemini response back to client
    return res.status(200).json({
      success: true,
      message: "Gemini API connected successfully",
      result: response.text,
    });
  } catch (error) {
    console.log("Gemini Test Error:", error);

    return res.status(500).json({
      success: false,
      message: "Gemini API test failed",
      error: error.message,
    });
  }
};

module.exports = {
  testGemini,
};