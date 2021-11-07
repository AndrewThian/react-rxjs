export const Example1 = () => {
  return (
    <>
      <section>
        <p>First example, a simple counter from local state to rxjs</p>
      </section>
      <section data-auto-animate>
        <p>Local state version of simple counter</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="|2,9-11">
            <script type="text/template">
              {`const CountWithLocalState = () => {
  const [cookies, setCookies] = useState(0);

  return (
    <div className="App">
      <h1>Basic cookie counter (Local state)</h1>
      <p>number of cookies: {cookies}</p>
      <button
        onClick={() => {
          setCookies(cookies + 1);
        }}
      >
        click to get cookie
      </button>
    </div>
  );
};

export default CountWithLocalState;
`}
            </script>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p>RxJS version of simple counter</p>
        <pre data-id="code-animation">
          <code
            className="hljs"
            data-trim
            data-line-numbers="1|6-10|17-19|8|4"
          >
            <script type="text/template">
              {`const cookieCounter$ = new BehaviorSubject(0);

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
    </div>
  );
};

export default CountWithRxJS;`}
            </script>
          </code>
        </pre>
      </section>
      <section>
        <p>We did increase the complexity, but</p>
        <p className="fragment fade-in">
          in return we get cross <span className="fragment highlight-green">component communication</span>
        </p>
        <p className="fragment fade-in-then-semi-out">which we will see in the next example</p>
      </section>
    </>
  );
};
