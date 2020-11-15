import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';  
import { Text } from 'react-native';
import {Header, BackButton, Title, Icon, TextInput, BottomHeader, ContainerInput, Container} from './styles';

const ShowFriends = () => {
    return(
        <Container>
             <Header>
                <BackButton>
                    <Feather name="arrow-left" size={34} color="#fff" />
                </BackButton>
                <Text style={{fontSize: 18, color: "#fff"}}>Dividir conta</Text>
            </Header>

            <BottomHeader >
                <ContainerInput >
                    <TextInput placeholder="Informe o nome e-mail ou telefone" >
                    </TextInput>
                    <Icon name="search1" size={20} color="#2D3277" />
             </ContainerInput>
            </BottomHeader>

            <Title>
            </Title>
            <Container>

            </Container>

        </Container>
    )
}

export default ShowFriends;