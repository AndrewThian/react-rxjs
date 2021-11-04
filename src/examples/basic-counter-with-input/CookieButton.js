import { cookieCount$, useObserverable } from "./store";

const CookieButton = () => {
  const count = useObserverable(cookieCount$);

  return (
    <div>
      <button
        onClick={() => {
          cookieCount$.next(count + 1);
        }}
      >
        Increment{" "}
        <span role="img" aria-label="">
          🍪
        </span>
      </button>
    </div>
  );
};

export default CookieButton;
