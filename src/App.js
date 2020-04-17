// REQD IMPORTS
import React from "react";
import "./App.scss";
import creditCard from "./Components/creditCard";
import Dashboard from "./Components/dashboard";
import github from "./Components/gitHub";
import login from "./Components/Login";
import corona from "./Components/corona";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// FUNCTION COMPONENT
function App() {
  return (
    <div>
      {/* REQD COMPONENTS ANAD THE ROUTES AS WELL AS THE LINKS THAT IS REQD FOR THAT PARTICULAR COMPONENT */}
      <Router>
        <Dashboard />
        <Switch>
          <Route path="/" exact component={creditCard} />
          <Route path="/creditCard" component={creditCard} />
          <Route path="/gitHub" component={github} />
          <Route path="/Login" component={login} />
          <Route path="/corona" component={corona} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
