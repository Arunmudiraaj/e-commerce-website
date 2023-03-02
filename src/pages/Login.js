import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import axios from "axios";
import { useContext } from "react";
// import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import CartContext from "../store/CartContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const cart = useContext(CartContext)
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
  const loginHandler = () => {
    setLoading(true)
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKapgE7Pb3Ne5XkIDTLmV25RB4T71Cg6s',
    {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
    }
    )
    .then(res=>{
      console.log(cart)
    
      cart.updateToken(res.data.idToken)
      localStorage.setItem('token',res.data.idToken)
      localStorage.setItem('email', emailRef.current.value)
      navigate('/store')

    })
    .catch(err=>{
      alert(err.response.data.error.message)
    })
  
  };
  return (
    <div>

    <Card className="bg-info p-2 mx-auto text-center col-md-6 col-lg-4  mt-5">
      <Card.Header>{'Log In'}</Card.Header>
      <Card.Body>
        <Card.Title>Your Email</Card.Title>
        <InputGroup variant={"password"} className="mb-3 w-75 mx-auto">
          <Form.Control
            type="text"
            ref={emailRef}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Card.Title>Your Password</Card.Title>
        <InputGroup variant={"password"} className="mb-3 w-75 mx-auto">
          <Form.Control
            type="password"
            ref={passwordRef}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        {!loading ? (
          <Button onClick={loginHandler} variant="warning">
            {'Log In'}
          </Button>
        ) : (
          <p>Logging In...</p>
        )}
      </Card.Body>
    </Card>
    </div>
  );
}
