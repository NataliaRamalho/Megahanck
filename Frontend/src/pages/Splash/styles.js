import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler'

export const Container = styled.View `
    flex: 1;
     justify-content: center;
     align-items:center;
    
`

export const BackgroundImage = styled.Image`
  width:156px;
  height:156px;
`;

export const Touchable = styled(TouchableOpacity) `
    justify-content: center;
`



