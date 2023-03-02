import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { Link } from "react-router-dom";
import axios from "axios";
const Item = (props) => {
  const cart = useContext(CartContext)
   const addToCart = ()=>{
    const item = { id : props.item.id,
      title: props.item.title,
      price: props.item.price,
      quantity: 1,
      imageUrl: props.item.imageUrl
    }
    cart.addItem(item)
    const mail = localStorage.getItem('email')
    const updated = mail.replace('@','')
    const updatedMailReq = updated.replace('.','')
    console.log(updatedMailReq)
    axios.post(`https://crudcrud.com/api/b9fa0fbb40374d8c83f41cf9ba0e83b1/${updatedMailReq}`, item)

  }
  return (
    
    <Card className='shadow-lg m-1 mx-auto' style={{ width: '18rem' }} >
      <Card.Header>Album 1</Card.Header>
      <Link to={`/store/${props.item.id}`}>
      <Card.Img variant="top" src={props.item.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title> {props.item.title}</Card.Title>
        <p className='bg-danger'>$ {props.item.price}</p>
        <Button onClick={addToCart} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
   
  )
}

export default Item