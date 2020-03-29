import React from 'react';
import classes from "./Ingredients.module.css";


export default ({ type }) => {
    const IngredientsClasses = [classes.Ingredients];

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
    return (
        <div className={IngredientsClasses.join(" ")}>

        </div>
    )

}
