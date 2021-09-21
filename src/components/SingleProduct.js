import React from 'react'
import { useParams } from 'react-router'
import products from '../utils';

import { Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/actions';

const useStyle=makeStyles((theme)=>({
    root:{
        display:"flex",
        
         marginTop:"10px",
         margin:"0 auto",
        width:"90vw",
        justifyContent:"center",
        padding:"10px",
        border:"2px solid black",
        borderRadius:"0px 50px 0px 50px"
    },
    product_img:{
         flex:0.3,
        objectFit:"contain",
        borderRight:"1px solid lightgrey",
        marginRight:"10px",
        minWidth:"200px",
        width:"50%",
        height:"300px"
    },
    info:{
         flex:0.7,
        display:"flex",
        flexDirection:"column",
        "& Button":{
        backgroundColor:"yellow !important",
        width:"150px",
        marginTop:"20px",
        textTransform:"inherit !important"
        }
    },
    rating:{
        display:"flex"
    },
    detail:{
        marginTop:"20px",
    },
    list:{
        marginTop:"20px",
    }
}))
export default function SingleProduct() {
    const {id}=useParams();
    const classes=useStyle();
    const product=products.find((item)=>item.id===id);
    const dispatch=useDispatch();
    const addItem=()=>{
        dispatch(addToBasket(product));
    }
    return (
        <div className={classes.root}>
            <img src={product.image} className={classes.product_img} alt="item_image"></img>
            <div className={classes.info}>
                    <h1>{product.title}</h1>
                    <p><strong>$</strong>{product.price}</p>
                    <div className={classes.rating}>
                {
                    Array(product.rating).fill().map((_,index)=>(
                        <p key={index}>⭐</p>
                    ))
                }
                </div>
                <ul className={classes.list}>
                {
                    
                    product.specification.map((s,index)=>(
                        <li key={index}>{s}</li>
                    )

                    )
    
                }
                </ul>
                <p className={classes.detail}>{product.detail}</p>
                <Button onClick={addItem} variant="outlined">Add To Basket</Button>

            
            </div>
        </div>
    )
}
