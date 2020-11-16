import React from 'react';
import { Text, Image } from 'react-native';

import Confirmed from '../../assets/confirm.png';
import Button from '../../components/button';
import Header from '../../components/Header';

import { Container, BackgroundImage, NotificationSentText, PayNowText, Icon } from './styles';

const Approvate = () => {

  return (
    <>
      <Icon onPress={() => navigation.navigate('Payment')} name="md-close" size={40} color="#009EE3"/>
      <Container>
        <NotificationSentText>Pagamento Aprovado com sucesso</NotificationSentText>
        <BackgroundImage source={Confirmed} />
        <Button
          onPress={() => {}}
        >
          ok
        </Button>
      </Container>
    </>
  )
}

export default Approvate;