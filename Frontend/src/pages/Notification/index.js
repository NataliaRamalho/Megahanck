import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {
  Container, 
  TotalPayment, 
  EachText, 
  Button, 
  Title,
  Icon,
} from './styles';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Icon onPress={() => navigation.navigate('Payment')} name="md-close" size={40} color="#009EE3"/>
      <Title>Seu amigo, XXXX, dividiu esta compra com você:</Title>
      
      <TotalPayment>
        <Text style={{fontSize: 36, marginTop: 25, marginRight:10}}>
          R$
        </Text>
        <Text style={{fontSize: 96}}>100</Text>
        <Text style={{fontSize: 36, marginTop: 25, marginLeft:10}}>
          00
        </Text>

        <EachText>Cada</EachText>

      </TotalPayment>


      <Button style={{marginTop: 43}} >
        <Text style={{color: '#fff'}}>Pagar agora</Text>
      </Button>

    </Container>
  );
};

export default Notification;