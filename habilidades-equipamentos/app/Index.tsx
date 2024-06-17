import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { styles } from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';




type RootStackParamList = {
  Login: undefined;
  Pedido: undefined;
  
};


type NavigationProp = StackNavigationProp<RootStackParamList>;



const TelaInicial = ({ navigation }: { navigation: NavigationProp }) => {
  return (
    <View style={styles.container1}>
      <ImageBackground
        style={styles.logo1}
        source={require('../src/assets/images/doceaocubo.jpeg')}
      />
      
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Pedido')}
      >
        <Text style={styles.buttonText1}>Realizar Pedido</Text>
      </TouchableOpacity>
      <View style={styles.icones}>
      <Entypo name="instagram" size={34} color="#FF3D86" style={{ marginRight: 15 }} />
      <FontAwesome name="whatsapp" size={34} color="#FF3D86" style={{ marginLeft: 15 }} />
      </View>
    </View>
  );
       
};

export default TelaInicial;