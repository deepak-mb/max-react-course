import React from "react";

const Cockpit = props => {
  let styles = [];
  if (props.persons.length <= 1) {
    styles.push("red");
  }
  if (props.persons.length <= 0) {
    styles.push("bold");
  }
  styles = styles.join(" ");
  return (
    <div>
      <h1>Hi, I'm a react project!</h1>
      <p className={styles}>This is a react app!</p>
      <button onClick={props.clicked} style={props.style}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
