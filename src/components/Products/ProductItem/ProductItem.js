import React from "react";
import Styles from "./ProductItem.module.css";

const ProductItem = ({ image, alt}) => {
  return (
    <div className={Styles.ProductItem}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default ProductItem;
