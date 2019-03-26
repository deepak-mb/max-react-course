import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Deepak", age: "29" },
      { id: "2", name: "John", age: "20" }
    ],
    test: "test",
    showPersons: false
  };
  // switchNameHandler = newName => {
  //   // console.log("clicked");
  //   this.setState({
  //     persons: [{ name: newName, age: "29" }]
  //   });
  // };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              >
                My hobbies: Games
              </Person>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }
    let styles = [];
    if (this.state.persons.length <= 1) {
      styles.push("red");
    }
    if (this.state.persons.length <= 0) {
      styles.push("bold");
    }
    styles = styles.join(" ");
    return (
      <div className="App">
        <h1>Hi, I'm a react project!</h1>
        <p className={styles}>This is a react app!</p>
        <button onClick={this.toggleNameHandler} style={style}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
