import { useState } from 'react';
import { ChatPanel } from '../../chat-panel/ChatPanel';
import { Prompt } from '../../prompt/Prompt';
import './Main.css';

export default function Main() {
  const [promptText, setPromptText] = useState('');
  const [displayText, setDisplayText] = useState('');

  return (
    <div id='main-wrapper'>
      <ChatPanel displayText={displayText}></ChatPanel>
      <Prompt
        displayText={displayText}
        promptText={promptText}
        setPromptText={setPromptText}
        setDisplayText={setDisplayText}
      ></Prompt>
    </div>
  );
}
