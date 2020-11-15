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

export const TextInput = styled.TextInput`
  flex: 1;
  color: #707070;
  font-size: 14px;
  padding: 0 5px 0 20px;
`;

export const Icon = styled(AntDesign)`
  margin-right: 15px;
`;

export const SelectedFriends = styled.View`
  background-color: #fff;
  padding: 0 31px;
  height: 89px;
  align-items: center;
  flex-direction: row;
  elevation: 3;

  ${props => props.isSelected &&
    css`
      visibility: visible;
    `}
`;

export const FriendsList = styled.View`

`;

export const UserImage = styled.Image`
  margin: 0 20px 0 15px; 
  width: 54px;
  height: 54px;
  border-radius: 27px;  
`;

export const UserContainer = styled.View`
  
`;