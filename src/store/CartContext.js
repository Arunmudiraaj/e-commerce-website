import React from "react";

const CartContext = React.createContext(
    {
        items : [],
        totalAmount : 0,
        loginId : '',
        addItem : (item)=>{},
        removeItem : (id)=>{},
        empty : ()=>{},
        updateToken : (id)=>{},
        removeToken: ()=>{}

    }
)
export default CartContext