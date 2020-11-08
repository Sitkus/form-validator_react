import React, {useState} from 'react';
import * as S from './Inputs.style';

const Inputs = () => {
    const [inputs, setInputs] = useState([
        {
            label: 'Username:',
            name: 'username',
            type: 'text',
            placeholder: 'Enter username',
            value: ''
        },
        {
            label: 'Email:',
            name: 'email',
            type: 'email',
            placeholder: 'Enter email',
            value: ''
        },
        {
            label: 'Password:',
            name: 'password',
            type: 'password',
            placeholder: 'Enter password',
            value: ''
        },
        {
            label: 'Confirm Password:',
            name: 'password',
            type: 'password',
            placeholder: 'Enter password again',
            value: ''
        }
    ]);

    const getValue = (e, index) => {
        inputs[index].value = e.target.value;
        setInputs([...inputs]);
    }

    const cleanErrors = () => {
        inputs.forEach((input, index) => {
            inputs[index].error = '';
        });

        setInputs([...inputs]);
    }

    const checkValues = e => {
        cleanErrors();

        inputs.forEach((input, index) => {
            if (!input.value) {
                inputs[index].error = `Empty ${input.name} field!`;
            }
        });
        setInputs([...inputs]);

        e.preventDefault();
    }

    return (
        <>
            {
                inputs.map((input, index) => (
                    <S.InputContainer key={index}>
                        <S.Label htmlFor={input.name}>{input.label}</S.Label>
                        <S.Input 
                            name={input.name} 
                            id={input.name} 
                            type={input.type} 
                            placeholder={input.placeholder} 
                            error={input.error}
                            onChange={e => getValue(e, index)}
                        />
                        {
                            input.error ? 
                            <S.Error>{input.error}</S.Error> :
                            null
                        }
                    </S.InputContainer>
                ))
            }
            <S.Button onClick={checkValues}>Register</S.Button>
        </>
    );
}

export default Inputs;