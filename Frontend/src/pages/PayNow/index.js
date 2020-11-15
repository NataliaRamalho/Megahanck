import React from 'react';
import { Text, Image } from 'react-native';

import backgroundImage from '../../assets/background.png';
import Button from '../../components/button';
import Header from '../../components/Header';

import { Container, BackgroundImage, NotificationSentText, PayNowText } from './styles';

const PayNow = () => {

  return (
    <>
      <Header>Dividir conta</Header>
      <Container>
        <NotificationSentText>Foi enviada uma notificação{'\n'}para seu amigo!</NotificationSentText>
        <BackgroundImage source={backgroundImage} />
        <PayNowText>Aproveite e page agora sua parcela.</PayNowText>
        <Button
          onPress={() => {}}
        >
          Pagar agora
        </Button>
        <Button
          isSecundary
          onPress={() => {}}
        >
          Mais tarde
        </Button>
      </Container>
    </>
  )
}

export default PayNow;