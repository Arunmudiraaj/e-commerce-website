import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import axios from "axios";
export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [createAcc, setCreateAcc] = useState(false);
  const createAccHandler = () => {
    setCreateAcc(true);

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
        setCreateAcc(false);
        console.log(data);
      })
      .catch((err) => {
        setCreateAcc(false);
        setTimeout(() => {
          alert(err.response.data.error.message);
        }, 50);

        console.log(err);
      });

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <Card className="bg-info p-2 mx-auto text-center col-md-6 col-lg-4  mt-5">
      <Card.Header>Sign Up</Card.Header>
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
        {!createAcc ? (
          <Button onClick={createAccHandler} variant="warning">
            Create Account
          </Button>
        ) : (
          <p>Sending Request...</p>
        )}
      </Card.Body>
      <Card.Footer className="text-muted">
        Login with existing account
      </Card.Footer>
    </Card>
  );
}
