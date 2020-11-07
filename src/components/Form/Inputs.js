import React, {useState} from 'react';

const Inputs = () => {
    const [inputs, setInputs] = useState([
        {
            label: 'Username',
            name: 'username',
            type: 'text',
            placeholder: 'Enter username',
            value: '',
            error: ''
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter email',
            value: '',
            error: ''
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter password',
            value: '',
            error: ''
        },
        {
            label: 'Confirm Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter password again',
            value: '',
            error: ''
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
                    <div key={index}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input 
                            name={input.name} 
                            id={input.name} 
                            type={input.type} 
                            placeholder={input.placeholder} 
                            onChange={e => getValue(e, index)}
                        />
                        {
                            input.error ? 
                            <small>{input.error}</small> :
                            null
                        }
                    </div>
                ))
            }
            <button onClick={checkValues}>Register</button>
        </>
    );
}

export default Inputs;