import { cookieCount$, inputMessage$, useObserverable } from "./store";

const Display = () => {
  const count = useObserverable(cookieCount$);
  const input = useObserverable(inputMessage$);

  return (
    <div>
      <h1>
        You have {count}
        <span role="img" aria-label="">
          🍪
        </span>
      </h1>
      <p>You said "{input}"</p>
    </div>
  );
};

export default Display;
