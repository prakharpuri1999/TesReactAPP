import React, { Component } from "react";

// import MainScreen from './screens/MainScreen';
import MainScreen from "../screens/MainScreen";
class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <MainScreen />
      </div>
    );
  }
}

export default creditCard;
