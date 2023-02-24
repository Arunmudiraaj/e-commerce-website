import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

const InputForm = (props) => {
    const enteredEmail = useRef()
    const enteredPassword = useRef()
    const enteredPhone = useRef()


    const userSubmitted = (e)=>{
        e.preventDefault()
        props.onSubmit({
            email : enteredEmail.current.value,
            password : enteredPassword.current.value,
            phone : enteredPhone.current.value
        })
    }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={enteredEmail} type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={enteredPassword} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control ref={enteredPhone} type="tel" placeholder="xxxx-xxx-xxxx" />
      </Form.Group>
      <Button onClick={userSubmitted} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default InputForm