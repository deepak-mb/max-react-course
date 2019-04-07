import React from "react";
import Aux from "../../hoc/aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default layout;
