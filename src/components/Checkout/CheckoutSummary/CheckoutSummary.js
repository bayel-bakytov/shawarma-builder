import React from "react";
import Ingredients from "../../ShawarmaBuilder/Ingredients/Ingredients";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ ingredients, price, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Ingredients ingredients={ingredients} price={price} />
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};
