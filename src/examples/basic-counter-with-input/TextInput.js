import { inputMessage$, useObserverable } from "./store";

const Input = () => {
  const inputMessage = useObserverable(inputMessage$);

  return (
    <div>
      <span>Say something:</span>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => {
          const value = e.target.value;
          inputMessage$.next(value);
        }}
      />
    </div>
  );
};

export default Input;
