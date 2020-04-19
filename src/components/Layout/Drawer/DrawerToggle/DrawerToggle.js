import React from "react";
import classes from "./DrawerToggle.module.css";

export default ({ switchDrawer }) => (
  <div className={classes.DrawerToggle} onClick={switchDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
