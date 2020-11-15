import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  align-self: center;
  margin-top: 43px;
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

export const ValueText = styled.Text`
  font-size: 16px;
  margin: 48px 0 29px 31px;
`;

export const Text2 = styled.Text`
  font-size: 12px;
  width: 263px;
  margin: 0 0 21px 31px
`;