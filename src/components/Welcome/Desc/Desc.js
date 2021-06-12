import React from "react";
import Styles from "./Desc.module.css";

const Desc = ({ children }) => {
  return (
    <p className={Styles.Desc}>
      {children}
    </p>
  );
};

export default Desc;
