// Import GoogleGenAI from SDK
const { GoogleGenAI } = require("@google/genai");

// Create Gemini client using API key from .env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Export Gemini client
module.exports = ai;