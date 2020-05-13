import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";
export default ({ checkoutFinich }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    delivery: "",
  });

  function nameChange({ target }) {
    setData({ ...data, name: target.value });
  }

  function phoneChange({ target }) {
    setData({ ...data, phone: target.value });
  }

  function addressChange({ target }) {
    setData({ ...data, address: target.value });
  }

  function deliveryChange({ target }) {
    setData({ ...data, delivery: target.value });
  }
  return (
    <div className={classes.CheckoutForm}>
      <input
        type="text"
        onChange={nameChange}
        placeholder="Name"
        value={data.name}
        required
      />
      <input
        type="phone"
        onChange={phoneChange}
        placeholder="Phone"
        value={data.phone}
        required
      />
      <input
        type="text"
        onChange={addressChange}
        placeholder="Address"
        value={data.address}
        required
      />
      <select onChange={deliveryChange} required>
        <option value="">- Select -</option>
        <option>Fast</option>
        <option>Fastets</option>
        <option>Regular</option>
      </select>
      <Button click={() => checkoutFinich(data)} green>
        Finich
      </Button>
    </div>
  );
};
