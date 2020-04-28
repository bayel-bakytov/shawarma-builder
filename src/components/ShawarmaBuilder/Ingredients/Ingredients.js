import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Ingredients.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Ingredient key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.Ingredients}>
      <div className={classes.pita}>
        <div className={classes.ingredientPita}>{ingredientsOutput}</div>
      </div>
      <div className={classes.price}>Total price: {price.toFixed(2)} som</div>
    </div>
  );
};
