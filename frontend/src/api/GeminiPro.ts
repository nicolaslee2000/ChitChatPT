import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAi.getGenerativeModel({ model: 'gemini-1.5-Pro' });

const chat = model.startChat();

export const promptPro = async (prompt: string) => {
  const result = await chat.sendMessage(prompt);
  const response = result.response.text();
  return response;
};
