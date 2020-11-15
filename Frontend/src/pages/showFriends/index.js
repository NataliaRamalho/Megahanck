import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { 
    BackButton, 
    Icon,
    TextInput,
    BottomHeader, 
    ContainerInput, 
    Container, 
    SelectedFriends,
    FriendsList, 
    UserImage,
    UserContainer
} from './styles';
import Header from '../../components/Header';

import Person from '../../assets/person.png'

const ShowFriends = () => {
    const navigation = useNavigation();
    return(
        <Container>
             <Header>Dividir Conta</Header>
            <BottomHeader >
                <ContainerInput >
                    <TextInput placeholder="Informe o nome e-mail ou telefone" >
                    </TextInput>
                    <Icon name="search1" size={20} color="#2D3277" />
                </ContainerInput>
            </BottomHeader>

            <SelectedFriends>
                <UserContainer>
                    <UserImage source={Person}/>
                    <Text>Miguel</Text>
                </UserContainer>
            </SelectedFriends>
            <FriendsList>

            </FriendsList>
            <Button title="ok" onPress={() => navigation.navigate('SplitBill')} >
              
            </Button>
        </Container>
    )
}

export default ShowFriends;