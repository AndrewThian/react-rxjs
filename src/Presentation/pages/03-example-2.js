export const Example2 = () => {
  return (
    <>
      <section>
        <p>Cross component communication example</p>
        <p className="fragment fade-in-then-semi-out">
          Local state version needs to 'lift' the state to a parent component
        </p>
        <p className="fragment fade-in-then-semi-out">
          while rxjs is free to consume it across different components
        </p>
      </section>
      <section data-auto-animate>
        <p>First to get out of the way, move the react state</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="3-10">
            <script type="text/template">
              {`const cookieCounter$ = new BehaviorSubject(0);

const CountWithRxJS = () => {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    cookieCounter$.subscribe((cookieCount) => {
      setCookies(cookieCount);
    });
  }, []);

  // ...
};`}
            </script>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p>into a custom hook that we can use everywhere</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="3-13|16">
            <script type="text/template">
              {`const cookieCounter$ = new BehaviorSubject(0);
 
const useObserverable = (observerable$) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const subscription = observerable$.subscribe((value) => setState(value));

    return () => subscription.unsubscribe();
  }, [observerable$, setState]);

  return state;
};

const CountWithRxJS = () => {
  const count = useObserverable(cookieCount$);

  // ...
};`}
            </script>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p>Our 'lifted' local state example can make use of the custom hook</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="2-10|20,24">
            <script type="text/template">
              {`const CounterWithLocalState = () => {
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

const CookieButton = ({ increment, decrement, reset }) => {
  // ...
};

const CookieDisplay = ({ cookies }) => {
  // ...
};`}
            </script>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p>to decouple both the display and the button components</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="12,15,22,25">
            <script type="text/template">
              {`const CounterWithRxJS = () => {
  return (
    <div>
      <CookieDisplay />
      <CookieButton />
    </div>
  );
};

/* CookieDisplay.js */

import { cookieCount$, useObserverable } from "../store";

const CookieDisplay = () => {
  const cookies = useObserverable(cookieCount$);

  // ...
};

/* CookieButton.js */

import { cookieCount$, useObserverable } from "../store";

const CookieButton = () => {
  const cookies = useObserverable(cookieCount$);

  // ...
}`}
            </script>
          </code>
        </pre>
      </section>
      <section>
        <p className="fragment fade-in-then-semi-out">However, we still need to import the observables everywhere</p>
        <p className="fragment fade-in-then-semi-out">which links components via dependencies</p>
        <p className="fragment fade-in-then-semi-out">if only there was a way pass references without directly importing the observable</p>
      </section>
    </>
  );
};
