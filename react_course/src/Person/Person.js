import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >Opa olha eu vivo com o nomezinho de {props.name} e idade de {props.age}, to na fita</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change}/>
        </div>
    );
}

export default Person;