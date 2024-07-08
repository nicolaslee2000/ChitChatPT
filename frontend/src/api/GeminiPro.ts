import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAi.getGenerativeModel({ model: 'gemini-1.5-pro' });

const chat = model.startChat();

export const promptPro = async (prompt: string) => {
  console.log(prompt);
  const result = await chat.sendMessage(prompt);
  const response = result.response.text();
  return response;
};
