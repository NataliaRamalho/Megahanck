import React from 'react';
import { Container, ButtonText, ButtonBorder} from './styles';
import {StyleSheet} from 'react-native'




export default function ButtonComp( {children, ...rest}){
    return (
        <Container {...rest} >
            <ButtonBorder>
                <ButtonText>{children}</ButtonText>
            </ButtonBorder>
        </Container>
    )
};

