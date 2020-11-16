import React from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../assets/background.png';
import Button from '../../components/button';
import Header from '../../components/Header';

import { Container, BackgroundImage, NotificationSentText, PayNowText } from './styles';

const PayNow = () => {
  const navigation = useNavigation();


  return (
    <>
      <Header>Dividir conta</Header>
      <Container>
        <NotificationSentText>Foi enviada uma notificação{'\n'}para seu amigo!</NotificationSentText>
        <BackgroundImage source={backgroundImage} />
        <PayNowText>Aproveite e page agora sua parcela.</PayNowText>
        <Button
          onPress={() => {navigation.navigate('Approvate')}}
        >
          Pagar agora
        </Button>
        <Button
          isSecundary
          onPress={() => {navigation.navigate('Payment')}}
        >
          Mais tarde
        </Button>
      </Container>
    </>
  )
}

export default PayNow;