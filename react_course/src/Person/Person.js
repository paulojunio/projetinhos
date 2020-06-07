import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
    const style = {
        '@media(min-width: 500px)' :  {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click} >Opa olha eu vivo com o nomezinho de {props.name} e idade de {props.age}, to na fita</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change}/>
        </div>
    );
}

export default Radium(Person);