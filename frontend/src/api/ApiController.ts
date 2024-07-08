import { TextContentBlock } from 'openai/resources/beta/threads/messages.mjs';
import { chatlog } from '../types/chatlog';
import { model } from '../types/models';
import { promptAssistant } from './OpenAi';

export const basicPrompt = async (
  prompt: string,
  model: model
): Promise<chatlog> => {
  const log = { prompt: '', response: '' };

  switch (model) {
    case 'OpenAi':
      for (const message of await promptAssistant(prompt).then((msg) =>
        msg!.data.reverse()
      )) {
        if (message.role === 'user') {
          log.prompt = (message.content[0] as TextContentBlock).text.value;
        }
        if (message.role === 'assistant') {
          log.response = (message.content[0] as TextContentBlock).text.value;
        }
      }
      return log;
  }
  // default. TODO: error handling
  return log;
};
