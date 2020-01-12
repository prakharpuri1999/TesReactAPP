import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import img from '../Images/Mian-Illustration.png'


class Test1 extends Component {
   
 
    render() { 
        return (
            <div className="main-container">
            <div className="img1">
           {/* <Link to='/hello'> <button >Click for form</button></Link><br /> */}
           <img src={img} alt="main"  /> 
           </div><br />
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
           </div>
        );
    }
    
}
 
export default Test1;