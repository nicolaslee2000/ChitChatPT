import { model } from '../../types/models';

interface RadioButtonProps {
  id: model;
  setModel: React.Dispatch<React.SetStateAction<model>>;
  model: model;
}

export default function ModelRadioButton({
  id,
  setModel,
  model,
}: RadioButtonProps) {
  return (
    <>
      <input
        type='radio'
        id={id}
        checked={model === id}
        onChange={() => {
          setModel(id);
        }}
      ></input>{' '}
      <label htmlFor={id}>{id}</label>
    </>
  );
}
