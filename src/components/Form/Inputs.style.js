import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    font-size: 1.4rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    border: 1px solid ${props => !props.error ? '#f9f9f9' : 'red'};
    // border: 1px solid #f9f9f9;
    border-radius: 0.3rem;
    outline: none;
    padding: 1rem 1.5rem;
    margin-bottom: 0.5rem;

    &:focus {
        border: 1px solid black;
    }
`;

const Button = styled.button`
    border: 1px solid #f9f9f9;
    border-radius: 0.3rem;
    outline: none;
    background-color: #f9f9f9;
    padding: 1.5rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: 200ms all ease-in-out;

    &:hover {
        border: 1px solid black;
        background-color: black;
        color: white;
        transition: 200ms all ease-in-out;
    }
`;

const Error = styled.small`
    color: red;
    font-size: 1.4rem;
`;

export {InputContainer, Label, Input, Button, Error};