import React from 'react';
import { Container, ButtonText, ButtonBorder} from './styles';

export default function ButtonComp({ isSecundary, children, ...rest }){
    return (
        <Container isSecundary={isSecundary} {...rest} >
            <ButtonBorder >
                <ButtonText isSecundary={isSecundary} >{children}</ButtonText>
            </ButtonBorder>
        </Container>
    )
};

