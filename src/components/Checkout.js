import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';


const useStyle = makeStyles((theme) => ({
    checkout: {
        display: "flex",
        
    },
    subtotal: {
        flex: "0.2"
    },
    first: {
        flex: "0.8",
        borderRight: "1px solid lightgrey",
    },

}))
export default function Checkout() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const {user,basket}=useSelector(state=>state.data);
    
    return (
        <>
            <h3>Hello, {user?.email}</h3>
        <div className={classes.checkout}>
            <div className={classes.first}>
                {basket.length===0 && <h1>Sorry ! You Don't have any item in the basket.</h1>}
                
        {
            basket.map(item=>(
                <CheckoutProduct key={item.id} id={item.id} title={item.title} price={item.price} specifications={item.specifications} details={item.details} image={item.image} rating={item.rating} />

            ))
        }
                
            </div>
            
            <div className={classes.subtotal}>
                <Subtotal />
            </div>
            
         </div>
        </>
    )
}
