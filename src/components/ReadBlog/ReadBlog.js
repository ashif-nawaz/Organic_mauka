import React from "react";
import Styles from "./ReadBlog.module.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import BlogItem from "./BlogItem/BlogItem";

const ReadBlog = (props) => {
  return (
    <section className={Styles.ReadBlog}>
      <div className={Styles.Container}>
        <BlogItem
          image={blog1}
          title="Blog Post One"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod."
        />
        <BlogItem
          image={blog2}
          title="Blog Post Two"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod."
        />
        <BlogItem
          image={blog3}
          title="Blog Post Three"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod."
        />
      </div>
    </section>
  );
};

export default ReadBlog;
