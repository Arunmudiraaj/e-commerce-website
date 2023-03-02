import React from "react";
import NavigationBar from "./components/NavigationBar";
import ItemsContainer from "./components/Catalogue/ItemsContainer";
import "./App.css";
import { Button } from "react-bootstrap";
import FooterElement from "./components/Footer/FooterElement";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const productsArr = [
  { id : 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  { id : 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  { id : 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  { id : 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

export const merchArr = [
  {
    id : 5,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id : 6,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
];




function App() {
  const [cartOpen, setCartOpen] = useState(false) 
  const cartOpenHandler = ()=>{
    
    setCartOpen(pre=>!pre)
  }
  const cart = useContext(CartContext)
  const isLoggedIn = !!cart.loginId
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login')
    }
  })
  return ( 
  

    <div>
      <NavigationBar cartToggle={cartOpenHandler}/>
      {cartOpen&& <Cart cartToggle={cartOpenHandler}/>}
      <h1
        className="container bg-gray text-center pt-4 mt-5 my-2"
        style={{ "font-size": "3.5rem" }}
      >
        The Generics
      </h1>
      <section className="music">
        <div
          className="text-center mx-auto mt-5 mb-2"
          style={{ "font-size": "1.5rem" }}
        >
          MUSIC
        </div>
        <ItemsContainer data={productsArr} />
      </section>

      <section className="merch">
        <div
          className="text-center mx-auto mt-5 mb-2"
          style={{ "font-size": "1.5rem" }}
        >
          MERCH
        </div>
        <ItemsContainer data={merchArr} />
      </section>

      <div className="text-center m-4">
        <Button variant="warning" onClick={cartOpenHandler}>See The Cart</Button>
      </div>

      <FooterElement/>
    </div>
  
 
  );
}

export default App;
