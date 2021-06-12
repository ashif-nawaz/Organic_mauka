import React from "react";
import Link from "../UI/Link/Link";
import Styles from "./Intro.module.css";
import bannerLogo from "../../assets/bannerLogo.png";
import rose from "../../assets/rose.png";

const Intro = (props) => {
  return (
    <section className={Styles.Intro}>
      <div className={Styles.Col}>
        <p className={Styles.Tagline}>Healthy life with</p>
        <h3 className={Styles.Heading}>Nature Organic</h3>
        <p className={Styles.Desc}>
          Vegitables are the edible parts of the plant that is used in cooking
          and can be eaten raw.
        </p>
        <Link urlto="/products" className="BC">Explore Now</Link>
      </div>
      <div className={Styles.Col}>
        <img className={Styles.Logo} src={bannerLogo} alt="logo" />
        <img className={Styles.Rose} src={rose} alt="rose" />
      </div>
    </section>
  );
};

export default Intro;
