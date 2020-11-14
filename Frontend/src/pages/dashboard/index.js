import React from 'react';
import { 
  Container, 
  TopHeader, 
  CirclesContainer, 
  Circle, 
  ContainerMiddle, 
  ContainerBottom
} from './styles';
import { 
  Feather, 
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons';
import ButtonComp from '../../components/button';
import { Text, View } from 'react-native';
const Dashboard = () => {
  return (
    <Container>
      <TopHeader>
        <SimpleLineIcons name="menu" size={30} color="white" />
        <View>
          <Text>Olá Henrique</Text>
          <Text>
            Nível 1 - Mercado Pontos 
            <Feather name="chevron-right" size={24} color="white" />
          </Text>
        </View>
        <Feather name="bell" size={30} color="white" />
      </TopHeader>
        
      <CirclesContainer>

        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>

        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>

        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>

        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
      </CirclesContainer>

      <ContainerMiddle>
        <Text style={{marginLeft: 70, marginRight: 10}}>Use o dinheiro da sua conta para comprar pela Internet com o Cartão Mercado Pago.</Text>
      </ContainerMiddle>

      <ContainerBottom>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
        
        <View>
          <Circle>
            <MaterialCommunityIcons name="qrcode" size={36} color="white" />
          </Circle>
          <Text style={{textAlign: "center"}}>Código{'\n'}QR</Text>
        </View>
      </ContainerBottom>

      <ButtonComp>Entrar agr</ButtonComp>

    </Container>
  );
}

export default Dashboard;