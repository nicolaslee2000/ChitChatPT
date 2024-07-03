import './PromptInput.css';

export const PromptInput = ({
  promptText,
  displayText,
  setPromptText,
  setDisplayText,
}: {
  promptText: string;
  displayText: string;
  setPromptText: React.Dispatch<React.SetStateAction<string>>;
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromptText(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisplayText(displayText + '\n\n' + promptText);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        id='prompt-input-form'
      >
        <input
          type='text'
          id='prompt-input'
          value={promptText}
          onChange={handleChange}
        ></input>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};
