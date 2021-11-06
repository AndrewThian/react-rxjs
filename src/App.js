import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicCounter from "./examples/basic-counter";
import BasicCounterWithInput from "./examples/basic-counter-with-input";
import FetchDataWithInput from "./examples/fetch-data-with-input";
import FetchDataWithInputAndSelector from "./examples/fetch-data-with-input-and-selector";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="header">
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
            <li>
              <Link to="/fetch-data-with-input-and-selector">Fetch Data With Input And Selector</Link>
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
          <Route path="/fetch-data-with-input-and-selector">
            <FetchDataWithInputAndSelector />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
