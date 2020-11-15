import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 


export const Container = styled.View`
  flex: 1;
`;

export const Icon = styled(Ionicons)`
  position: absolute;
  top: 48px;
  right: 43px;
`;

export const Title = styled.Text`
  text-align: center;
  width: 223px;
  font-size: 18px;
  align-self: center;
  margin-top: 161px;
`;

export const TotalPayment = styled.View`
  margin: 29px 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const EachText = styled.Text`
  position: absolute;
  bottom: 0;
  font-size: 18px;
  right: 70px;
`;

export const Button = styled(RectButton)`
  background: #009EE3;
  width: 300px;
  height: 49px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 6px;
`;


