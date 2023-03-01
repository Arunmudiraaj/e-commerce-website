import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import axios from "axios";
import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from "../store/CartContext";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const cart = useContext(CartContext)
  const [create, setCreate] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
  const createToggleHandler = ()=>{
    setCreate(pre=>!pre)
  }
  const logoutHandler = ()=>{
    setIsLoggedIn(false)
    cart.removeToken()
  }
  const createAccHandler = () => {

    if (create){

   
    setLoading(true);

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKapgE7Pb3Ne5XkIDTLmV25RB4T71Cg6s",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      )
      .then((data) => {
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setTimeout(() => {
          alert(err.response.data.error.message);
        }, 50);

        console.log(err);
      });

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  else{
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKapgE7Pb3Ne5XkIDTLmV25RB4T71Cg6s',
    {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
    }
    )
    .then(res=>{
      console.log(cart)
      setIsLoggedIn(true)
      cart.updateToken(res.data.idToken)
      navigate('/profile')

    })
    .catch(err=>{
      alert(err.response.data.error.message)
    })
  }
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="ms-auto">
          {!isLoggedIn&&<Button href="#pricing">Login</Button>}
            {isLoggedIn&&<Nav.Link href="#features">Profile</Nav.Link>}
            {isLoggedIn&&<Button onClick={logoutHandler} href="#pricing">Logout</Button>}
          </Nav>
        </Container>
      </Navbar>
    <Card className="bg-info p-2 mx-auto text-center col-md-6 col-lg-4  mt-5">
      <Card.Header>{create? 'Sign Up':'Log In'}</Card.Header>
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
          <Button onClick={createAccHandler} variant="warning">
            {create? 'Sign Up':'Log In'}
          </Button>
        ) : (
          <p>Sending Request...</p>
        )}
      </Card.Body>
      <Card.Footer className="text-muted">
      {create? 'Login with existing account ':"Don't have an account? Sign up "} <span className="text-danger text-decoration-underline" style={{cursor:"pointer"}} onClick={createToggleHandler}>here</span>
      </Card.Footer>
    </Card>
    </div>
  );
}
