import React from 'react'

import { Form, Button} from "react-bootstrap";

function InputForm() {
  return (
    <React.Fragment>
      <Form className="my-form">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </React.Fragment>
  )
}

export default InputForm
