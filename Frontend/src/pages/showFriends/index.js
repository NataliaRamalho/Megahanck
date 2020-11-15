import React from 'react';
const { Container } = require("../Payment/styles")
import { Feather, AntDesign } from '@expo/vector-icons';  
import { TextInput,Text} from 'react-native';
import {Header, BackButton, Title, ContainerInput } from './styles';

const ShowFriends = () => {
    return(
        <Container>
             <Header>
                <BackButton>
                    <Feather name="arrow-left" size={36} color="#fff" />
                </BackButton>
                <Text style={{fontSize: 18, color: "#fff"}}>Dividir conta</Text>
            </Header>
            <Container style={{backgroundColor:'#009EE3', display: "flex", alignContent: "center"}}>
             <ContainerInput style={{backgroundColor:'red'}}>
                 <TextInput  
                    style={{width: 294,  borderRadius: 17, backgroundColor: '#FEFFFF', height: 39, 
                    alignSelf: "center", display:"flex", paddingLeft: 20}} 
                    placeholder="Informe o nome e-mail ou telefone" >
                </TextInput>
                    <AntDesign name="search1" size={20} color="#2D3277" />
             </ContainerInput>
                
            </Container>
            <Title>
            </Title>
            <Container>

            </Container>

        </Container>
    )
}

export default ShowFriends;