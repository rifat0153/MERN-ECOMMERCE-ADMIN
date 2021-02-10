import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/HOC/privateRoute";
import "./App.css";

import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute  path="/products" component={ Products } />
        <PrivateRoute  path="/orders" component={ Orders } />

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
