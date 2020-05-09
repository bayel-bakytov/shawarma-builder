import React from "react";
import Ingredients from "../../ShawarmaBuilder/Ingredients/Ingredients";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ ingredients, price }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Ingredients ingredients={ingredients} price={price} />
      <Button red>Cancel</Button>
      <Button green>Continue</Button>
    </div>
  );
};
