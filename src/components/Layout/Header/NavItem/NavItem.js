import React from 'react';
import Styles from './NavItem.module.css';

const NavItem = ({ children, className, urlto }) => {
   return <li className={`${Styles.NavItem} ${Styles[className]}`}>
        <a href={urlto}>{children}</a>
   </li>
}

export default NavItem;