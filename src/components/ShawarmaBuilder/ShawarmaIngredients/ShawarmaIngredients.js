import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import classes from "./ShawarmaIngredients.module.css";



export default  ({ ingredients }) => {
  let ingredientsOutput = [];
   

  Object.keys(ingredients).forEach(type => {
    for (let i = 0; i <ingredients[type]; i++) {
      ingredientsOutput.push(<Ingredients key={type + i} type={type}/>);
    }
  });


  return(
        <div className={classes.ShawarmaIngredients}>
         {ingredientsOutput}
        </div>  
  );
};
