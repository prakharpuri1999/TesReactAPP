import React from "react";
import "./App.scss";
import creditCard from "./Components/creditCard";
import Dashboard from "./Components/dashboard";
import github from "./Components/gitHub";
import login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/creditCard" component={creditCard} />
        <Route path="/gitHub" component={github} />
        <Route path="/Login" component={login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
