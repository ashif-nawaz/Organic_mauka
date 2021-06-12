import React from 'react';
import Styles from './Companies.module.css';
import company1 from '../../../assets/company1.png';
import company2 from '../../../assets/company2.png';
import company3 from '../../../assets/company3.png';
import CompanyItem from '../CompanyItem/CompanyItem';


const Companies = (props) => {
   return (
       <div className={Styles.Companies}>
          <CompanyItem image={company1} alt="company" />
          <CompanyItem image={company2} alt="company" />
          <CompanyItem image={company3} alt="company" />
          <CompanyItem image={company1} alt="company" />
          <CompanyItem image={company2} alt="company" />
       </div>
   )
}

export default Companies;