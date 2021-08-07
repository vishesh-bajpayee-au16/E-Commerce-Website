import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import CartItem from "../cart-item";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/actions/cartActions";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
