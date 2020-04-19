import React, { useState } from "react";
import Drawer from "../../components/Layout/Drawer/Drawer";
import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  function switchDrawer () {
     setDrawerOpen(!drawerOpen);
  }

  return (
    <div className={classes.Layout}>
      <Toolbar />
      <Drawer open={drawerOpen} switchDrawer={switchDrawer} />
      <main>{children}</main>
    </div>
  );
};
