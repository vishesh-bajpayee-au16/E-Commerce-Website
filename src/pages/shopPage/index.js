import React from "react";
import shopData from "../../database/shopData";
import CollectionPreview from "../../components/preview-collection";
import { useState } from "react";
const ShopPage = () => {
  const state = {
    collections: shopData,
  };

  return (
    <div className="shop-page">
      {state.collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
