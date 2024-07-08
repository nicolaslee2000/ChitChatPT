import { useState } from 'react';
import { ChatPanel } from '../../components/chat-panel/ChatPanel';
import { Prompt } from '../../components/prompt/Prompt';
import './Main.css';
import basicPrompt from '../../api/OpenAiDummy';

export default function Main() {
  const [displayText, setDisplayText] = useState('');
  const completion = async (prompt: string) => {
    const reply = await basicPrompt(prompt);
    setDisplayText(reply);
  };

  return (
    <div id='main-wrapper'>
      <ChatPanel displayText={displayText}></ChatPanel>
      <Prompt completion={completion}></Prompt>
    </div>
  );
}
