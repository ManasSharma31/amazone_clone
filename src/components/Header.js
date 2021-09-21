import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import {Link,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/actions';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton } from '@material-ui/core';





const useStyle=makeStyles((theme)=>({
    header:{
        display:"flex",
        backgroundColor:"black",
        height:"70px",
        alignItems:"center",
        position:"sticky",
        top:"0",
        zIndex:"2",
        color:"white",
        
    },
    header__img:{
        objectFit:"contain",
        width:"100px",
        margin:"0 20px"
    },
    header__search:{
        flex:"1",
        display:"flex",
        alignItems:"center",
        "& input":{
            // border:"none",
            outline:"none",
            width:"100%",
            height:"25px",
            borderWidth:"0px"
            // backgroundColor:"pink"
        }
    },
    header__searchIcon:{
        backgroundColor:"#cd9024 !important",
        padding:"2px"
    },
    options:{
        display:"flex",
        alignItems:"center",
        "& *":{
            display:"flex",
            flexDirection:"column",
            color:"white",
            marginLeft:"10px",
            marginRight:"5px",
            "& p":{
                fontWeight:"800"
            },
            "& > small":{
                fontSize:"10px"
            }
        }
    }

}))

function Header() {

    const classes=useStyle();
    const dispatch=useDispatch();
    const {user,basket}=useSelector(state => state.data);
    const count=basket?basket.length:0;
    const handleAuth=()=>{
        if(user)
        {
            dispatch(logoutInitiate());
        }
    }

    return (
        <div className={classes.header}>
        <Link to="/">
        <img className={classes.header__img} src="https://th.bing.com/th/id/R.a28d9b93b2f3bc70aa90bebf022ee6e0?rik=BGf51ucKuQFSeg&riu=http%3a%2f%2fimg.talkandroid.com%2fuploads%2f2014%2f06%2fAmazon_Logo_033.jpg&ehk=pKJaAcWlm6wPYP5Lyx%2fUP%2bKuEEjlyG4T1NXZBZKXXFU%3d&risl=&pid=ImgRaw&r=0" alt="logo"></img>
        </Link>
        <div className={classes.header__search}>
        <input type="text" placeholder="Search your item here..."></input>
        <SearchIcon className={classes.header__searchIcon}/>
        </div>
        <div className={classes.options}>
        <Link to={user?"/":"/login"} style={{textDecoration:"none"}}>
        <div>
        <small>{`Hello ${user?.email || "Guest"}`}</small>
        <p onClick={handleAuth}>{user?"Sign Out":"Sign In"}</p>
        </div>
        </Link>
    
        <div>
        <small>Return</small>
        <p>& Orders</p>
        </div>
        <div>
        <small>Your </small>
        <p>Prime</p>
        </div>

        </div>
        <Link to="/checkout" style={{textDecoration:"none",color:"inherit"}}>
        <ShoppingBasketIcon style={{marginRight:"4px"}}/>
        </Link>
        <p style={{marginRight:"5px"}}>{count}</p>

        </div>
    )
}

export default Header
