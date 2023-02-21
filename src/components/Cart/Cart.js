import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';

const Cart = (props) => {
  const cart = useContext(CartContext)
  const purchaseHandler = ()=>{
    if (cart.items.length===0){
      alert("No items in the cart. Add items to purchase")
      return
    }
    else{
      alert("Thank you for purchasing")
      cart.empty()
    }
  }

  return (
    <Fragment>
        <div style={{'zIndex': '100'}} className='overflow-auto position-fixed h-100 w-50 bg-dark border border-light border-2 p-2 rounded-3 top-10  end-0'>
          <div className='w-100 d-flex justify-content-end'><Button onClick={()=>{props.cartToggle()}} variant='danger btn-sm float-right'>X</Button></div>
          
          <h2 className='text-white mx-auto bg-primary rounded-3 text-center mt-1 mb-3 font-monospace'>Cart</h2>

          <Table striped  hover size="sm" responsive='sm'>
      <thead className='text-center text-white'>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
        
        {cart.items.map(element => <tr key={element.id} className='text-center'>
          <td className='align-middle'> <CartItem title={element.title} url={element.imageUrl}/> </td>
          <td className='align-middle text-white'>{element.price}</td>
          <td className='align-middle'>{<input defaultValue={1} max={500} min={1} type={'number'}  className='small w-50  m-auto text-center'/>}</td>
          <td className='align-middle'><Button onClick={()=>{cart.removeItem(element.id)}} className='btn-sm' variant='danger'>Remove</Button></td>
        </tr>)}
      </tbody>
    </Table>
    {cart.items.length===0 && <p className='text-white w-100 text-center'>--Your Cart Is Empty--</p>}
    <p className='text-end p-2  mt-2 font-family-base'><strong className='p-1 text-end rounded-1 bg-success text-white'>Total : $ {cart.totalAmount}</strong></p>

    <div className='text-center w-100'><Button onClick={purchaseHandler} className='align-middle mt-3' variant='warning'>Purchase</Button></div>
    

        </div>
      
       
    </Fragment>
  )
}

export default Cart