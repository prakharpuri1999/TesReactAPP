import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Hello from './Components/Hello';
import Test1 from './Components/Test1'
import {Navbar,Nav} from 'react-bootstrap'
import {BrowserRouter as Router , Switch, Route,Link} from 'react-router-dom'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


function App() {
  
  return (
    <Router>
    <div className="App">
      <div >
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
    <Nav className="mr-auto">
       <Nav.Link><Link to="/hello">Hello</Link></Nav.Link>
      <Nav.Link><Link to="/counter">Counter</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </div>
      <Switch>
        <Route path="/" exact component={Test1} />
        <Route path="/hello"  component={Hello} />
        <Route path="/counter"  component={Counter} />
     </Switch>

    </div>
    </Router>
  );
  
}

export default App;
