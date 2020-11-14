import React from 'react';
import { Image, Text, View } from 'react-native';

import FoodImg from '../../assets/Food-Hamburger.png';

const ShowItem = () => {
  return (
  <View>
    <Image source={FoodImg} />
    <View>
      <Text>
        Hamburger
      </Text>
      <Text>
        Descrição descritiva descrevendo descritivamente um hamburger descritivo
      </Text>
      <Text>
        R$30,00 {'  '} 200g
      </Text>      
    </View>
  </View>
  );
}

export default ShowItem;