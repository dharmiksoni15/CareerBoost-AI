const fs = require("fs");
const pdf = require("pdf-parse");

console.log("PDF TYPE:", typeof pdf);
console.log("PDF VALUE:", pdf);

const extractResumeText = async (filePath) => {
  try {
    if (!filePath) {
      throw new Error("File path is required");
    }

    if (!fs.existsSync(filePath)) {
      throw new Error(`File does not exist: ${filePath}`);
    }

    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdf(dataBuffer);

    return data.text;
  } catch (error) {
    console.log("PDF Extract Error:", error);

    throw new Error(
      `Failed to extract resume text: ${error.message}`
    );
  }
};

module.exports = extractResumeText;