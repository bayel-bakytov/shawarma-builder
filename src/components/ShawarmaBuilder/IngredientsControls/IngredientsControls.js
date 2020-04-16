import React from "react";
import classes from "./IngredientsControls.module.css";
import IngredientControl from "./IngredientControl/IngredientControl";

const CONTROLS = [
  { label: "Tomato", type: "tomato" },
  { label: "Cucumber", type: "cucumber" },
  { label: "French-Fries", type: "frenchFries" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
];

export default ({
  ingredients,
  addIngredient,
  removeIngredient,
  canOrder,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <IngredientControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return (
    <div className={classes.IngredientsControls}>
      {controlsOutput}
      <button
        onClick={startOrder}
        disabled={!canOrder}
        className={classes.orderButton}
      >
        ORDER
      </button>
    </div>
  );
};
