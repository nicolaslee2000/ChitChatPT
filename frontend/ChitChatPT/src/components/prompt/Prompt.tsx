import './Prompt.css';
import { PromptInput } from './PromptInput';

interface PromptProps {
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
  promptText: string;
  displayText: string;
  setPromptText: React.Dispatch<React.SetStateAction<string>>;
}

export const Prompt = ({
  promptText,
  displayText,
  setDisplayText,
  setPromptText,
}: PromptProps) => {
  return (
    <div id='prompt-wrapper'>
      <PromptInput
        displayText={displayText}
        promptText={promptText}
        setDisplayText={setDisplayText}
        setPromptText={setPromptText}
      ></PromptInput>
    </div>
  );
};
