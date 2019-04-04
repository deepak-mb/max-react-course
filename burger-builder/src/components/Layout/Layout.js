import React from "react";
import Aux from "../../hoc/aux";
import './Layout.css'
const layout = props => {
  return (
    <Aux>
      <div>Toolbar, sidebar, backdrop</div>
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default layout;
