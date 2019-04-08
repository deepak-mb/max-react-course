import React from "react";
import Aux from "../../hoc/aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default layout;
