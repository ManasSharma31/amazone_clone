import { Button ,makeStyles} from '@material-ui/core';

import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/actions';

const useStyle = makeStyles((theme) => ({
    

    root: {
        display: "flex",
        margin: "10px auto",
        backgroundColor: "white",
        justifyContent: "center",
        padding: "10px",
        marginRight: "10px"
    },
    product_img: {
        flex: "0.3",
        objectFit: "contain",
        borderRight: "1px solid lightgrey",
        marginRight: "10px",
        minWidth: "200px",
        width: "50%",
        height: "300px"
    },
    info: {
        flex: "0.7",
        display: "flex",
        flexDirection: "column",
        "& Button": {
            backgroundColor: "yellow !important",
            width: "150px",
            marginTop: "20px",
            textTransform: "inherit !important"
        }
        
    },
    rating: {
        display: "flex"
    },
    detail: {
        marginTop: "20px",
    },
    list: {
        marginTop: "20px",
    }
}));


export default function CheckoutProduct(props) {
    const { id, title, price, rating, specifications, details, image } = props;
    const dispatch = useDispatch();
    const classes = useStyle();
    const removeItem=()=>
    {
        
        dispatch(removeFromBasket(id));
        
    }
    return (
        <div className={classes.root} key={id}>
            <img src={image} className={classes.product_img} alt="item_image"></img>
            <div className={classes.info}>
                    <h1>{title}</h1>
                    <p><strong>$</strong>{price}</p>
                    <div className={classes.rating}>
                {
                    Array(rating).fill().map((_,index)=>(
                        <p key={index}>⭐</p>
                    ))
                }
                </div>
                <ul className={classes.list}>
                {
                    
                    specifications.map((s,index)=>(
                        <li key={index}>{s}</li>
                    )

                    )
    
                }
                </ul>
                <p className={classes.detail}>{details}</p>
                <Button onClick={removeItem} variant="outlined">Remove Item</Button>

    

            
            </div>
            </div>
    )
}
