import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getBasketSum } from '../redux/reducer';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: "10px",
        padding: "10px",
        marginLeft:"10px",
    },

    subtotal: {
        display: "flex",
        alignItems: "center",
        "& input": {
            marginRight:"5px"
        }
    }
}))

export default function Subtotal() {
    const classes = useStyle();

    const { basket } = useSelector(state => state.data);
    return (
        <div className={classes.root}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items) : <small>{value}</small></p>
                        <small className={classes.subtotal}><input type="checkbox"/> This order has a gift pack .</small>
                    </>
                )}
                decimalScale={2}
                value={getBasketSum(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}
