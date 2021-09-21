import React from 'react'
import {makeStyles} from '@material-ui/core';
const useStyle=makeStyles(theme=>({
    option:{
        display:"flex",
        flexDirection:"column",
        color:"white",
        marginLeft:"10px",
        "& p":{
            fontWeight:"800"
        },
        "& > small":{
            fontSize:"10px"
        }
    }
}))
function Options({title,subTitle}) {
    const classes=useStyle();
    return (
        <div className={classes.option}>
        <small>{subTitle}</small>
        <p>{title}</p>
            
        </div>
    )
}

export default Options
