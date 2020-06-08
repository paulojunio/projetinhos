import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [showPersonsState, setShowPersons] = useState(false);

  const [personsState, setPersons] = useState({
    persons : [
      { id: 1, name: "Paulo", age: 22},
      { id: 2, name: "Juliana", age: 26},
      { id: 3, name: "Juninho", age: 29}
    ]
  });

  const [otherState] = useState("So uma palavrinhas");

  // const switchNameHandle = (newName) => {
  //   setPersons({
  //     persons : [
  //       { name: newName, age: 22},
  //       { name: "Juliana", age: 26},
  //       { name: "Juninho", age: 50}
  //     ]
  //   });
  // }

  const deletePerson = (indexPerson) => {
    // let resultPersons = personsState.persons; //Pratica ruim, usando ponteiro do array do state para manipular o array
    // let resultPersons = personsState.persons.slice(); //Copia do array para manipula-lo
    let resultPersons = [...personsState.persons]; //Maneira mais morderna de copiar um array usando o "Spread"
    resultPersons.splice(indexPerson, 1);
    setPersons({persons: resultPersons});
  }

  const nameChangeHandle = (event, id) => {
    const personIndex = personsState.persons.findIndex( p => {
      return p.id === id;
    });
    let resultPersons = [...personsState.persons];
    resultPersons[personIndex].name = event.target.value;
    setPersons({
      persons : resultPersons
    });
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersonsState);
  }

  let persons = null;

  if(showPersonsState) {
    persons = ( <div>
        {personsState.persons.map( (person, index) => {
          return (
            <Person name={person.name} age={person.age} click={() => deletePerson(index)} change={(event) => nameChangeHandle(event, person.id)} key={person.id}></Person>
          )})
        }
    </div>
    );
  }

  let classes = [];
  if(personsState.persons.length <= 2)
    classes.push('red');
  if(personsState.persons.length <= 1)
    classes.push('bold');
  
  return (
      <div className="App">
        <h1>Hello World???</h1>
        <p className={classes.join(' ')}>{otherState}</p>
        <button className="button" onClick={togglePersonsHandler}>Click here!!</button>
        {persons}
        {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandle.bind(this, "Paulao")} change={nameChangeHandle}>A fita ta facil</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandle}>A fita é complicada</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} click={switchNameHandle}>A fita é a fita</Person> */}
      </div>

  );
}

export default App;



