import React from "react";
import Intro from "./components/Intro/Intro";
import Layout from "./components/Layout/Layout";
import PresentedBy from "./components/PresentedBy/PresentedBy";
import Products from "./components/Products/Products";
import Welcome from "./components/Welcome/Welcome";
import ReadBlog from "./components/ReadBlog/ReadBlog";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Review from "./components/Review/Review";

const App = (props) => {
  return (
    <Layout>
      <Intro />
      <Welcome
        tagline="Welcome to Nature"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Products />
      <PresentedBy />
      <Review />
      <NewsLetter />
      <Welcome
        tagline="Read Our Blog"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="MT-2"
      />
      <ReadBlog />

    </Layout>
  );
};

export default App;
