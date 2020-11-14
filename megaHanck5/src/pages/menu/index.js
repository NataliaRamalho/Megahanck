import React from 'react';
import { Image, Text, View } from 'react-native';

import { Container, Title, FoodCard, FoodImage, FoodPrice, Balance } from './styles';

import FoodImg from '../../assets/Food-Hamburger.png';
const Menu = () => {
  return (
    <Container>
      <Title>Menu</Title>
        <Balance>
          <Text>Balance</Text>
          <Text>R$30,00</Text>
        </Balance>
       
       <FoodCard>
         <FoodImage source={FoodImg} />
         <View>
           <Text>
             Hamburger {'\n'}
             200G
           </Text>
           <FoodPrice>
             R$30,00
           </FoodPrice>      
         </View>
       </FoodCard>
       
       <FoodCard>
         <FoodImage source={FoodImg} />
         <View>
           <Text>
             Hamburger {'\n'}
             200G
           </Text>
           <FoodPrice>
             R$30,00
           </FoodPrice>      
         </View>
       </FoodCard>
       
       <FoodCard>
         <FoodImage source={FoodImg} />
         <View>
           <Text>
             Hamburger {'\n'}
             200G
           </Text>
           <FoodPrice>
             R$30,00
           </FoodPrice>      
         </View>
       </FoodCard>

    </Container>
  );
}

export default Menu;