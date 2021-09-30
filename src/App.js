import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProviser';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';

const promise = loadStripe(
  'pk_test_51JfEZUBnijroR2rD1ankQnS6dw6rlvqbxeT9eJIx9Dc9e8IW8owDYPrxAeTWNC8FRYs46atKPmO6yHiaATMYDNPm00P1FBccfa',
);

export default function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>', authUser);

      if (authUser) {
        //The user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch, user]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders/>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
