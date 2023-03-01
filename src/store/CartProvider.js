import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartContext = {
  items: [],
  totalAmount: 0,
  loginId : ''
};

const cartReducer = (state, action) => {
 
  if (action.type === "ADD") {
   
    const alreadyPresentIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (alreadyPresentIndex === -1) {
      const updatedTotal = state.totalAmount + action.item.price;
      const updatedItems = state.items.concat(action.item);
      return { items: updatedItems, totalAmount: updatedTotal };
      
    } else {
      alert("already present")
   
    }
    
  }
  if (action.type === "REMOVE") {
    const updatedItems =[...state.items]
    const requiredIndex = updatedItems.findIndex(item=>item.id===action.id)
    const updatedTotal = state.totalAmount - state.items[requiredIndex].price
    updatedItems.splice(requiredIndex,1)
    return { items: updatedItems, totalAmount: updatedTotal };
  }

  if (action==='EMPTY'){
    return { items: [], totalAmount: 0 };
  }
  if (action.type==='TOKEN_UPDATE'){
    
    return {...state, loginId: action.tokenId}
  }
  if (action==='TOKEN_REMOVE'){
    console.log("logging out")
    return {...state, loginId: ''}
  }

  return {...state}
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartContext
  );
  const addItemHandler = (item) => {
  
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const emptyHandler = () => {
    dispatchCartAction("EMPTY");
  };
  const updateTokenHandler = (id) => {
   
    dispatchCartAction({ type: "TOKEN_UPDATE", tokenId: id });
  };
  const removeTokenHandler = () => {
    dispatchCartAction("TOKEN_REMOVE");
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    loginId : cartState.loginId,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    empty : emptyHandler,
    updateToken : updateTokenHandler,
    removeToken : removeTokenHandler

  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
