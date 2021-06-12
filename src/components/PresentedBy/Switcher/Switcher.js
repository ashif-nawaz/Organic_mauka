import React from 'react';
import Styles from './Switcher.module.css';

const Switcher = ({ className }) => {
   return (
       <div className={`${Styles.Switcher} ${Styles[className]}`}>
           <span></span>
           <span className={Styles.Active}></span>
           <span></span>
           <span></span>
       </div>
   )
}

export default Switcher;