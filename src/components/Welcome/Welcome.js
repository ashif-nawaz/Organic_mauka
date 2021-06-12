import React from "react";
import Styles from "./Welcome.module.css";
import leaf from "../../assets/leaf.png";
import Heading from "./Heading/Heading";
import Desc from "./Desc/Desc";

const Welcome = ({tagline, desc, className }) => {
  return (
    <section className={`${Styles.Welcome} ${Styles[className]}`}>
      <div className={Styles.Container}>
        <img className={Styles.Leaf} src={leaf} alt="leaf" />
        <Heading>{tagline}</Heading>
        <Desc>
          {desc}
        </Desc>
      </div>
    </section>
  );
};

export default Welcome;
