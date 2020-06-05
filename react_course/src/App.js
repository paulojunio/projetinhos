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

  const switchNameHandle = (newName) => {
    setPersons({
      persons : [
        { name: newName, age: 22},
        { name: "Juliana", age: 26},
        { name: "Juninho", age: 50}
      ]
    });
  }

  const nameChangeHandle = (event) => {
    setPersons({
      persons : [
        { name: "Paulo", age: 22},
        { name: event.target.value , age: 26},
        { name: "Juninho", age: 50}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hello World???</h1>
      <p>{otherState}</p>
      <button onClick={() => switchNameHandle("Paulinho")}>Click here!!</button>
      {personsState.persons.map( person => {
        return (
          <Person name={person.name} age={person.age} click={switchNameHandle.bind(this, "Paulao")} change={nameChangeHandle}></Person>
        )})
      }
      {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandle.bind(this, "Paulao")} change={nameChangeHandle}>A fita ta facil</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandle}>A fita é complicada</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} click={switchNameHandle}>A fita é a fita</Person> */}
    </div>
  );
}

export default App;



