import React from 'react';

//styles
import { Wrapper, Content, Text } from './HeroImageStyles';

const HeroImage = ({image, title, text}) => ( //destructuring de las props. más limpio. hacerlo siempre
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;