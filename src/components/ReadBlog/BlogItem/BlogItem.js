import React from "react";
import Desc from "../../Welcome/Desc/Desc";
import Styles from "./BlogItem.module.css";


const BlogItem = ({ image, title, desc}) => {
  return (
    <div className={Styles.BlogItem}>
      <div className={Styles.Image}>
        <img src={image} alt="" />
      </div>
      <div className={Styles.DescCont}>
        <h4 className={Styles.Heading}>{title}</h4>
        <Desc>
          {desc}
        </Desc>
        <p className={Styles.ReadMore}>+Read More</p>
      </div>
    </div>
  );
};

export default BlogItem;
