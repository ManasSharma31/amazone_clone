import React from 'react'

import { Button, makeStyles} from '@material-ui/core';
import { addToBasket } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';

const useStyle=makeStyles((theme)=>({
    product:{
        display:"flex",
        flexDirection:"column",
        height:"400px",
        width:"100%",
        margin: "5px",
        transition:"transform 2s ease-in",
        backgroundColor:"white",
        zIndex:1,
        position:"relative",
        padding: "10px",
        "& :hover": {
             transform:"scale(1.02)",

        },
        "& img":{
            marginTop:"10px",
            objectFit:"contain",
            maxHeight:"200px",
            width:"100%"
        },
        "& Button":{
            backgroundColor:"yellow !important",
            width:"contained",
            position:"absolute",
            left:"30%",
            bottom:"10px"
        }

    },
    rating:{
        display:"flex"
    }
}))

function Product(props) {
   const {id,title ,price , rating , specifications ,details, image}=props;
   const {user,basket}=useSelector(state=>state.data);
   console.log("User is",user);
   const history=useHistory();
   const dispatch=useDispatch();
   const addItem=()=>{
    //    if(user!==null)
       
       props = {
           ...props,
           id:`id+${basket?.length}`
       }
       dispatch(addToBasket(props));
    //    }
    //    else{
    //        history.push("/login");
    //    }
   }
    const classes=useStyle();
    return (
        
        <div className={classes.product}>
        <Link style={{textDecoration:"none",color:"inherit"}} to={`/product/${id}`}>
        <h3>{title}</h3>
        <p>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className={classes.rating}>
        {
            Array(rating).fill().map((_,index)=>(
                <p key={index}>⭐</p>
            ))
        }
        </div>
        <img src={image} alt=""></img>
        
        </Link>
        <Button onClick={addItem}>Add to Basket</Button>
        </div>
    )
}

export default Product
