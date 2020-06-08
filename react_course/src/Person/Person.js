import React from 'react';
import styled from 'styled-components';
import './Person.css';

const Person = (props) => {
    const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        background-color: lightgreen;
        text-align: center;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;

        @media(min-width: 500px):  {
            width: 450px
        }
    `;
    return (
        <StyledDiv>
            <p onClick={props.click} >Opa olha eu vivo com o nomezinho de {props.name} e idade de {props.age}, to na fita</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change}/>
        </StyledDiv>
    );
}

export default Person;