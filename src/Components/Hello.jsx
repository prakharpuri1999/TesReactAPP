import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import {ButtonToolbar} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'



class Hello extends Component {
  name="sdfnlsd ";
  arr1=[1,2]
  arr2=["1data","2data"];
   contact=[{
    name:"vikas",
    pno:"934535"
  },{
    name:"Raj",
    pno:"d989324"
  
  }]
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
  
   getdata = async()=>{
    const data=await fetch('http:localhost:4200/getAllMentors-MIMS');
    console.log(data)

  }


    render() { 
        return (
          <div className="text-left">
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
 
<div className="arrdata"> 
  {this.contact.map(t=> <h2 key={t}>{t.name},{t.pno}</h2>)}
</div>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {this.contact.map(t=> <tr key={t}>
    <td>{t.name}</td>
    <td>{t.pno}</td>
    </tr>)}
  </tbody>
</Table>
<button onClick={this.getdata}>get data</button>
        </div>
);
    }
    
}

 
export default Hello;