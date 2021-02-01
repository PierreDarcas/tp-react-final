import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import FourOhFour from "./pages/fourOhFour";
import Converter from "./pages/converter";
import AppBar from "./components/Header/AppBar"

const App = () => (
  
  <div className="App">
    <AppBar />
    <Router>
      <Switch>
        <Route exact path="/404">
          <FourOhFour />
        </Route>
        <Route exact path="/">
          <Converter />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
