import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = props => {
  return (
    <div>
      <header className="Toolbar">
        <div>MENU</div>
        <Logo height="80%" />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

export default toolbar;
