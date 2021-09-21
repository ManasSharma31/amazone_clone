import { makeStyles } from '@material-ui/core'
import React, { useState , useEffect} from 'react'
import images from './BannerImages/SliderImages'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyle=makeStyles(theme=>({
    slider:{
        display:"flex",
        position:"relative",
        width:"100%",
        // alignItems:"center",
        height:"90vh",
        // justifyContent:"center",
        zIndex:"-1",
        marginBottom:"-150px",
        [theme.breakpoints.down('xs')]:{
            height:"40vh"
        }
    },
    slider__backward:{
        position:"absolute",
        top:"30%",
        left:"32px",
        cursor:"pointer",
        [theme.breakpoints.up('md')]: {
            color:"grey !important",
          }

    },
    slider__forward:{
        position:"absolute",
        top:"30%",
        right:"32px",
        cursor:"pointer",
        [theme.breakpoints.up('md')]: {
            color:"grey !important",
          }
    },
    
    slider__image:{
        
        objectFit:"contain",
        zIndex:-1,
        minWidth:"400px",
        width:"100%",
        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
    
    
    },
    slide:{
        opacity:"0",
        transitionDuration: "1s ease" 

    },
    active:{
        opacity:"1",
        transitionDuration:"1s ease",
        transform:"scale(1.08)"
    }
}))
function Slider() {

    const classes=useStyle();
    let length=images.length;
    const [current, setCurrent] = useState(0);
    const incr=()=>{
        setCurrent(current=>current===length-1?0:current+1)
    }
    const dec=()=>{
        setCurrent(current=>current===0?length-1:current-1)
    }
    useEffect(() => {
        let timer = setInterval(incr,5000);
        return () => {
            clearInterval(timer);
        }
    }, [current])
    return (

        <div className={classes.slider} >
        <ArrowBackIosIcon onClick={dec} className={classes.slider__backward}/>
        <ArrowForwardIosIcon onClick={incr} className={classes.slider__forward}/>
        
            {
                images.map((image,index)=>{
                    return (
                        <div className={`classes.slide ${index===current && "classes.active"}`} key={index}>
                        {index===current && (<img src={image} alt="banners" className={classes.slider__image}/>)}
                        
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider
