import React from "react";
import ReactDOM from "react-dom";
import NavList from "../Header/NavList/NavList";
import Styles from "./MobileMenu.module.css";
import { CSSTransition } from "react-transition-group";

const Backdrop = ({ onClose }) => {
  return <div className={Styles.Backdrop} onClick={onClose}></div>;
};

const Overlay = ({ children, inprop }) => {
  return (
    <CSSTransition
      in={inprop}
      mountOnEnter
      unmountOnExit
      timeout={{
          enter : 500,
          exit : 500
      }}
      classNames={{
          enterActive : Styles['Slide-in'],
          exitActive : Styles['Slide-out']
      }}

    >
      <div className={Styles.Overlay}>
        <NavList isMobile={true} />
      </div>
    </CSSTransition>
  );
};

const MobileMenu = ({ onClose, inprop }) => {
  return (
    <>
      {inprop && ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(<Overlay inprop={inprop} />, document.getElementById("overlay"))}
    </>
  );
};

export default MobileMenu;
