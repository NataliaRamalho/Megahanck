import React from 'react';
import { Feather } from '@expo/vector-icons';

import { HeaderContainer, BackButton } from './styles';
import { Text } from 'react-native';

const Header = ({children}) => {
  return (
    <HeaderContainer>
      <BackButton>
          <Feather name="arrow-left" size={34} color="#fff" />
      </BackButton>
      <Text style={{fontSize: 18, color: "#fff"}}>{children}</Text>
    </HeaderContainer>

  );
};

export default Header;