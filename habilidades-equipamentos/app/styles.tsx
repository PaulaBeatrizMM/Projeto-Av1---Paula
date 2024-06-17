import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#FCF6EA',
        paddingTop: 60,
        paddingHorizontal: 30     
    },
        container1: {
          flex: 1,
          backgroundColor: '#FCF6EA',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo1: {
          width: 402,
          height: 400,
          position: 'static',
          top: 0
        },
        button1: {
          backgroundColor: '#FFC0CBE6',
          padding: 10,
          margin: 10,
          borderRadius: 50,
          width: '90%',
          alignItems: 'center',
          marginVertical: 5,
          
        },
        buttonText1: {
          color: '#AF4D04',
          fontSize: 18,
        },
        icones: {
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'static', 
          bottom: -5, 
          width: '100%'
        },
        input: {
        backgroundColor:'#FFC0CBE6',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
        textSkill: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
      checkboxContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 
      },
      checkbox: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 4,
        position: 'static'
      },
      label: {
        flex: 1,
        marginLeft: 5,
        fontSize: 16, 
        color: '#333',
      },
      forgotPassword: {
        color: '#1E90FF',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
      },
      logo2: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        alignItems: 'center',
        marginLeft: 15
      },
      button2: {
        backgroundColor: '#FFC0CBE6',
        padding: 10,
        margin: 10,
        borderRadius: 50,
        width: '90%',
        alignItems: 'center',
        marginVertical: 5,
      },
      container2: {
        flex: 1,
        backgroundColor: '#FCF6EA',
      },
      navBar: {
        height: 50,
        backgroundColor: '#FF3D86',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
      },
      navBarText: {
        color: '#fff',
        fontSize: 16,
      },
      categoriaBar: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
      },
      categoriaText: {
        fontSize: 16,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 5
      },
      produtos: {
        padding: 10,
        backgroundColor: '#FCF6EA',
        marginTop: 5
      },
      produtoText: {
        fontSize: 16,
        marginRight: 100,
        marginVertical: 2, 
      },
      produtoPreco: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      produto: {
        padding: 10,
        margin: 10,
        backgroundColor: '#FFC0CBE6',
        borderRadius: 5,
        width: 350,
        height: 200,
        position: 'static',
        marginLeft: 10
        
      },
      produtoImage: {
        width: 80,  
        height: 85, 
        borderRadius: 5,
        borderWidth: 1,  
        borderColor: '#FF3D86',
        marginLeft: 250,
        marginTop: -55,
      },
      categoriaBar1: {
        flexDirection: 'column',
        marginTop: 20,
        paddingVertical: 10
      },
      categoriaButton: {
        paddingHorizontal: 10,
        paddingVertical: 5
       // marginTop: -10
      },
      categoriaText1: {
        fontSize: 16,
        marginTop: -6
      },
      categoriaSelecionada: {
        backgroundColor: 'lightblue',
      },
      footer: {
        backgroundColor: '#FF3D86', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width: '100%',
      },
      footerText: {
        color: 'white', 
        fontSize: 16,
      },
      maisPedidosScrollView: {
        flexDirection: 'row'
      },
      produtoImage2: {
        width: 120,  
        height: 150, 
        borderWidth: 2,  
        borderColor: '#FCF6EA',
      },
      produtoDestaque: {
        backgroundColor: '#FFC0CBE6', 
      },
      produtoContainer: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#FFC0CBE6',
        borderRadius: 5,
      },
      produtoImageLeft: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      produtoTextContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
      },
      produtoDetalhado: {

      },
      textDestaque: {
        backgroundColor: 'rgba(255, 61, 134, 0.5)',   
        padding: 10,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: -80
      },
      buttonText3: {
        color: 'white',
        fontSize: 28,
      },
      buttonText4: {
        color: 'white',
        fontSize: 16,
      },
      textDestaque1:{
        color: '#AF4D04',
        fontSize: 18,
      },
      textDestaque2:{
        color: '#AF4D04',
        fontSize: 14,
      },
      textDestaque3:{
        color: 'green',
        fontSize: 17,
      },
      descricao: {
        position: 'static',
        textAlign: 'auto',
        marginLeft: 10
      },
      buttonAdd: {
        backgroundColor: '#FFC0CBE6',
        padding: 10,
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 30
      },
      footer2: {
        backgroundColor: '#FF3D86', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width: '100%',
        marginTop: 50
      },
        
        
      
           
    
});
