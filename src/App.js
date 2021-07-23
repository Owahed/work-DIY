import './App.css';
import Template from './Components/Template';
import ImageTemplate from './Components/ImageTemplate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ImageMap from './Components/ImageMap';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Template />
          </Route>
          <Route path="/home/:imgId">
            <Template />
          </Route>
          <Route path="/imageTemplate">
            <ImageTemplate />
          </Route>
          <Route path="/imageMap">
            <ImageMap/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
