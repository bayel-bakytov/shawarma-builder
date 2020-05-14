import React from "react";
import { Route } from "react-router-dom";
import Ingredients from "../../ShawarmaBuilder/Ingredients/Ingredients";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ ingredients, price, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Ingredients ingredients={ingredients} price={price} />
      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};
