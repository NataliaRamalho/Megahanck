import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';  

import {Container, Header, Title, TotalPayment, BackButton} from './styles';

const Payment = () => {
  return (
    <Container>
      <Header>
        <BackButton>
          <Feather name="arrow-left" size={36} color="#fff" />
        </BackButton>
        <Text style={{fontSize: 18, color: "#fff"}}>Pagamento</Text>
      </Header>
      <Title>
        <Text style={{fontSize: 16, color: "#009EE3", paddingRight: 32}}>Para</Text>
        <Text style={{fontSize: 16}}>Restaurante Yang</Text>
      </Title>
      <TotalPayment>
        <Text style={{fontSize: 36, marginTop: 20}}>
          R$
        </Text>
        <Text style={{fontSize: 96}}>200</Text>
        <Text style={{fontSize: 36, marginTop: 20}}>
          00
        </Text>
      </TotalPayment>
    </Container>
  );
}

export default Payment;