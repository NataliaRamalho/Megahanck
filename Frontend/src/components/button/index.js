import React from 'react';
import { Container, ButtonText } from './styles';

const handlePress = () => {
console.log('foi')

};
export default function ButtonComp( {children, ...rest}){
    return (
    <Container onPress={handlePress} {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
    )
}