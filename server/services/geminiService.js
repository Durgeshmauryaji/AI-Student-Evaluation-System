import dotenv from "dotenv";
dotenv.config();


import { GoogleGenAI } from "@google/genai";

// console.log("Gemini API Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const evaluateWithGemini = async (subject, question, answer) => {
  const prompt = `
You are an experienced teacher.

Evaluate the student's answer.

Subject:
${subject}

Question:
${question}

Student Answer:
${answer}

Return ONLY valid JSON.

Use exactly this format:

{
  "score": number,
  "feedback": "string",
  "strengths": ["string"],
  "weaknesses": ["string"],
  "suggestions": ["string"]
}

Rules:
- Score should be between 0 and 10.
- Give 2 strengths if possible.
- Give at least 1 weakness.
- Give at least 2 suggestions.
- Do not include markdown.
- Do not write explanation outside JSON.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown if Gemini wraps the JSON
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  return JSON.parse(text);
};