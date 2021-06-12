import React from "react";
import Styles from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={Styles.Main}>{children}</main>;
};

export default Main;
