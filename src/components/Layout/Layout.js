import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import MobileMenu from "./MobileNav/MobileMenu";

const Layout = ({ children }) => {
  const [ navShown, setNavShown ] = useState(false);

  const toggleMobileMenu = (e) => {
     setNavShown((state) => !state);
  }

  return (
    <>
      {<MobileMenu onClose={toggleMobileMenu} inprop={navShown} />}
      <Header onToggleNav={toggleMobileMenu} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
