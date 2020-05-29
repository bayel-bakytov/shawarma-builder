import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Ingredients from "../../components/ShawarmaBuilder/Ingredients/Ingredients";
import classes from "./ShawarmaBuilder.module.css";
import ShawarmaControls from "../../components/ShawarmaBuilder/ShawarmaControls/ShawarmaControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/ShawarmaBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useSelector } from "react-redux";

const PRICES = {
  cucumber: 3.5,
  tomato: 4.5,
  frenchFries: 11.5,
  cheese: 8.4,
  salad: 6.5,
  meat: 9.5,
  onion: 3,
  ketchup: 1,
};

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce((canOrder, ingredient) => {
    return !canOrder ? ingredient.quantity > 0 : canOrder;
  }, false);

  /*
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);
  */

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <Ingredients price={price} ingredients={ingredients} />
        <ShawarmaControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        price={price}
        ingredients={ingredients}
        cancelOrder={() => setIsOrdering(false)}
        finishOrder={() => history.push("/checkout")}
      />
    );
  }
  return (
    <div className={classes.ShawarmaBuilder}>
      <h1>Build your shawarma</h1>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
