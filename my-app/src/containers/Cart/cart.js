import React from "react";
import { StyledCart, CartButtons } from "./cart.style";
import CartItems from "./CartItems/cartitems";

const Cart = () => {

  const ADD_ITEM = "ADD_ITEM";
  
  return (
    <StyledCart>
      <h1>Shopping Cart</h1>
      {console.log(store.getState())}
      <CartItems />
      <CartButtons>asds</CartButtons>
    </StyledCart>
  );
};

export default Cart;
