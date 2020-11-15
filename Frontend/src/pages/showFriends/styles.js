import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 65px;
  background-color: #009EE3;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  position: absolute;
  left: 30px;
`;


export const TextInput = styled.TextInput`
  flex: 1;
  color: #707070;
  font-size: 14px;
  padding: 0 5px 0 20px;
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

export const BottomHeader = styled.View`
  background-color:#009EE3; 
  align-items: center;
  justify-content: center;
  height: 58px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  border-radius: 17px;
  width: 294px;
  height: 39px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-bottom: 2px;
  margin-bottom: 12px;
`;

export const Icon = styled(AntDesign)`
  margin-right: 15px;
`;
