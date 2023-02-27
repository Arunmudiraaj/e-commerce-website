import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../../App";
import { merchArr } from "../../App";
import { Table } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/CartContext";


const ProductDetails = () => {
  const params = useParams();
  const id = Number(params.productId);
  const allProducts = productsArr.concat(merchArr);
  const product = allProducts.find((element) => element.id === id);
  const discount = Math.floor(Math.random() * (90 - 10)) + 10;

  const cart = useContext(CartContext)
  const addToCart = ()=>{
    
    const item = { id : product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl
    }
    cart.addItem(item)
   
  }

  return (
    <>
      <div className="m-2 p-3">
        <h1 className="text-center font-monospace">{product.title}</h1>
        <p className="text-center text-danger">{discount}% OFF</p>
        <p className="text-center text-success">
          ${product.price} only. Grab the offer now!
        </p>
        <Table responsive>
          <tbody>
            <tr className="text-center">
              <td>
                <img src={product.imageUrl} alt="img" />
              </td>
              <td>
                <img src={product.imageUrl} alt="img" />
              </td>
              <td>
                <img src={product.imageUrl} alt="img" />
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <div className="text-center"> <Button onClick={addToCart}>Add To Cart</Button> </div> */}
        <h2 className="m-2 mt-5">Reviews by our customers</h2>
        <div className="m-2 p-3">
            <div>
            <strong className="text-primary">Arun</strong>
            <p>Good product. Must Buy</p>
            </div>
            <div>
            <strong className="text-primary">Jack Sparrow</strong>
            <p>I will rate this 4 stars out of 5</p>
            </div>
            <div>
            <strong className="text-primary">Riya Aggarwal</strong>
            <p>Amazing album. I would recommend it for sure </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
