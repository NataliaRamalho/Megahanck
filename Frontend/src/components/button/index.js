import React from 'react';
import { Container, ButtonText } from './styles';

const handleClick = () => {
console.log('foi')

};
export default function ButtonComp( {children, ...rest}){
    return (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
    )
}