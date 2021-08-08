import React from "react";
import "./index.scss";
import CollectionPreview from "../preview-collection";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
