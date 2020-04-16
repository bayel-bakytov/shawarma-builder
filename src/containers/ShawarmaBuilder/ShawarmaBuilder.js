import React, { useState } from "react";
import ShawarmaIngredients from "../../components/ShawarmaBuilder/ShawarmaIngredients/ShawarmaIngredients";
import classes from "./ShawarmaBuilder.module.css";
import IngredientsControls from "../../components/ShawarmaBuilder/IngredientsControls/IngredientsControls";

const PRICES = {
  cucumber: 20,
  tomato: 20,
  frenchFries: 20,
  cheese: 20,
  salad: 20,
  meat: 20,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    cucumber: 0,
    tomato: 0,
    frenchFries: 0,
    cheese: 0,
    salad: 0,
    meat: 0,
  });

  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.ShawarmaBuilder}>
      <ShawarmaIngredients price={price} ingredients={ingredients} />
      <IngredientsControls
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
