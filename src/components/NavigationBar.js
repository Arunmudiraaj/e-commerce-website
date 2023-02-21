import React from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../store/CartContext";
import { useContext } from "react";
const NavigationBar = (props) => {
  const cart = useContext(CartContext)
  return (
    <div>
      <Navbar style={{'zIndex': '1'}} fixed="top" bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button onClick={()=>{props.cartToggle()}} variant="dark">cart <Badge className="ms-1">{cart.items.length}</Badge> </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
