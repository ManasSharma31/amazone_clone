


import './App.css';


import Header from './components/Header';
import Slider from './components/Slider';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Productlist from './components/Productlist';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import { auth } from './firebase';

import SingleProduct from './components/SingleProduct';
import { useEffect } from 'react';
import { setUser } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() =>
  {
    auth.onAuthStateChanged(authUser => {
      if (authUser)
      {
        dispatch(setUser(authUser))
      }
      else {
        dispatch(setUser(null))
      }
    })
    }
  , [])
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
    <Route path="/" exact>
      <Slider/>
      <Productlist/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/checkout">
    <Checkout/>
    </Route>
    <Route path="/product/:id">
      <SingleProduct/>
    </Route>
    <Route path="/register">
      <Register/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
