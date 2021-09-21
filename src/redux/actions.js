import * as types from './actionTypes';
import {auth} from '../firebase.js';

const registerStart=()=>({
    type:types.REGISTER_START
})
const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user
})
const registerError=(error)=>({
    type:types.REGISTER_ERROR,
    payload:error
})

export const registerInitiate=(email,password)=>{
    return function (dispatch)
    {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(res =>{
            console.log("User is",res);
             dispatch(registerSuccess(res));
        })
        .catch(error=>{
            dispatch(registerError(error.message))
        })
    }
}

const loginStart=()=>({
    type:types.LOGIN_START
})
const loginSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user
})
const loginError=(error)=>({
    type:types.LOGIN_ERROR,
    payload:error
})
const logoutStart=()=>({
    type:types.LOGOUT_START
})
const logoutSuccess=(user)=>({
    type:types.LOGOUT_SUCCESS,
    payload:user
})
const logoutError=(error)=>({
    type:types.LOGOUT_ERROR,
    payload:error
})

export const setUser = (user) => ({
    type: types.SET_USER,
    payload:user
 
})

export const addToBasket=(product)=>(
    {
        type:types.ADD_TO_BASKET,
        payload:product
    }
)
export const removeFromBasket=(id)=>(
    {
        type:types.REMOVE_FROM_BASKET,
        payload:id
    }
)

export const loginInitiate=(email,password)=>{
    return function (dispatch)
    {
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email,password)
        .then(res =>{
            console.log("User is",res);
             dispatch(loginSuccess(res));
        })
        .catch(error=>{
            dispatch(loginError(error.message))
        })
    }
}

export const logoutInitiate=()=>{
    return function (dispatch)
    {
        dispatch(logoutStart());
        auth
        .signOut()
        .then(res =>{
             dispatch(logoutSuccess(null));
        })
        .catch(error=>{
            dispatch(logoutError(error.message))
        })
    }
}

