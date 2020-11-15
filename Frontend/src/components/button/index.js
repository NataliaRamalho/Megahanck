import React from 'react';
import { Container, ButtonText } from './styles';
import {StyleSheet} from 'react-native'




export default function ButtonComp( {children, ...rest}){
    return (
    <Container {...rest} >
        <ButtonText>{children}</ButtonText>
    </Container>
    )
};

