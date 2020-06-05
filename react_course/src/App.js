import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: "Paulo", age: 22},
      { name: "Juliana", age: 26},
      { name: "Juninho", age: 29}
    ]
  }

  switchNameHandle = () => {
    // console.log("Hi?");
    this.setState({
      persons : [
        { name: "Paulo Junio", age: 22},
        { name: "Juliana", age: 26},
        { name: "Juninho", age: 50}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello World???</p>
        <button onClick={this.switchNameHandle}>Click here!!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>A fita ta facil</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>A fita é complicada</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[2].age}>A fita é a fita</Person>
      </div>
    );
  }
}

export default App;
