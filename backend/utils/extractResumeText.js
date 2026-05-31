// ==================== IMPORTS ====================
const fs = require("fs");
const pdf = require("pdf-parse");

console.log("PDF TYPE:", typeof pdf);
console.log("PDF VALUE:", pdf);

// ==================== FUNCTION ====================
const extractResumeText = async (filePath) => {
  try {
    if (!filePath) {
      throw new Error("File path is required");
    }

    // Read PDF file
    const dataBuffer = fs.readFileSync(filePath);

    // Extract text from PDF
    const data = await pdf(dataBuffer);

    return data.text;
  } catch (error) {
    console.log("PDF Extract Error:", error.message);
    throw new Error("Failed to extract resume text");
  }
};

// ==================== EXPORT ====================
module.exports = extractResumeText;