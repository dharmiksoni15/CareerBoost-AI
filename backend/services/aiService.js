const ai = require("../config/gemini");

const MODELS = [
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateWithFallback = async (prompt) => {
  let lastError;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      console.log(`Success with ${model}`);

      return response;
    } catch (error) {
      console.log(`${model} failed`, error.status);

      lastError = error;

      if (error.status === 503) {
        await sleep(1500);
        continue;
      }

      throw error;
    }
  }

  throw lastError;
};

module.exports = {
  generateWithFallback,
};