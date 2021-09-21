  
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginInitiate } from '../redux/actions';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle=makeStyles(theme=>({
    login:{
        margin: "12px auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    login_container:{
    display:"flex",
    lineHeight:"1.7",
    width:"300px",
    flexDirection:"column",
    padding: "20px",
  backgroundColor:" white",
  border:"1px solid greyscale",
  borderRadius: "10px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
  "& > button":
  {
    textTransform: "inherit !important",
    backgroundColor: "#EFBD3F !important",
    marginTop: "30px",
  }
    },
    login__img:{
        objectFit: "contain",
        height: "70px",
        width:"100%",
        marginBottom: "20px"
    },
    login_register:{
        width:"300px",
        marginTop:"50px",
        "& > button":{
        textTransform: "inherit !important",
        backgroundColor:"grey !important",
        width:"100%",
        marginTop: "10px"
        }

    }
}))
export default function Login() {

    const [login,setLogin]=useState({
        email:"",
        password:""
    });

    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.data);
    const history=useHistory();

    useEffect(()=>{
        if(user)
        {
            history.push("/")
        }
    },
    [history,user])

    const userHandler=(event)=>{
        const {name,value}=event.target;
        setLogin(login=>({
            ...login,
            [name]:value

        }))


    }

    const logIn=(event)=>
    {
        dispatch(loginInitiate(login.email,login.password));
        setLogin({
            email:"",
            password:""
        });
        event.preventDefault();


        
    }
    const gotoRegister=()=>{
        history.push("/register");
    }

    const classes=useStyle();

    return (
        <div className={classes.login}>
        <Link to="/">
        <img className={classes.login__img} src="https://th.bing.com/th/id/R.a28d9b93b2f3bc70aa90bebf022ee6e0?rik=BGf51ucKuQFSeg&riu=http%3a%2f%2fimg.talkandroid.com%2fuploads%2f2014%2f06%2fAmazon_Logo_033.jpg&ehk=pKJaAcWlm6wPYP5Lyx%2fUP%2bKuEEjlyG4T1NXZBZKXXFU%3d&risl=&pid=ImgRaw&r=0" alt="logo"></img>
        </Link>
         <div className={classes.login_container}>
          
           <form method="POST">
           <h1>Sign In</h1>
           <label for="email" style={{fontWeight:"700"}}>Email</label><br/>
            <input type="email" name="email" required value={login.email} style={{width:"98%"}} onChange={userHandler}/><br/>
            <label for="password" style={{fontWeight:"700"}}>Password</label><br/>
            <input type="password" name="password" style={{width:"98%"}} required value={login.password} onChange={userHandler}/><br/>
            </form>
            <p style={{fontSize:"10px",marginTop:"10px"}}><strong>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</strong></p>
            <Button onClick={logIn}>Continue</Button>
            </div>

            <div className={classes.login_register}>
            <p>New to Amazon ?</p>
            <hr></hr>
            <Button onClick={gotoRegister}>Create Your Amazon Account</Button>
            </div>
        </div>
    )
}
