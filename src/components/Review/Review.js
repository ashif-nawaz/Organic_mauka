import React from "react";
import Styles from "./Review.module.css";
import quote from "../../assets/quote.png";
import women from "../../assets/women.png";
import Desc from "../Welcome/Desc/Desc";
import Switcher from "../PresentedBy/Switcher/Switcher";
import Star from "../UI/Star/Star";


const Review = (props) => {
  return (
    <section className={Styles.Review}>
      <div className={Styles.Container}>
        <div className={Styles.Quote}>
          <img src={quote} alt="quote" />
        </div>
        <div className={Styles.Profile}>
          <img src={women} alt="women" />
        </div>
          <p className={Styles.Name}>John Doe</p>
          <div className={Styles.Stars}>
             <Star />
             <Star />
             <Star />
             <Star />
             <Star />
          </div>
        <Desc>
          Thank you for all the produce and products that you deliver each week.
          You make my life so easy and bring goodness into our family eating.
          I've been roasting a lot of brussel squots lately.
        </Desc>
        <Switcher className="Bordered" />
      </div>
    </section>
  );
};

export default Review;
