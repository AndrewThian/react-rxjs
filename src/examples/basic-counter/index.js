import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

const cookieCounter$ = new BehaviorSubject(0);

const BasicCookieCounter = () => {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    cookieCounter$.subscribe((cookieCount) => {
      setCookies(cookieCount);
    });
  }, []);

  return (
    <div className="App">
      <h1>Basic cookie counter</h1>
      <p>number of cookies: {cookies}</p>
      <button
        onClick={() => {
          cookieCounter$.next(cookies + 1);
        }}
      >
        click to get cookie
      </button>
    </div>
  );
};

export default BasicCookieCounter;
