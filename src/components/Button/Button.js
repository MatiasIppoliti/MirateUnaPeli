import React from 'react';

//styles
import { Wrapper } from './ButtonStyles';

const Button = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
            <p>Ver más</p>
    </Wrapper>
);

export default Button;