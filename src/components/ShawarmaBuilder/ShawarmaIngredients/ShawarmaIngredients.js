import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import classes from "./ShawarmaIngredients.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Ingredients key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.ShawarmaIngredients}>
      <div className={classes.pita}>
        <div className={classes.ingredientPita}>{ingredientsOutput}</div>
      </div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};
