import React from 'react'
import {makeStyles} from '@material-ui/core';
import Product from './Product';
import products from '../utils';

const useStyle=makeStyles(theme=>({
  products:{
    display:"flex",
    flexWrap:"wrap",
    "& >*":{
      flex:"1 1 20em"
    }
  }
}))

function Productlist() {
    const classes=useStyle();
    return (
        <div className={classes.products}>
    {
      products.map((item)=>(
        <Product key={item.id} id={item.id} title={item.title} price={item.price} specifications={item.specification} details={item.detail} image={item.image} rating={item.rating} />
      ))
    }
    </div>
    )
}

export default Productlist
