import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Order from "../../components/Orders/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./Orders.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";

export default withErrorHandler(() => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {});
  }, []);

  let ordersOutput = <Spinner />;
  if (orders !== null) {
    ordersOutput = Object.keys(orders).map((id) => (
      <Order key={id} {...orders[id]} />
    ));
  }
  return (
    <div className={classes.Orders}>
      <h1>Orders</h1>
      {ordersOutput}
    </div>
  );
}, axios);
