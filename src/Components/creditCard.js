import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
// import MainScreen from './screens/MainScreen';
import MainScreen from '../screens/MainScreen'
class creditCard extends Component {
  
  
  constructor(props) {
    super(props);
   this.state = { counter: 0 };
  
  }
  

    render() { 
        return (
          <div className="text-left">
    <h1>Creediit card</h1>
    <MainScreen />
        </div>
);
    }
    
    
}


 
export default creditCard;