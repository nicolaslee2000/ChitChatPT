import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import styles from './MainChat.module.css';
import { PromptInput } from '../../components/prompt-input/PromptInput';
import { chatlog } from '../../types/chatlog';
import { promptAssistant } from '../../api/OpenAi';

export default function MainChat() {
  const [chatLogs, setChatLogs] = useState<chatlog[]>([]);
  const getResponse = async (prompt: string) => {
    const log = await promptAssistant(prompt);

    if (log) {
      setChatLogs([...chatLogs, log]);
      return;
    }
  };

  return (
    <div id={styles.mainChatWrapper}>
      <ChatPanel chatlogs={chatLogs}></ChatPanel>
      <PromptInput getResponse={getResponse}></PromptInput>
    </div>
  );
}
