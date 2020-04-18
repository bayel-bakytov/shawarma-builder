import React from "react";
import classes from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default () => (
    <ul className={classes.Navigation}>
       <NavigationItem>Shawarma Builder</NavigationItem>
       <NavigationItem>Checkout</NavigationItem>
    </ul>
);