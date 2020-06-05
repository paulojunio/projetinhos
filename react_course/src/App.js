import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersons] = useState({
    persons : [
      { name: "Paulo", age: 22},
      { name: "Juliana", age: 26},
      { name: "Juninho", age: 29}
    ]
  });

  const [otherState, setOtherState] = useState("So uma palavrinhas");

  const switchNameHandle = () => {
    setPersons({
      persons : [
        { name: "Paulo Junio", age: 22},
        { name: "Juliana", age: 26},
        { name: "Juninho", age: 50}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hello World???</h1>
      <p>{otherState}</p>
      <button onClick={switchNameHandle}>Click here!!</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>A fita ta facil</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>A fita é complicada</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[2].age}>A fita é a fita</Person>
    </div>
  );
}

export default App;



