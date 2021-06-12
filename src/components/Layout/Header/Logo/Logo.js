import React from "react";
import logo from '../../../../assets/logo.png';
import Styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={Styles.Logo}>
      <img src={logo} alt="logo" />
      <span>organic</span>
    </div>
  );
};

export default Logo;
