export const Example3 = () => {
  return (
    <>
      <section>
        <p className="fragment semi-fade-out">Using react context to pass observables</p>
        <p className="fragment fade-in-then-semi-out">since observables are simply objects,</p>
        <p className="fragment fade-in-then-semi-out">
          it's possible to use react context and providers to pass observables
        </p>
      </section>
      <section data-auto-animate>
        <p>Create a simple react context and provider</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="1-3|7-17|5">
            <script type="text/template">
              {`export const CookieContext = createContext({
  cookieCount$
});

export const useCookie = () => useContext(CookieContext)

export const CookieProvider = ({ children }) => {
  const value = useMemo(() => ({ cookieCount$ }), [])

  return (
    <CookieContext.Provider 
      value={value}
    >
      {children}
    </CookieContext.Provider>
  )
}`}
            </script>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <p>Apply the provider and consume the observables</p>
        <pre data-id="code-animation">
          <code className="hljs" data-trim data-line-numbers="3,8|13,20">
            <script type="text/template">
              {`const CounterWithRxJS = () => {
  return (
    <CookieProvider>
      <div>
        <CookieDisplay />
        <CookieButton />
      </div>
    </CookieProvider>
  );
};

const CookieButton = () => {
  const { cookieCount$ } = useCookie(); 
  const cookies = useObserverable(cookieCount$);

  // ...
};

const CookieDisplay = () => {
  const { cookieCount$ } = useCookie(); 
  const cookies = useObserverable(cookieCount$);

  // ...
};`}
            </script>
          </code>
        </pre>
      </section>
    </>
  );
};
