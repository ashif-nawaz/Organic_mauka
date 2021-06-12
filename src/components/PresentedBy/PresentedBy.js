import React from "react";
import Desc from "../Welcome/Desc/Desc";
import Heading from "../Welcome/Heading/Heading";
import Companies from "./Companies/Companies";
import Styles from "./PresentedBy.module.css";
import Switcher from "./Switcher/Switcher";




const PresentedBy = (props) => {
  return (
    <section className={Styles.PresentedBy}>
      <div className={Styles.Container}>
        <Heading>Proudly presented by</Heading>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Desc>
      </div>
      <Companies />
      <Switcher />
    </section>
  );
};

export default PresentedBy;
