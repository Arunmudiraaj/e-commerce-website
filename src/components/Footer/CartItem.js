import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const CartItem = (props) => {
  return (
    <Fragment>
       <Container className='m-1'>
        <Row xs={1}>
            <Col>
             <img width={'40px'} src={props.url} alt='item_img'/>
            </Col>
            <Col className=''>
            <span className='small'>{props.title}</span>
            </Col>
        </Row>
       </Container>
    </Fragment>
  )
}

export default CartItem