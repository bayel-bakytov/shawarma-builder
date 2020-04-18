import React from "react";
import classes from "./Ingredients.module.css";

export default ({ type }) => {
  const IngredientsClasses = [classes.Ingredients, classes[type]];

  let stylePos = null;
  const getPosition = (ir) => {
    const pd = 225;
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
    case "salad":
      IngredientsClasses.push(classes.salad);
      break;
    case "cheese":
      IngredientsClasses.push(classes.cheese);
      break;
    case "meat":
      IngredientsClasses.push(classes.meat);
      break;
    case "cucumber":
      IngredientsClasses.push(classes.cucumber);
      break;
    case "frenchFries":
    default:
      IngredientsClasses.push(classes.frenchFries);
      break;
  }

  const position = getPosition(50 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };

  return <div style={stylePos} className={IngredientsClasses.join(" ")}></div>;
};
