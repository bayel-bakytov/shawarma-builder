import React from "react";
import classes from "./IngredientsControls.module.css";
import IngredientControl from "./IngredientControl/IngredientControl";

export default ({ addIngredient, removeIngredient }) => {
  const controls = [
    { label: "Tomato", type: "tomato" },
    { label: "Cucumber", type: "cucumber" },
    { label: "French-Fries", type: "frenchFries" },
  ];

  const controlsOutput = controls.map((control) => (
    <IngredientControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
    />
  ));

  return <div className={classes.IngredientsControls}>{controlsOutput}</div>;
};
