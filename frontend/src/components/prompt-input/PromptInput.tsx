import { useState } from 'react';
import styles from './PromptInput.module.css';
import { changeEvent } from '../../types/onChange';

interface PromptInputProps {
  getResponse: (prompt: string) => Promise<void>;
}

export const PromptInput = ({ getResponse }: PromptInputProps) => {
  const [input, setInput] = useState('');
  return (
    <div id={styles.promptInputWrapper}>
      <input
        type='text'
        value={input}
        onChange={(e: changeEvent) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          getResponse(input);
        }}
      >
        send
      </button>
    </div>
  );
};
