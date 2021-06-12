import React from 'react';
import Styles from './BurgerMenu.module.css';

const BurgerMenu = ({ onToggleNav }) => {
   return (
       <div className={Styles.BurgerMenu} onClick={onToggleNav} >
          <div className={Styles.Burger}></div>
          <div className={Styles.Burger}></div>
          <div className={Styles.Burger}></div>
       </div>
   )
}

export default BurgerMenu;