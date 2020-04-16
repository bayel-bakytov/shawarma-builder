import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  tomato: "Tomato",
  cucumber: "Cucumber",
  frenchFries: "French-Fries",
  meat: "Meat",
  salad: "Salad",
  cheese: "Cheese",
};

export default ({ ingredients }) => {
  const ingredientsOutput = Object.keys(ingredients)
    .filter((ingredient) => ingredients[ingredient] > 0)
    .map((ingredient) => (
      <li>
        {LABELS[ingredient]}: {ingredients[ingredient]}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You'will a best shawarma-ingredients of all times!</p>
      <ul>{ingredientsOutput}</ul>
    </div>
  );
};
