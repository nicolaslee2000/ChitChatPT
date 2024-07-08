import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import styles from './MainChat.module.css';
import basicPrompt from '../../api/OpenAiDummy';
import { PromptInput } from '../../components/prompt-input/PromptInput';

export default function MainChat() {
  const [chatResponse, setChatResponse] = useState('');
  const getResponse = async (prompt: string) => {
    const response = await basicPrompt(prompt);
    setChatResponse(response);
  };

  return (
    <div id={styles.mainWrapper}>
      <ChatPanel displayText={chatResponse}></ChatPanel>
      <PromptInput getResponse={getResponse}></PromptInput>
    </div>
  );
}
