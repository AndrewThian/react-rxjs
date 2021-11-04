import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicCounter from "./examples/basic-counter";
import BasicCounterWithInput from "./examples/basic-counter-with-input";
import FetchDataWithInput from "./examples/fetch-data-with-input";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/basic-counter">Basic Counter</Link>
            </li>
            <li>
              <Link to="/basic-counter-with-input">Basic Counter With Input</Link>
            </li>
            <li>
              <Link to="/fetch-data-with-input">Fetch Data With Input</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/basic-counter">
            <BasicCounter />
          </Route>
          <Route path="/basic-counter-with-input">
            <BasicCounterWithInput />
          </Route>
          <Route path="/fetch-data-with-input">
            <FetchDataWithInput />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
