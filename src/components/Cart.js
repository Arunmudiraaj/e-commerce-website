import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CartItem from './Footer/CartItem';

const cartElements = [

  {
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  quantity: 2,
  },
  {
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  quantity: 3,
  },
  {
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  quantity: 1,
  }
  ]
const Cart = (props) => {
  return (
    <Fragment>
        <div style={{'zIndex': '1'}} className='position-fixed h-100 w-50 bg-dark border border-2 border-dark p-2 rounded-3 top-10  end-0'>
          <div className='w-100 d-flex justify-content-end'><Button onClick={()=>{props.cartToggle()}} variant='danger btn-sm float-right'>X</Button></div>
          
          <h2 className='mx-auto bg-primary rounded-3 text-center my-2 font-monospace'>Cart</h2>

          <Table striped  hover size="sm" responsive='sm'>
      <thead className='text-center'>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
        
        {cartElements.map(element => <tr className='text-center'>
          <td className='align-middle'> <CartItem title={element.title} url={element.imageUrl}/> </td>
          <td className='align-middle'>{element.price}</td>
          <td className='align-middle'>{element.quantity}</td>
          <td className='align-middle'><Button className='btn-sm' variant='danger'>Remove</Button></td>
        </tr>)}
      </tbody>
    </Table>

        </div>
      
       
    </Fragment>
  )
}

export default Cart