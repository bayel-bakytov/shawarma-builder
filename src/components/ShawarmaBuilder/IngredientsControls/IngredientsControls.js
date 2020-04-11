import React from "react";
import classes from "./IngredientsControls.module.css";
import IngredientControl from "./IngredientControl/IngredientControl";

const CONTROLS = [
  { label: "Tomato", type: "tomato" },
  { label: "Cucumber", type: "cucumber" },
  { label: "French-Fries", type: "frenchFries" },
];

export default ({ addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <IngredientControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
    />
  ));

  return <div className={classes.IngredientsControls}>{controlsOutput}</div>;
};
