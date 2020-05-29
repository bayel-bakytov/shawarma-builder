import React from "react";
import classes from "./ShawarmaControls.module.css";
import ShawarmaControl from "./ShawarmaControl/ShawarmaControl";
import Button from "../../UI/Button/Button";

export default ({ ingredients, canOrder, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <ShawarmaControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.ShawarmaControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
