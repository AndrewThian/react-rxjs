import { BrowserRouter as Router, Switch } from "react-router-dom";
import BasicCounter from "./examples/basic-counter";
import BasicCounterWithInput from "./examples/basic-counter-with-input";
import FetchDataWithInput from "./examples/fetch-data-with-input";
import FetchDataWithInputAndSelector from "./examples/fetch-data-with-input-and-selector";
import FetchDataInputSelectorRefactor from "./examples/fetch-data-with-input-and-selector-refactor";
import { GenshinProvider } from "./examples/fetch-data-with-input-and-selector-refactor/GenshinProvider";
import { registerRoute, getNavigation, getRoute} from './routes';


registerRoute("/basic-counter", BasicCounter);
registerRoute("/basic-counter-with-input", BasicCounterWithInput);
registerRoute("/fetch-data-with-input", FetchDataWithInput);
registerRoute("/fetch-data-input-selector", FetchDataWithInputAndSelector);
registerRoute("/fetch-data-input-selector-2", FetchDataInputSelectorRefactor);

const App = () => {
  return (
    <Router>
      <GenshinProvider>
        <div>
          <nav className="header">
            <ul>{getNavigation()}</ul>
          </nav>
          <Switch>{getRoute()}</Switch>
        </div>
      </GenshinProvider>
    </Router>
  );
};

export default App;
