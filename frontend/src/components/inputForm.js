import React, {useState} from 'react'
import  { useHistory } from 'react-router-dom';

import { Form, Button} from "react-bootstrap";

function InputForm() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory()

  const submit = e => {
    setError(false);
    e.preventDefault();
    fetch("http://localhost:3001/API/contact", {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        message:message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        setError(data.error.msg);
      } else {
        console.log("success");
        if(data.success){
          history.push('/')
        } else {
          console.log("no success? something is off, inspect!");
          setError("unknown error, contact Renato")
        }
      }
    })
    .catch(err => {
      console.error("Error:", err)
    });
  }

  return (
    <React.Fragment>
      <Form className="my-form">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={e=>setMessage(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </React.Fragment>
  )
}

export default InputForm
