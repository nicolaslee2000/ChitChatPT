import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import styles from './MainChat.module.css';
import { PromptInput } from '../../components/prompt-input/PromptInput';
import { chatlog } from '../../types/chatlog';
import { basicPrompt } from '../../api/ApiController';

export default function MainChat() {
  const [chatLogs, setChatLogs] = useState<chatlog[]>([]);
  const getResponse = async (prompt: string) => {
    const log = await basicPrompt(prompt, 'OpenAi');
    setChatLogs([...chatLogs, log]);
  };

  return (
    <div id={styles.mainChatWrapper}>
      <ChatPanel chatlogs={chatLogs}></ChatPanel>
      <PromptInput getResponse={getResponse}></PromptInput>
    </div>
  );
}
