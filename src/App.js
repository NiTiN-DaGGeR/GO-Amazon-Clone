<<<<<<< Updated upstream
import React from "react";
import "./App.css";
import Header from './Header';
import SubHeader from './SubHeader';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';

function App() {
return (
  <Router>
  <div className="app">
    <SubHeader />
    <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
  </div>
  </Router>
);
=======
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SubHeader from './SubHeader';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Sidebar from './Sidebar';

const promise = loadStripe(
  "pk_test_51MNAgRSEaZplQMyiwfmzA39U6ppUz2N5JYryIbBi68KUWZgCAgOgIjtEoI2mjKDLnZTUSBoZxKU02hD2MPcBYhNT00QprOZbgV"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <SubHeader />
            <Sidebar />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <SubHeader />
            <Sidebar />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <SubHeader />
            <Sidebar />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <SubHeader />
            <Sidebar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
>>>>>>> Stashed changes
}

export default App;
