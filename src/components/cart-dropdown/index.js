import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import CartItem from "../cart-item";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
