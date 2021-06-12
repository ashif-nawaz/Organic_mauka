import React from 'react';
import BurgerMenu from '../MobileNav/BurgerMenu/BurgerMenu';
import Styles from './Header.module.css';
import Logo from './Logo/Logo';
import NavList from './NavList/NavList';


const Header = ({ onToggleNav }) => {
   return (
       <header className={Styles.Header}>
              <div className={Styles.Inner}>
                  <Logo />
                  <NavList isMobile={false} />
                  <BurgerMenu onToggleNav={onToggleNav}/>
              </div>
       </header>
   )
}

export default Header;