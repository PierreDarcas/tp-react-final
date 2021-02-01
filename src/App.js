import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import FourOhFour from "./pages/fourOhFour";
import Converter from "./pages/converter";

const App = () => (
  
  <div className="App">
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
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
