import { useRef, useState } from 'react';
import styles from './PromptInput.module.css';
import { changeEvent, keyboardEvent } from '../../types/events';
import useAutoSizeTextArea from '../../hooks/useAutosizeTextArea';

interface PromptInputProps {
  getResponse: (prompt: string) => Promise<void>;
}

export const PromptInput = ({ getResponse }: PromptInputProps) => {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    getResponse(input);
    setInput('');
  };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeTextArea(textAreaRef.current, input);
  return (
    <div id={styles.promptInputWrapper}>
      <textarea
        id={styles.textInput}
        value={input}
        onChange={(e: changeEvent) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e: keyboardEvent) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
        ref={textAreaRef}
      ></textarea>
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
