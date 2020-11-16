import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 

export const Container = styled.View`
  align-items: center;
`;

export const NotificationSentText = styled.Text`
  margin: 121px 0 58px 0;
  width: 195px;
  font-size:18px;
  text-align: center;
`;

export const BackgroundImage = styled.Image`
  height: 197px;
  width: 238px;
  margin-bottom: 58px;
`;

export const PayNowText = styled.Text`
  font-size:18px;
  margin: 27px 0 33px 0;
`;

export const Icon = styled(Ionicons)`
  position: absolute;
  top: 48px;
  right: 43px;
`;
