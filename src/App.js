import "./App.css";
import ReadOnlyMode from "./components/ReadOnlyMode";
import ActionMode from "./components/ActionMode";
import EditMode from "./components/EditMode";
import EditFormFieldMode from "./components/EditFormFieldMode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ReadOnlyMode />
          </Route>
          <Route path="/actionmode">
            <ActionMode />
          </Route>
          <Route path="/editmode">
            <EditMode />
          </Route>
          <Route path="/editfield">
            <EditFormFieldMode />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
