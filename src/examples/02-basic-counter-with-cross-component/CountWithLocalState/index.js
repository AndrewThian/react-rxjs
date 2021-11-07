import { useState } from "react";
import CookieButton from "./CookieButton";
import CookieDisplay from "./CookieDisplay";

const CounterWithLocalState = () => {
  const [cookies, setCookies] = useState(0);

  const increment = () => setCookies(cookies + 1);
  const decrement = () => {
    if (cookies < 0) return;
    setCookies(cookies - 1);
  };

  const reset = () => setCookies(0);

  return (
    <div>
      <CookieDisplay cookies={cookies} />
      <CookieButton increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
};

export default CounterWithLocalState