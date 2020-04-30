import React, { useState } from "react";
import Ingredients from "../../components/ShawarmaBuilder/Ingredients/Ingredients";
import classes from "./ShawarmaBuilder.module.css";
import ShawarmaControls from "../../components/ShawarmaBuilder/ShawarmaControls/ShawarmaControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/ShawarmaBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const PRICES = {
  cucumber: 3.5,
  tomato: 4.5,
  frenchFries: 11.5,
  cheese: 8.4,
  salad: 6.5,
  meat: 9.5,
  onion: 3,
};

export default withErrorHandler(() => {
  const [ingredients, setIngredients] = useState({
    cucumber: 0,
    tomato: 0,
    frenchFries: 0,
    cheese: 0,
    salad: 0,
    meat: 0,
    onion: 0,
  });

  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    const order = {
      ingredients: ingredients,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Bayel",
        phone: "0500500500",
        address: {
          street: "Kojenkozova 170",
          city: "Karakol",
        },
      },
    };
    setLoading(true);
    axios.post("/orders", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
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
  let orderSummary = <Spinner />;
  if (!loading && isOrdering) {
    orderSummary = (
      <OrderSummary
        price={price}
        ingredients={ingredients}
        cancelOrder={cancelOrder}
        finishOrder={finishOrder}
      />
    );
  }
  return (
    <div className={classes.ShawarmaBuilder}>
      <Ingredients price={price} ingredients={ingredients} />
      <ShawarmaControls
        startOrder={startOrder}
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
