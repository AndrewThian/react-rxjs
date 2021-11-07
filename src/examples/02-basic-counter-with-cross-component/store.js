import { useEffect, useState } from "react";
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
