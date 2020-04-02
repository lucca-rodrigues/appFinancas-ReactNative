import React, {useState} from 'react';
import { View, Text } from 'react-native';

import {
  Background, Container, Quasepronto, AreaInput, Input, SubmitButton, SubmitText, ButtonLogin, ButtonLoginText
} from './styles';

export default function Register({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Container>
        <Quasepronto>Quase tudo pronto :)</Quasepronto>
        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorret={false}
            autoCaptalize="none"
            value={nome}
            onChangeText={(nome) => setNome(nome)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorret={false}
            autoCaptalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorret={false}
            autoCaptalize="none"
            securyTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AreaInput>

        <SubmitButton onPress={()=>{}}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <ButtonLogin onPress={() => navigation.navigate('Login')}>
          <ButtonLoginText>Já possuo uma conta!</ButtonLoginText>
        </ButtonLogin>

      </Container>
    </Background>
  );
}
