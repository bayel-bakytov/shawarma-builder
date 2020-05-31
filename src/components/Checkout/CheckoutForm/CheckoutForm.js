import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutForm.module.css";
export default ({ checkoutFinich }) => {
  function formSubmit(event) {
    const data = new FormData(event.target);
    checkoutFinich({
      name: data.get("name"),
      phone: data.get("phone"),
      address: data.get("address"),
      delivery: data.get("delivery"),
    });
    event.preventDefault();
  }
  return (
    <form onSubmit={formSubmit} className={classes.CheckoutForm}>
      <input type="text" placeholder="Name" name="name" required />
      <input type="phone" placeholder="Phone" name="phone" required />
      <input type="text" placeholder="Address" name="address" required />
      <select name="delivery" required>
        <option value="">- Delivery -</option>
        <option>Fast</option>
        <option>Fastets</option>
        <option>Regular</option>
      </select>
      <Button green>Finish</Button>
    </form>
  );
};
