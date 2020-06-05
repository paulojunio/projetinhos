import React from 'react';

const Person = (props) => {
    return (
        <div onClick={props.click}>
            <p>Opa olha eu vivo com o nomezinho de {props.name} e idade de {props.age}, to na fita</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change}/>
        </div>
    );
}

export default Person;