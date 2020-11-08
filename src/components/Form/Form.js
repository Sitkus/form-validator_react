import React from 'react';
import Inputs from './Inputs';
import * as S from './Form.style';

const Form = () => {
    return (
        <S.Form>
            <S.Title>Register With Us</S.Title>
            <Inputs />
        </S.Form>
    );
}

export default Form;