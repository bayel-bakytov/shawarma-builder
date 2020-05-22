import React from "react";
import classes from "./ShawarmaControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../../../store/actions";

export default ({ control, addIngredient, removeIngredient, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.ShawarmaControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_INGREDIENT })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_INGREDIENT })}
      >
        +
      </button>
    </div>
  );
};
