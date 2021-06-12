import React from 'react';
import Input from '../../UI/Input/Input';
import Styles from './Subscribe.module.css';



const Subscribe = (props) => {
   return (
       <form className={Styles.Subscribe}>
           <Input 
             btnTitle="Subscribe"
             input={{
                 type : 'email',
                 name : 'email',
                 placeholder: 'Enter your email address'
             }}
           />
       </form>
   )
}

export default Subscribe;