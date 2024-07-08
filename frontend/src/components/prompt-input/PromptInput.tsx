import { useState } from 'react';
import styles from './PromptInput.module.css';
import { changeEvent, keyboardEvent } from '../../types/events';

interface PromptInputProps {
  getResponse: (prompt: string) => Promise<void>;
}

export const PromptInput = ({ getResponse }: PromptInputProps) => {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    getResponse(input);
    setInput('');
  };
  return (
    <div id={styles.promptInputWrapper}>
      <input
        id={styles.textInput}
        type='text'
        value={input}
        onChange={(e: changeEvent) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e: keyboardEvent) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      ></input>
      <button
        id={styles.promptButton}
        onClick={() => {
          handleSubmit();
        }}
      >
        send
      </button>
    </div>
  );
};
