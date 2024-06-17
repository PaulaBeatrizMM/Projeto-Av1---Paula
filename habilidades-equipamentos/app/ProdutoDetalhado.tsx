import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { styles } from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';






type RootStackParamList = {
  Login: undefined;
  Carrinho: undefined;
  
};


type NavigationProp = StackNavigationProp<RootStackParamList>;



const TelaInicial = ({ navigation }: { navigation: NavigationProp }) => {
  return (
    <View style={styles.produtoDetalhado}>
      <ImageBackground
        style={styles.logo1}
        source={require('../src/assets/images/bolos/mininaked.jpeg')}
      />
      
      
      <TouchableOpacity style={styles.textDestaque}>
        <Text style={styles.buttonText3}>Mini Naked</Text>
        <View style={{ flexDirection: 'row' }}>
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Text style= {styles.buttonText4}>5.0</Text>
        </View>
    </TouchableOpacity>

      <View style={styles.descricao}>
      <Text style={styles.textDestaque1}>Descrição:</Text>
      <Text style={styles.textDestaque2} >Massa a escolher: Baunilha ou Chocolate.</Text>
      <Text style={styles.textDestaque2}>Recheios disponíveis: Ninho, Brigadeiro tradicional, Beijinho ou Doce de leite.</Text>
      <Text style={styles.textDestaque2}>Finalização: Bolo finalizado no acetato com frutas da estação e docinhos.</Text>
      <Text style={styles.textDestaque2}>Serve: de 7 a 10 fatias.</Text>
      <Text style={styles.textDestaque3}>Valor: R$120,00</Text>
      </View>
      

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => navigation.navigate('Carrinho')}
      >
        <Text style={styles.buttonText1}>Acrescentar ao carrinho</Text>
      </TouchableOpacity>

    <View style={styles.footer2}>
        <Text style={styles.footerText}>Desenvolvido por: Paula Beatriz Murtha Menezes</Text>
        </View>  
    </View>
    
  );
       
};

export default TelaInicial;