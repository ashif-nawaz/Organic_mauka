import React from 'react';
import Styles from './Heading.module.css';

const Heading = ({ children }) => {
   return <h3 className={Styles.Heading}>{children}</h3>
}

export default Heading;