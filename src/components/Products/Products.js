import React from 'react';
import Styles from './Products.module.css';
import productTrans from "../../assets/product-trans.png";
import productColor from "../../assets/product-color.png";
import ProductItem from './ProductItem/ProductItem';

const Products = (props) => {
   return (
       <section className={Styles.Products}>
           <ProductItem image={productTrans} alt="product" />
           <ProductItem image={productColor} alt="product" />
           <ProductItem image={productTrans} alt="product" />
           <ProductItem image={productTrans} alt="product" />
       </section>
   )
}

export default Products;