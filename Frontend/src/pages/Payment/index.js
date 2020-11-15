import React from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';  

import {Container, Title, TotalPayment, BackButton} from './styles';
import ButtonComp from '../../components/button';
import Header from '../../components/Header';


const Payment = () => {
  return (
    <Container>
      <Header>Pagamento</Header>
      
      <Title>
        <Text style={{fontSize: 16, color: "#009EE3", paddingRight: 32}}>Para</Text>
        <Text style={{fontSize: 16}}>Restaurante Yang</Text>
      </Title>

      <TotalPayment>
        <Text style={{fontSize: 36, marginTop: 25}}>
          R$
        </Text>
        <Text style={{fontSize: 96}}>200</Text>
        <Text style={{fontSize: 36, marginTop: 25}}>
          00
        </Text>
      </TotalPayment>

      <ButtonComp style={{marginTop: 29}}>Dividir Conta</ButtonComp>
      
      <ButtonComp style={{backgroundColor: "#FFF"}}>
        <Text style={{color: "#009EE3"}}>Pagar agora</Text>
      </ButtonComp>

    </Container>
  );
}

export default Payment;