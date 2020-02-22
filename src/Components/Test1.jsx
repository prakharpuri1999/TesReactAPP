import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import img from '../Images/Mian-Illustration.png'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Test1 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  clicked(){
    console.log(this)
  }
    render() { 
        return (
            <div className="main-container">
           <div className="row-1" >
          <div className="sub-row1-2">
          <h1 className="heading">Quark Eduaction Devlopment</h1>           
            <ul>
              <li>HOME</li>
              <li>MAKE PAYMENT</li>
              <li>ABOUT US</li>
            </ul>
          </div>
        </div>
     <button onClick={this.clicked}>Click here</button>
        <SimpleRating />
        
           </div>
        );
    }

}
  function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent"  >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(`${newValue}`)
          }}
         
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <Rating name="pristine" value={null} />
      </Box>

    </div>
  );
}
 
export default Test1;