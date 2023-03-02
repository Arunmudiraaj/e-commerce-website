import React from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const NavigationBar = (props) => {
  const cart = useContext(CartContext)
  return (
    <div>
      <Navbar style={{'zIndex': '1'}} fixed="top" bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link > <NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/'} end>Home</NavLink> </Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/store'} end>Store</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/about'} end>About</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/login'} end>Login</NavLink></Nav.Link>
          </Nav>
          <Button className="position-fixed top-10 end-0" onClick={()=>{props.cartToggle()}} variant="dark">cart <Badge className="ms-1">{cart.items.length}</Badge> </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
