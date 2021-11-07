import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BehaviorSubject } from "rxjs";

export const cookieCount$ = new BehaviorSubject(0);

export const useObserverable = (observerable$) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const subscription = observerable$.subscribe((value) => setState(value));

    return () => subscription.unsubscribe();
  }, [observerable$, setState]);

  return state;
};

export const CookieContext = createContext({
  cookieCount$,
});

export const useCookie = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const value = useMemo(() => ({ cookieCount$ }), []);

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
};
