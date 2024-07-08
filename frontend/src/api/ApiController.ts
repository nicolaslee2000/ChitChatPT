import { TextContentBlock } from 'openai/resources/beta/threads/messages.mjs';
import { chatlog } from '../types/chatlog';
import { model } from '../types/models';
import { promptAssistant } from './OpenAi';
import { promptFlash, promptPro } from './Gemini';

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
  }
  // default. TODO: error handling
  return log;
};
