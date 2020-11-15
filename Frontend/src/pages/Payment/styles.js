import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 65px;
  background-color: #009EE3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  position: absolute;
  left: 30px; //mexi aqui
`;

export const Title = styled.View`
  background-color: #fff;
  padding: 0 31px;
  height: 62px;
  align-items: center;
  flex-direction: row;
  elevation: 3;
`;
export const TotalPayment = styled.View`
  margin-top: 65px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;