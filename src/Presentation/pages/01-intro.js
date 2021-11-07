export const Intro = () => {
  return (
    <>
      <section>
        <h2>RxJS in the React ecosystem</h2>
      </section>
      <section>
        <h2>What does RxJS bring to react?</h2>
        <p className="fragment fade-in-then-semi-out">
          It provides tools for synchronousity and reactivity
        </p>
        <p className="fragment fade-in-then-semi-out">
          But it leaves UI rendering up to implementation details
        </p>
      </section>
      <section>
        <h2>What does RxJS excel at?</h2>
        <p className="fragment fade-in-then-semi-out">
          Provides configurable and compositional async options
        </p>
        <p className="fragment fade-in-then-semi-out">
          and a strict mental model
        </p>
        <p className="fragment fade-in-then-semi-out">
          To improve velocity when working with async tasks
        </p>
      </section>
      <section>
        <h2>Yet another statement tool?</h2>
        <p className="fragment fade-in-then-semi-out">
          I would express RxJS as a state management tool
        </p>
        <p className="fragment fade-in-then-semi-out">
          With other players such as
        </p>
        <ul>
          <li className="fragment fade-in-then-semi-out">MobX</li>
          <li className="fragment fade-in-then-semi-out">React easy state</li>
        </ul>
      </section>
      <section>
        <p className="fragment semi-fade-out">
          Difference is they both(mobx, react easy state) relies on the react
          ecosystem to handle reactivity
        </p>
        <p className="fragment fade-in">
          whereas RxJS is completely <span className="fragment highlight-green">framework agnostic</span>
        </p>
      </section>
      <section>
        <h2>K, enough talk so how do I use it?</h2>
        <p className="fragment fade-in-then-semi-out">
          if only we have some way to trigger re-rendering whenever a emission
          has happened
        </p>
      </section>
      <section>
        <p>
          Trusty ol' React.setState
        </p>
        <p className="fragment fade-in-then-semi-out">
          There are other ways too but that's for another talk
        </p>
        <p className="fragment fade-in-then-semi-out">example time!</p>
      </section>
      <section>
        <p>
          We'll be going through two examples
        </p>
        <ul>
          <li className="fragment fade-in-then-semi-out">1. simple counter</li>
          <li className="fragment fade-in-then-semi-out">
            2. complex async app
          </li>
        </ul>
      </section>
    </>
  );
};
