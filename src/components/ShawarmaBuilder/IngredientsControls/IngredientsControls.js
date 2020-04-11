import React from "react";
import classes from "./IngredientsControls.module.css";
import IngredientControl from "./IngredientControl/IngredientControl";

const CONTROLS = [
  { label: "Tomato", type: "tomato" },
  { label: "Cucumber", type: "cucumber" },
  { label: "French-Fries", type: "frenchFries" },
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <IngredientControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.IngredientsControls}>{controlsOutput}</div>;
};
