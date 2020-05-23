import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  tomato: "Tomato",
  cucumber: "Cucumber",
  frenchFries: "French",
  meat: "Meat",
  salad: "Salad",
  cheese: "Cheese",
  onion: "Onion",
  ketchup: "Ketchup",
};

export default ({ price, ingredients, details }) => {
  const ingredientsOutput = Object.keys(ingredients).map((key) => (
    <span key={key} className={classes.ingredient}>
      {CONTROLS[key]} ({ingredients[key]})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + "," + details.phone + "," + details.address
        : "No details available!"}
    </div>
  );
  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price.toFixed(2)} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
