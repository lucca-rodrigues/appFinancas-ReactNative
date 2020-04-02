import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components'

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e']
})`
  flex: 1;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Quasepronto = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background: #fff;
  color: #222;
  font-size: 17px;
  width: 90%;
  margin: 10px 0;
  border-radius: 7px;
  padding:10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #35aaff;
  padding:15px;
  width: 90%;
  border-radius: 7px;
  margin: 10px 0;
`;
export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const LoginLink = styled.TouchableOpacity`
  padding-bottom: 20px;

`;
export const LoginText = styled.Text`
  color: #fff;
`;

export const ButtonLogin = styled.TouchableOpacity`

`;

export const ButtonLoginText = styled.Text`
  color: #fff;
`;

