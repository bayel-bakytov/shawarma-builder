import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
import Toolbar from "./Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.Layout}>
      <Toolbar />
      <Drawer open={drawerOpen} switchDrawer={() => {}} />
      <main>{children}</main>
    </div>
  );
};
