import { TextContentBlock } from 'openai/resources/beta/threads/messages.mjs';
import { chatlog } from '../types/chatlog';
import { model } from '../types/models';
import { promptAssistant } from './OpenAi';
import { promptFlash } from './GeminiFlash';
import { promptPro } from './GeminiPro';
import { promptSingle } from './Claude';

export const basicPrompt = async (
  prompt: string,
  model: model
): Promise<chatlog> => {
  const log = { prompt: '', response: '' };
  log.prompt = prompt;
  switch (model) {
    case 'OpenAi':
      for (const message of await promptAssistant(prompt).then((msg) =>
        msg!.data.reverse()
      )) {
        if (message.role === 'assistant') {
          log.response = (message.content[0] as TextContentBlock).text.value;
        }
      }
      break;
    case 'Gemini-Flash':
      log.response = await promptFlash(prompt);
      break;
    case 'Gemini-Pro':
      log.response = await promptPro(prompt);
      break;
    case 'Claude':
      log.response = await promptSingle(prompt);
  }
  log.response = `(${model}) ${log.response}`;
  // default. TODO: error handling
  return log;
};
