import React from "react";
import classes from "./Ingredients.module.css";

export default ({ type }) => {
  const IngredientsClasses = [classes.Ingredients];

  let stylePos = null;
  const getPosition = (ir) => {
    const pd = 540;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };

  switch (type) {
    case "tomato":
      IngredientsClasses.push(classes.tomato);
      break;
    case "cucumber":
      IngredientsClasses.push(classes.cucumber);
      break;
    case "french-fries":
    default:
      IngredientsClasses.push(classes.frenchFries);
      break;
  }

  const position = getPosition(35 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };

  return <div style={stylePos} className={IngredientsClasses.join(" ")}></div>;
};
