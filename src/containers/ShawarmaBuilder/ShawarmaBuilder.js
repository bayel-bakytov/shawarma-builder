import React, { useState } from "react";
import ShawarmaIngredients from "../../components/ShawarmaBuilder/ShawarmaIngredients/ShawarmaIngredients";
import classes from "./ShawarmaBuilder.module.css";
import IngredientsControls from "../../components/ShawarmaBuilder/IngredientsControls/IngredientsControls";

export default () => {
  const [ingredients, setIngredients] = useState({
    cucumber: 5,
    tomato: 5,
    frenchFries: 6,
  });

  function addIngredient(type) {
    const newIngredients = {...ingredients};
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if(ingredients[type] >= 1){
    const newIngredients = {...ingredients};
    newIngredients[type]--;
    setIngredients(newIngredients);
    }
  }
  return (
    <div className={classes.ShawarmaBuilder}>
      <ShawarmaIngredients ingredients={ingredients} />
      <IngredientsControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
