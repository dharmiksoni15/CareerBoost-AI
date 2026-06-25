const ai = require("../config/gemini");

const MODELS = [
  "gemini-2.5-flash",
  "gemini-2.5-pro",
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
      console.error(`${model} failed`, error);

      lastError = error;

      if ([429, 500, 503].includes(error.status)) {
        await sleep(2000);
        continue;
      }
    }
  }

  throw lastError;
};

module.exports = {
  generateWithFallback,
};