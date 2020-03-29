import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import classes from "./ShawarmaIngredients.module.css";



export default () => (
        <div className={classes.ShawarmaIngredients}>
          <Ingredients />
        </div>  
);
