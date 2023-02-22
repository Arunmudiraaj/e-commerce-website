import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function About(){
    return <>
         <Navbar style={{'zIndex': '1'}} fixed="top" bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link > <NavLink className={({isActive})=>isActive? 'bg-black px-2 py-1 rounded-3':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/'} end>Home</NavLink> </Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'bg-black px-2 py-1 rounded-3':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/store'} end>Store</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'bg-black px-2 py-1 rounded-3':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/about'} end>About</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <h1 className="m-5">The About Page</h1>
     </>
}