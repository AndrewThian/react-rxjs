import { cookieCount$, useObserverable } from "../store";

const CookieButton = () => {
  const cookies = useObserverable(cookieCount$);

  return (
    <div>
      <button
        onClick={() => {
          cookieCount$.next(cookies + 1);
        }}
      >
        click to get cookie
      </button>
      <button
        onClick={() => {
          if (cookies === 0) return;
          cookieCount$.next(cookies - 1);
        }}
      >
        click to eat cookie
      </button>
      <button
        onClick={() => {
          cookieCount$.next(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CookieButton;
