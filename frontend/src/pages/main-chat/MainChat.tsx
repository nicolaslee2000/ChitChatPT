import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import styles from './MainChat.module.css';
import { PromptInput } from '../../components/prompt-input/PromptInput';
import { chatlog } from '../../types/chatlog';
import { basicPrompt } from '../../api/ApiController';
import { model } from '../../types/models';
import ModelRadioButton from '../../components/model-radioButton/ModelRadioButton';

export default function MainChat() {
  const [chatLogs, setChatLogs] = useState<chatlog[]>([]);
  const [model, setModel] = useState<model>('OpenAi');
  const getResponse = async (prompt: string) => {
    const log = await basicPrompt(prompt, model);
    setChatLogs([...chatLogs, log]);
  };
  const models: model[] = ['OpenAi', 'Gemini-Flash', 'Gemini-Pro', 'Claude'];
  return (
    <div id={styles.mainChatWrapper}>
      <ChatPanel chatlogs={chatLogs}></ChatPanel>
      <PromptInput getResponse={getResponse}></PromptInput>
      {/* temp radio buttons to change between models */}
      <div>
        {models.map((m, index) => {
          return (
            <ModelRadioButton
              key={index}
              id={m}
              setModel={setModel}
              model={model}
            ></ModelRadioButton>
          );
        })}
      </div>
    </div>
  );
}
