import React from 'react';
import Styles from './Link.module.css';

const Link = ({ className, urlto, children}) => {
   return <a href={urlto} className={`${Styles.Link} ${Styles[className]}`}>{children}</a>
}

export default Link;