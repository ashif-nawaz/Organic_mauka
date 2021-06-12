import React from 'react';
import Styles from './Input.module.css';


const Input = ({ input, btnTitle }) => {
   return (
       <div className={Styles.Input}>
           <input {...input} />
           <button className={Styles.Button}>{btnTitle}</button>
       </div>
   )
}

export default Input;