import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";
import Ingredients from "../../components/ShawarmaBuilder/Ingredients/Ingredients";
import classes from "./ShawarmaBuilder.module.css";
import ShawarmaControls from "../../components/ShawarmaBuilder/ShawarmaControls/ShawarmaControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/ShawarmaBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withAxios from "../../hoc/withAxios/withAxios";

export default withAxios(() => {
  const { ingredients, price } = useSelector((state) => state.builder);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce(
      (canOrder, ingredient) => {
        return !canOrder ? ingredient.quantity > 0 : canOrder;
      },
      false
    );

    output = (
      <>
        <Ingredients price={price} ingredients={ingredients} />
        <ShawarmaControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            price={price}
            ingredients={ingredients}
            cancelOrder={() => setIsOrdering(false)}
            finishOrder={() => history.push("/checkout")}
          />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.ShawarmaBuilder}>
      <h1>Build your shawarma</h1>
      {output}
    </div>
  );
}, axios);
