import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import InputForm from "../components/InputForm";

export default function About(){

  const submitHandler = async (user)=>{
    const response = await fetch('https://e-commerce-site-ab72f-default-rtdb.firebaseio.com/users.json',{
      method: 'POST',
      body: JSON.stringify(user)
    })
    console.log(response)
  }
    return <>
    <div className="p-4">
         <Navbar style={{'zIndex': '1'}} fixed="top" bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link > <NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/'} end> Home</NavLink> </Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/store'} end>Store</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/about'} end>About</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/login'} end>Login</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mt-5 pt-3">
     <InputForm onSubmit={submitHandler} className=""/>
     </div>

     </div>
     </>
}