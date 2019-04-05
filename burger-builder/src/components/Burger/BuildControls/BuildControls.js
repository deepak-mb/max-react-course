import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildConrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className="BuildControls">
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemove(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
