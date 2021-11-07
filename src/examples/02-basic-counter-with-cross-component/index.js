import { useLocation } from "react-router";
import CountWithLocalState from "./CountWithLocalState";
import CountWithRxJS from "./CountWithRxJS";

const BasicCookieCounter = () => {
  const location = useLocation();

  let children;
  if (location.pathname.includes("rxjs")) children = <CountWithRxJS />;
  if (location.pathname.includes("local")) children = <CountWithLocalState />;

  return <div className="App">{children}</div>;
};

export default BasicCookieCounter;
