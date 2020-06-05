import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Opa olha eu vivo com o nomezinho de {props.name} e idade de {props.age}, to na fita</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;