import { useCookie, useObserverable } from "../store";

const CookieDisplay = () => {
  const { cookieCount$ } = useCookie(); 
  const cookies = useObserverable(cookieCount$);

  return (
    <div>
      <h1>Basic cookie counter (Local state)</h1>
      <p>number of cookies: {cookies}</p>
    </div>
  );
};

export default CookieDisplay;
