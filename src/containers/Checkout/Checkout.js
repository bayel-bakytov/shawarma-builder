import React from "react";
import { useHistory } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const history = useHistory();
  const ingredients = {
    tomato: 1,
    cucumber: 1,
    frenchFries: 1,
    cheese: 1,
    meat: 1,
    salad: 1,
    onion: 1,
    ketchup: 1,
  };
  const price = 155;
  function checkoutCancel() {
    history.push("/builder");
  }
  function checkoutContinue() {
    history.push("/checkout/finich");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
