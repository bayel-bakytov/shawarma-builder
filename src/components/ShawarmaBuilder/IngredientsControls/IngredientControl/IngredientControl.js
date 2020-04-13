import React from "react";
import classes from "./IngredientControl.module.css";

export default ({ control, addIngredient, removeIngredient, disabled }) => {
  return (
    <div className={classes.IngredientControl}>
      <button
        className={classes.less}
        onClick={() => removeIngredient(control.type)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => addIngredient(control.type)}
      >
        +
      </button>
    </div>
  );
};
