import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_CLAUDE_API_KEY,
});

// as of now claude does not natively support continuous chat. TODO
export const promptSingle = async (prompt: string) => {
  return await anthropic.messages
    .create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })
    .then((response) => {
      if (response.content[0].type === 'text') {
        return response.content[0].text;
      }
      return 'error with claude api';
    });
};
