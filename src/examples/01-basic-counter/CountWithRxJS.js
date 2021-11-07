import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

const cookieCounter$ = new BehaviorSubject(0);

const CountWithRxJS = () => {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    cookieCounter$.subscribe((cookieCount) => {
      setCookies(cookieCount);
    });
  }, []);

  return (
    <div className="App">
      <h1>Basic cookie counter (rxjs)</h1>
      <p>number of cookies: {cookies}</p>
      <button
        onClick={() => {
          cookieCounter$.next(cookies + 1);
        }}
      >
        click to get cookie
      </button>
      <button
        onClick={() => {
          if (cookies === 0) return;
          cookieCounter$.next(cookies - 1);
        }}
      >
        click to eat cookie
      </button>
      <button
        onClick={() => {
          cookieCounter$.next(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CountWithRxJS;
