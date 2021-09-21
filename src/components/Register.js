 
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { registerInitiate } from '../redux/actions';
import "./Register.css"
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

export default function Register() {

    const [register,setRegister]=useState({
        email:"",
        password:""
    });
    const {user}=useSelector(state => state.data);
    const history=useHistory();
    const dispatch=useDispatch();
    useEffect(() => {
        if(user)
        {
            history.push('/');
        }

    }, [user,history])

    const userHandler=(event)=>{
        const {name,value}=event.target;
        setRegister(register=>({
            ...register,
            [name]:value

        }))
    }

    const handleClick=(event)=>
    {
        console.log("I was clicked");
        dispatch(registerInitiate(register.email,register.password));
        setRegister({
            email:"",
            password:""
        });
        event.preventDefault();
        
    }
    
    return (
        <div className="register">
         <div className="register_container">
          <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="whatsapplogo">
           </img>
           <form method="POST">
            <input type="email" name="email" placeholder="provie email" value={register.email} required onChange={userHandler}/>
            <input type="password" name="password" placeholder="*****" value={register.password} required onChange={userHandler}/>
            </form>
    
            <Button onClick={handleClick}>Register</Button>
        </div>
        </div>
    )
}
