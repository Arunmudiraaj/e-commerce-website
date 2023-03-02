import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {AiOutlinePlayCircle} from 'react-icons/ai'
import Table from "react-bootstrap/Table";
import FooterElement from "../components/Footer/FooterElement";

const tours = [{date:'JUL-16', address:'DETROIT, MI', venue:'DTE ENERGY MUSIC THEATRE'},
{date:'JUL-19', address:'TORONTO,ON', venue:'BUDWEISER STAGE'},
{date:'JUL-22', address:'BRISTOW, VA', venue:'JIGGY LUBE LIVE'},
{date:'JUL-29', address:'PHOENIX, AZ', venue:'AK-CHIN PAVILION'},
{date:'JUL-02', address:'LAS VEGAS, NV', venue:'T-MOBILE ARENA'},
{date:'JUL-07', address:'CONCORD, CA', venue:'CONCORD PAVILION'}]

export default function Home() {
  return (
    <>
         <Navbar style={{'zIndex': '1'}} fixed="top" bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link > <NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/'} end>Home</NavLink> </Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/store'} end>Store</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/about'} end>About</NavLink></Nav.Link>
            <Nav.Link ><NavLink className={({isActive})=>isActive? 'text-warning':undefined} style={{'textDecoration': 'none', 'color': 'white'}} to={'/login'} end>Login</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{'background': '#82eedd '}}>
      <h1
        className="container bg-gray text-center pt-4 mt-5 my-2"
        style={{ "font-size": "3.5rem" }}
      >
        The Generics
      </h1>
      <div className="w-100 pt-3 pb-1 text-center mt-3">
      <Button className="mx-auto" variant="outline-primary">Get Our Latest Album</Button>
      </div>
      <div className="w-100 pb-3 text-center">
      <AiOutlinePlayCircle size='4rem'/>
      </div>
      </div>
      <p className="text-center mt-4 mb-0 " style={{'font-size': '2rem', 'fontFamily':'initial'}}>TOURS</p>
      <div className="mx-auto p-2">
      <Table striped>
      <tbody>
       {tours.map(item=> <tr>
          <td>{item.date}</td>
          <td>{item.address}</td>
          <td>{item.venue}</td>
          <td><Button variant="primary">Buy Tickets</Button></td>
        </tr>)}
      </tbody>
      </Table>
      
      </div>
      <FooterElement/>

     </>
  );
}
