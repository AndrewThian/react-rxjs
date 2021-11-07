import { CookieProvider } from "../store";
import CookieButton from "./CookieButton";
import CookieDisplay from "./CookieDisplay";

const CounterWithRxJS = () => {
  return (
    <CookieProvider>
      <div>
        <CookieDisplay />
        <CookieButton />
      </div>
    </CookieProvider>
  );
};

export default CounterWithRxJS;
