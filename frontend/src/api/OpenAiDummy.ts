const basicPrompt = async (prompt: string): Promise<string> => {
  if (!prompt) {
    return 'null';
  }
  await new Promise((e) => setTimeout(e, 1000));
  return (
    "Dummy placement for chat completion i.e. 'hi how can I help you?' Prompt was: " +
    prompt
  );
};

export default basicPrompt;
