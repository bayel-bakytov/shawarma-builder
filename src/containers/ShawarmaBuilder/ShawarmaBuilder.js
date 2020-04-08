import React, { useState } from "react";
import ShawarmaIngredients from "../../components/ShawarmaBuilder/ShawarmaIngredients/ShawarmaIngredients";
import classes from "./ShawarmaBuilder.module.css";

export default () => {
  const [ingredients, setIngredients] = useState({
          cucumber:5,
          tomato:5,
          frenchFries:6,
  });
  return (
    <div className={classes.ShawarmaBuilder}>
      <ShawarmaIngredients ingredients={ingredients}/>
      IngredientsControl
    </div>
  );
};
