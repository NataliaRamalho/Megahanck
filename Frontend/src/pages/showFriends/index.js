import React from 'react';
import { Feather } from '@expo/vector-icons';  
import { Text } from 'react-native';
import {
    Header, 
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

import Person from '../../assets/person.png'

const ShowFriends = () => {
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

        </Container>
    )
}

export default ShowFriends;