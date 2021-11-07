import { BrowserRouter as Router, Switch } from "react-router-dom";
import Presentation from "./Presentation";
import BasicCounter from "./examples/01-basic-counter";
import BasicCounterWithCrossComponent from "./examples/02-basic-counter-with-cross-component";
import BasicCounterWithReactContext from "./examples/03-basic-counter-with-react-context";
import RefactorLocalStateExercise from "./examples/04-refactor-local-state-exercise";

import GenshinApp from "./notes/03-fetch-data-with-input-and-selector-refactor";

import { registerRoute, getNavigation, getRoute } from "./routes";

registerRoute("/basic-counter-redux", BasicCounter);
registerRoute("/basic-counter-local", BasicCounter);
registerRoute("/basic-counter-rxjs", BasicCounter);
registerRoute(
  "/basic-counter-with-cross-component-local",
  BasicCounterWithCrossComponent
);
registerRoute(
  "/basic-counter-with-cross-component-rxjs",
  BasicCounterWithCrossComponent
);
registerRoute(
  "/basic-counter-with-react-context-local",
  BasicCounterWithReactContext
);
registerRoute(
  "/basic-counter-with-react-context-rxjs",
  BasicCounterWithReactContext
);
registerRoute("/local-state-refactoring-demo", RefactorLocalStateExercise);
registerRoute("/solution", GenshinApp);

const App = () => {
  return (
    <Router>
      <Presentation />
      <div className="examples">
        <nav className="header">
          <ul>{getNavigation()}</ul>
        </nav>
        <Switch>{getRoute()}</Switch>
      </div>
    </Router>
  );
};

export default App;
