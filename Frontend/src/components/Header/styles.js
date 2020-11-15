import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const HeaderContainer = styled.View`
  height: 65px;
  background-color: #009EE3;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  position: absolute;
  left: 30px;
`;