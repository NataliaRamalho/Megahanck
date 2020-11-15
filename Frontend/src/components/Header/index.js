import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderContainer, BackButton } from './styles';
import { Text } from 'react-native';


const Header = ({children}) => {
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack();
  }

  return (
    <HeaderContainer>
      <BackButton onPress={HandleGoBack}>
          <Feather name="arrow-left" size={34} color="#fff" />
      </BackButton>
      <Text style={{fontSize: 18, color: "#fff"}}>{children}</Text>
    </HeaderContainer>

  );
};

export default Header;