import { useState } from "react";

const CountWithLocalState = () => {
  const [cookies, setCookies] = useState(0);

  return (
    <div className="App">
      <h1>Basic cookie counter (Local state)</h1>
      <p>number of cookies: {cookies}</p>
      <button
        onClick={() => {
          setCookies(cookies + 1);
        }}
      >
        click to get cookie
      </button>
      <button
        onClick={() => {
          if (cookies === 0) return;
          setCookies(cookies - 1);
        }}
      >
        click to eat cookie
      </button>
      <button
        onClick={() => {
          setCookies(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CountWithLocalState;
