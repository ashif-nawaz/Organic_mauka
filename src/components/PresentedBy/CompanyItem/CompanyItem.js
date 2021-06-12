import React from "react";
import Styles from "./CompanyItem.module.css";

const CompanyItem = ( { image, alt }) => {
  return (
    <div className={Styles.CompanyItem}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default CompanyItem;
