import React from "react";
import Drawer from "./Drawer/Drawer";
import Toolbar from "./Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default ({ children }) => (
  <div className={classes.Layout}>
    <Toolbar />
    <Drawer />
    {children}
  </div>
);
