import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Header = styled.View`
  height: 65px;
  background-color: #009EE3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  position: absolute;
  left: 30px; 
`;


export const TextInput = styled.View`
   display: flex;
   flex-direction: row;
   justify-content:flex-end;
`

export const Title = styled.View`
  background-color: #fff;
  padding: 0 31px;
  height: 62px;
  align-items: center;
  flex-direction: row;
  elevation: 3;
`;

export const CirclesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 25px;
`;
export const Circle = styled.View`
  margin: 15px 10px;
  background-color: #009FE2;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

`