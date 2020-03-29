import React from 'react';
import ShawarmaIngredients from "../../components/ShawarmaBuilder/ShawarmaIngredients/ShawarmaIngredients";
import classes from "./ShawarmaBuilder.module.css";


export default () => (
        <div className={classes.ShawarmaBuilder}>
           <ShawarmaIngredients />
           IngredientsControl
        </div>  
);
