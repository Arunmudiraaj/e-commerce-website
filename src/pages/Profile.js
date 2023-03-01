import React from 'react'
import Form from 'react-bootstrap/Form';
import { useRef, useContext} from 'react';
import axios from "axios";
import CartContext from '../store/CartContext';
import { Card } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const Profile = () => {
    const cart = useContext(CartContext)
    const newPassword = useRef()
    const changePasswordHandler = ()=>{
        const changedPassword = newPassword.current.value
        const token = cart.loginId
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBKapgE7Pb3Ne5XkIDTLmV25RB4T71Cg6s',{
            idToken: token,
            password : changedPassword,
            returnSecureToken: true
        }).then(data=>{
            console.log(data)
        })

    }
  return (
    <Card className="bg-info p-2 mx-auto text-center col-md-6 col-lg-4  mt-5">
    <Card.Body>
      <Card.Title>Your Password</Card.Title>
      <InputGroup className="mb-3 w-75 mx-auto">
        <Form.Control
          type="password"
          ref={newPassword}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button onClick={changePasswordHandler} variant="warning">
          change Password
        </Button>
    </Card.Body>

  </Card>
  )
}

export default Profile