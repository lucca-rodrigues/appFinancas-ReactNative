import React, {useState} from 'react';
import { View, Text } from 'react-native';

import {
  Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, LoginLink, LoginText,
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Container>
        <Logo source={require('../../../assets/logo.png')}/>

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
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <LoginLink onPress={()=> navigation.navigate('Register')}>
          <LoginText>Criar conta gratuita.</LoginText>
        </LoginLink>
      </Container>
    </Background>
  );
}
