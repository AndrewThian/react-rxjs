import { useEffect, useState } from "react";
import { store } from "./store";

const CountWithRedux = () => {
  const [cookies, setCookies] = useState(store.getState().value);

  useEffect(() => {
    store.subscribe(() => {
      setCookies(store.getState().value);
    });
  }, []);

  return (
    <div className="App">
      <h1>Basic cookie counter (Redux state)</h1>
      <p>number of cookies: {cookies}</p>
      <button
        onClick={() => {
          store.dispatch({
            type: "counter/incremented",
          });
        }}
      >
        click to get cookie
      </button>
      <button
        onClick={() => {
          if (cookies === 0) return;
          store.dispatch({
            type: "counter/decremented",
          });
        }}
      >
        click to eat cookie
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "counter/reseted",
          });
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CountWithRedux;
