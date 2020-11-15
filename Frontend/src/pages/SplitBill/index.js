import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';

import {
  Container, 
  TotalPayment, 
  EachText, 
  Button, 
  Title,
  ValueText,
  Text2
} from './styles';

const SplitBill = () => {
  return (
    <Container>
      <Header>Dividir conta</Header>
      <Title>Você e Miguel irão pagar</Title>
      
      <TotalPayment>
        <Text style={{fontSize: 36, marginTop: 25, marginRight:10}}>
          R$
        </Text>
        <Text style={{fontSize: 96}}>200</Text>
        <Text style={{fontSize: 36, marginTop: 25, marginLeft:10}}>
          00
        </Text>
        <EachText>Cada</EachText>
      </TotalPayment>

      <ValueText>
        Valor total: R$200,00
      </ValueText>

      <Text2>Ao clicar no botão OK, seu amigo receberá uma notificação para efetuar o pagamento.</Text2>

      <Button>
        <Text style={{color: '#fff'}}>OK</Text>
      </Button>

    </Container>
  );
};

export default SplitBill;