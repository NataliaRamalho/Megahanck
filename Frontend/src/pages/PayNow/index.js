import React from 'react';
import { Text, Image } from 'react-native';

import backgroundImage from '../../assets/background.png';

import { Container } from './styles';

const PayNow = () => {

  return (
    <Container>
      <Text>Foi enviada uma notificação{'\n'}para seu amigo!</Text>
      <Image style={{ height: 40, width: 40}} source={backgroundImage} />
      <Text>Aproveite e page agora sua parcela.</Text>
    </Container>
  )
}

export default PayNow;