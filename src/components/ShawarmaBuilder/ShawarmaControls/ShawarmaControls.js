import React from "react";
import classes from "./ShawarmaControls.module.css";
import ShawarmaControl from "./ShawarmaControl/ShawarmaControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Tomato", type: "tomato" },
  { label: "Cucumber", type: "cucumber" },
  { label: "French-Fries", type: "frenchFries" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Onion", type: "onion" },
  { label: "Ketchup", type: "ketchup" },
];

export default ({
  ingredients,
  addIngredient,
  removeIngredient,
  canOrder,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <ShawarmaControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return (
    <div className={classes.ShawarmaControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
