import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import ShawarmaBuilder from "./containers/ShawarmaBuilder/ShawarmaBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { restore } from "./store/actions/auth";
import { useDispatch } from "react-redux";
import "./App.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => restore(dispatch));

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <ShawarmaBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
