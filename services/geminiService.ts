
import { GoogleGenAI } from "@google/genai";

export async function askGemini(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert construction consultant for 'Barman Morakab Kavir' based in Yazd, Iran. You help users with technical questions about materials like Cement, Heblex, Steel, and Chemicals. Always answer in Persian (Farsi) in a professional and polite tone. If asked about prices, say they vary daily and to check our live table.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "متأسفانه در حال حاضر قادر به پاسخگویی نیستم. لطفاً بعداً تلاش کنید.";
  }
}
