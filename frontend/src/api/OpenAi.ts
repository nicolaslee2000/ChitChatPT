import { OpenAI } from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

let assistantId = '';
let threadId = '';
try {
  const assistant = await openai.beta.assistants.create({
    instructions: 'You are a helpful assisant',
    model: 'gpt-4o',
    name: 'general assistant',
  });
  assistantId = assistant.id;
  const thread = await openai.beta.threads.create();
  threadId = thread.id;
} catch (e) {
  alert(e);
}

export const promptAssistant = async (prompt: string) => {
  await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: prompt,
  });
  const run = await openai.beta.threads.runs.createAndPoll(threadId, {
    assistant_id: assistantId,
  });
  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    return messages;
  }
  alert(run.status);
};
