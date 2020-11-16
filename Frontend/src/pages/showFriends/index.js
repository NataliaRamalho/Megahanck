import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
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
import Person2 from '../../assets/person2.png'
import Person3 from '../../assets/person3.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    const handleFriends = (friend)=>{
        console.log(friend)
        // setSelectedFriends(...selectedFriends, friend);
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
                    <UserImage source={Person2}/>
                    <Text>Miguel</Text>
                </UserContainer>
            </SelectedFriends>

            <FriendsList>

                <TouchableOpacity  onPress={handleFriends(1)}>
                    <FriendsContainer >
                        <UserImage source={Person}/>
                        <Text>Luna</Text>
                    </FriendsContainer>
                </TouchableOpacity>


                <TouchableOpacity  onPress={handleFriends(2)}>
                    <FriendsContainer >
                        <UserImage source={Person2}/>
                        <Text>Miguel</Text>
                    </FriendsContainer>
                </TouchableOpacity>


            <TouchableOpacity  onPress={handleFriends(3)}>
                <FriendsContainer >
                    <UserImage source={Person3}/>
                    <Text>Jose</Text>
                </FriendsContainer>
            </TouchableOpacity>

            </FriendsList>
            <OkButton onPress={() => navigation.navigate('SplitBill')} >
                <Feather name="arrow-right" size={34} color="#fff" />
            </OkButton>
        </Container>
    )
}



export default ShowFriends;