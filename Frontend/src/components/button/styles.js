import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 120px;
  background-color: blue;
  height: 40px;
  align-items: center;
  justify-content: center;

`;

export const ButtonText = styled.Text`
  color: #fff;
`;