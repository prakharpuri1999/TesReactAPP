import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import {ButtonToolbar} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

class Hello extends Component {
  name="sdfnlsd ";
  arr1=[1,2]
  arr2=["1data","2data"]
  handleClick = () => {
    console.log('this is:', this.arr1);
  }

  handleSubmit = (event) => {
    console.log(event.target.pass.value)  
    this.name=event.target.username.value
    console.log(this.name)
    event.target.username.value=""     
    event.target.pass.value=""
    event.preventDefault();

  }
  
  showdata(){
        console.log(this.arr1)
  }
    render() { 
        return (
          <div className="text-left">
          {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
            />
          </label>
          <Button variant="primary" type="submit">Primary</Button>

        </form>
        <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button> */}
      <Form onSubmit={this.handleSubmit} className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="username"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="pass"/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form><br />
    <div>{this.arr1.map(t => <Card key={t}  style={{ width: '18rem' }}>{t}</Card>)}
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
    </div>
    <h2>{this.name}</h2>

        </div>
);
    }
    
}

 
export default Hello;