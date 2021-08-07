import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item";
import "./index.scss";
const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce(
    (accumaletedQuantity, cartItem) =>
      accumaletedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-bloack">
          <span>Product</span>
        </div>
        <div className="header-bloack">
          <span>Description</span>
        </div>
        <div className="header-bloack">
          <span>Quantity</span>
        </div>
        <div className="header-bloack">
          <span>Price</span>
        </div>
        <div className="header-bloack">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="total">
        <span>Total: Rs {total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
