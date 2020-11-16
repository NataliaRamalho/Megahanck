import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import { 
    Icon,
    TextInput,
    BottomHeader, 
    ContainerInput, 
    Container, 
    SelectedFriends,
    FriendsList, 
    UserImage,
    UserContainer,
    OkButton,
    FriendsContainer
} from './styles';
import Header from '../../components/Header';

import Person from '../../assets/person.png'

const ShowFriends = () => {
    const navigation = useNavigation();
    const [friends, setFriends] = useState([])
    const [selectedFriends, setSelectedFriends] = useState([]);

    console.log(friends)

    useEffect(() => {
            const response = api.get('/users').then(
                response => setFriends(response.data)
            ).catch(
                e => console.log(e)
            );
    }, []);

    const haddleFriends = (user)=>{
        setSelectedFriends(...selectedFriends, user);
        console.log(selectedFriends)
    }
    
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

                <UserContainer>
                    <UserImage source={Person}/>
                    <Text>Miguel</Text>
                </UserContainer>
            </SelectedFriends>

            <FriendsList>

                <FriendsContainer>
                    <UserImage source={Person}/>
                    <Text>Miguel</Text>
                </FriendsContainer>

                <FriendsContainer>
                    <UserImage source={Person}/>
                    <Text>Miguel</Text>
                </FriendsContainer>
            </FriendsList>
            <OkButton onPress={() => navigation.navigate('SplitBill')} >
                <Feather name="arrow-right" size={34} color="#fff" />
            </OkButton>
        </Container>
    )
}



export default ShowFriends;