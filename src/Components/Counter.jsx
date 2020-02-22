import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import { Redirect } from "react-router-dom";

class Counter extends Component {
  name;
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.name=event.target.value
  }
  nav=()=>{
    console.log("any")
    this.props.history.push('/hello')   }
    obj={
        image:"test image"
    }
    render() { 
        return (
          <div>          <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.name}</h2>
        <button onClick={this.nav}>Click</button>
        </div>
            )
    }

}
export default Counter;