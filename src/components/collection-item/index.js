import React from "react";
import CustomButton from "../CustomButton";
import "./index.scss";
import { addItemToCart,  } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItemToCart(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
