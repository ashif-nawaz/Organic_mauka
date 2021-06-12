import React from "react";
import NavItem from "../NavItem/NavItem";
import Styles from "./NavList.module.css";

const NavList = ({ isMobile }) => {
  return (
    <nav className={ `${Styles.Nav} ${isMobile ? Styles.isMobile : ''}`}>
      <ul className={Styles.NavList}>
        <NavItem urlto="/home" className="Active">
          Home
        </NavItem>
        <NavItem urlto="/products">Products</NavItem>
        <NavItem urlto="/blog">Blog</NavItem>
        <NavItem urlto="/about-us">About Us</NavItem>
        <NavItem urlto="/contact" className="Contact">
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};

export default NavList;
