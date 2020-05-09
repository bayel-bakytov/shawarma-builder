import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../UI/Nav/Nav";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";

export default ({ switchDrawer }) => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Nav />
    </nav>
    <DrawerToggle switchDrawer={switchDrawer} />
  </div>
);
