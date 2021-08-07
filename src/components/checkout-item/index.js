import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItem,
  removeItem,
} from "../../redux/actions/cartActions";
import "./index.scss";
const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div onClick={() => dispatch(clearItem(item))} className="arrow">
          &#10094;
        </div>
        <span className="value"> {item.quantity}</span>
        <div onClick={() => dispatch(addItemToCart(item))} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">{item.price}</span>

      <div onClick={() => dispatch(removeItem(item))} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
