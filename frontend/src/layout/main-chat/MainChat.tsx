import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import styles from './MainChat.module.css';
import basicPrompt from '../../api/OpenAiDummy';
import { PromptInput } from '../../components/prompt-input/PromptInput';
import { chatlog } from '../../types/chatlog';

export default function MainChat() {
  const [chatLogs, setChatLogs] = useState<chatlog[]>([]);
  const getResponse = async (prompt: string) => {
    const response = await basicPrompt(prompt);
    setChatLogs([...chatLogs, { prompt: prompt, response: response }]);
  };

  return (
    <div id={styles.mainWrapper}>
      <ChatPanel chatlogs={chatLogs}></ChatPanel>
      <PromptInput getResponse={getResponse}></PromptInput>
    </div>
  );
}
