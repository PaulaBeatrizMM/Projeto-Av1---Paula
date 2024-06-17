import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import img1 from '../src/assets/images/bolos/bolomora.jpeg'
import img2 from '../src/assets/images/bolos/bolochantilly.jpg'
import img3 from '../src/assets/images/bolos/bolochoc.jpg'
import img4 from '../src/assets/images/bolos/brigadeiro.jpeg'
import img5 from '../src/assets/images/bolos/café.jpeg'
import img6 from '../src/assets/images/bolos/caipirinha.jpeg'
import img7 from '../src/assets/images/bolos/limaosiciliano.jpeg'
import img8 from '../src/assets/images/bolos/mininaked.jpeg'
import img9 from '../src/assets/images/bolos/ninho.jpeg'
import img10 from '../src/assets/images/bolos/nozes.jpeg'

//aqui declaro as constantes

const Produtos = () => {
  const categorias = ['Bolos', 'Docinhos', 'Fatias', 'Bebidas', 'Diversos'];
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const maispedidos =[img4, img5, img6, img7, img8, img9, img10]
  const bolos = [
    { nome: 'Torta de Chocolate 15 fatias',
      descricao: 'Massa de chocolate, com recheio cremoso de ganache meio amargo ao licor', 
      valor: 'R$ 210,00', 
      imagem: img3 },
    { nome: 'Torta de Morango 15 fatias', 
      descricao: 'Massa de baunilha, creme de ninho com morangos frescos.', 
      valor: 'R$ 210,00', 
      imagem: img1 },
      { nome: 'Bolo Chantilly 15 fatias (Pronta entrega)', 
        descricao: 'Massa de baunilha ou chocolate, recheio a escolher entre disponíveis no dia.', 
        valor: 'R$ 210,00', 
        imagem: img2 },
        { nome: 'Mini Naked 7 a 10 fatias (Pronta entrega)', 
          descricao: 'Massa de baunilha e recheio de Ninho. Finalizado com uvas ou morangos frescos.', 
          valor: 'R$ 120,00', 
          imagem: img8 },];
               

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoriaClick = (categoria: string) => { 
      console.log(`Categoria clicada: ${categoria}`);
      setCategoriaSelecionada(categoriaSelecionada);
    };;

  const windowHeight = Dimensions.get('window').height;

//aqui vou inicar os retornos do que declarei em cima      

  return (
  //primeiro retorno - fundo
    <View style={styles.container2}>    
      <View style={styles.navBar}>
      <Text style={styles.navBarText}>
        Olá, Bia!{'\n'}
        Seja bem-vindo(a) a Doce ao cubo!{'\n'}
      </Text>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="search1" size={24} color="white" />
          <Entypo name="shopping-cart" size={24} color="white" />
        </View>
      </View>

    <View style={styles.categoriaBar}>
      <Text style={styles.categoriaText}>Produtos mais pedidos da semana:</Text>
      </View>

      <ScrollView horizontal >
        {maispedidos.map((destaque, index) => (
          <View key={index} style={styles.produtoDestaque}>
            <Image source={destaque} style={styles.produtoImage2} /> 
            
          </View>
        ))}
      </ScrollView>    

      <ScrollView horizontal style={styles.categoriaBar1}>
      {categorias.map((categoria, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoriaButton,
            categoria === categoriaSelecionada && styles.categoriaSelecionada,
          ]}
          onPress={() => handleCategoriaClick(categoria)}
        >
            <Text style={styles.categoriaText1}>{categoria}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.produtos}>
        {bolos.map((bolo, index) => (
          <View key={index} style={styles.produtoContainer}>
            <Image source={bolo.imagem} style={styles.produtoImageLeft} />
            <View style={styles.produtoTextContainer}>
              <Text style={styles.produtoText}>{bolo.nome}</Text>
              <Text style={styles.produtoText}>{bolo.descricao}</Text>
              <Text style={styles.produtoPreco}>{bolo.valor}</Text>
            </View>
          </View>
        ))}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Desenvolvido por: Paula Beatriz Murtha Menezes</Text>
        </View>
      </ScrollView>
    </View>
    
    
);
};


export default Produtos;