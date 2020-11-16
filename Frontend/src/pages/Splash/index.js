import React from 'react';

import Icone from '../../assets/Icone.png';
import {TouchableOpacity} from 'react-native-gesture-handler'
import {BackgroundImage, Container, Touchable} from './styles';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();

  return (
    <>
        <Container>
            <Touchable onPress={()=>{navigation.navigate('Payment')}} >
                <BackgroundImage source={Icone} />
            </Touchable>

        </Container>
      
    </>
  )
}

export default Splash;