import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, BackHandler, ImageBackground } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from "./styles";


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const credenciaisvalidas = (username: string, password: string) => {
   //nesse caso adicionei o key por que ele substitui o key por qualquer outra variável, pelo tipo inserido a seguir.
    const usuariosPermitidos: { [key: string]: string } = {
      'Bia': '123456',
      'Paula': '987654',
      'Fred': '654321'
    };

    if (usuariosPermitidos[username] && usuariosPermitidos[username] === password) {
      return true;
    } else {
      Alert.alert('Erro', 'Nome de usuário ou senha inválidos');
      return false;
    }
  };

  const handleLogin = () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Erro', 'Por favor, insira o nome de usuário e a senha');
      return;
    } 
    if (credenciaisvalidas(username, password)) {
      
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    }
  };

  
  return (
    <View style={styles.container}>
      <TextInput 
        value={username}
        onChangeText={setUsername}
        placeholder={'Usuário ou e-mail'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Senha'}
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Lembrar-me</Text>
      </View>
      <Text 
        style={styles.forgotPassword}
        onPress={() => Alert.alert('Recuperação de senha', 'Link para recuperação de senha enviado.')}
      >
        Esqueci a senha
      </Text>
      <Text 
        style={styles.forgotPassword}
        onPress={() => Alert.alert('Registrar', 'Link para a tela de cadastro.')}
      >
          Ainda não tem cadastro? 
        Clique aqui para se Cadastrar
      </Text>
      <TouchableOpacity
        style={styles.button2}        
      >
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity> 
     
     <View>
     <ImageBackground
        style={styles.logo2}
        source={require('../src/assets/images/doceaocubo.jpeg')}
      />
     </View>
    </View>
  );
};


export default LoginScreen;