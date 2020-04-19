import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Navigation from "../../UI/Navigation/Navigation";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";

export default ({ switchDrawer }) => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Navigation />
    </nav>
    <DrawerToggle switchDrawer={switchDrawer} />
  </div>
);
