import React from "react";
import Desc from "../Welcome/Desc/Desc";
import Heading from "../Welcome/Heading/Heading";
import Styles from "./NewsLetter.module.css";
import Subscribe from "./Subscribe/Subscribe";
import giantleaf from '../../assets/giantleaf.png';


const NewsLetter = (props) => {
  return (
    <section className={Styles.NewsLetter}>
      <div className={Styles.GiantLeaf}>
         <img src={giantleaf} alt="leaf" />
      </div>
      <div className={Styles.Container}>
        <Heading>Subscribe to Our Newsletter</Heading>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Desc>
      </div>
      <Subscribe />
    </section>
  );
};

export default NewsLetter;
