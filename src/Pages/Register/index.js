import React, {useState} from 'react';
import firebase from '../../Services/firebaseConnection';

import {
  Background, Container, Quasepronto, AreaInput, Input, SubmitButton, SubmitText, ButtonLogin, ButtonLoginText
} from './styles';

export default function Register({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  firebase.auth().signOut(); // Desloga qualquer usuário que estiver Logado

  async function Cadastrar(){
    if(nome !== '' && email !== '' & password !== ''){
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async () => {
        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('users').child(uid).set({
          saldo: 0
        });
      })
      .catch((error)=>{
        alert(error.code);
      })
    }
  }

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

        <SubmitButton onPress={Cadastrar}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <ButtonLogin onPress={() => navigation.navigate('Login')}>
          <ButtonLoginText>Já possuo uma conta!</ButtonLoginText>
        </ButtonLogin>

      </Container>
    </Background>
  );
}
