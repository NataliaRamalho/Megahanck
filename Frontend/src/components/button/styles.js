import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 300px;
  background-color: #009EE3;
  height: 49px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  align-self: center;
  border-radius: 6px;

`;

export const ButtonBorder = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 49px;
  border: 1px solid #009EE3;
  width: 300px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
