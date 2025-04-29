import React, {Component} from "react";
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };


    this.quebraBiscoito = this.quebraBiscoito.bind(this);

   
    this.frases = [
      "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
      "A vida trará coisas boas se tiver paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "A maior barreira para o sucesso é o medo do fracasso.",
      "O sucesso é a soma de pequenos esforços repetidos diariamente.",
      "Acredite em milagres, mas não dependa deles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "A sorte favorece a mente bem preparada.",
      "Você é do tamanho dos seus sonhos."
    ];
  }


  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' +  this.frases[numeroAleatorio]  + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }
  
    render(){
    return(
      <View style={styles.container}>

      <Image 
        source={this.state.img}
        style={styles.img}
      />
    
      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
    
      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.bntArea}>
          <Text style={styles.bntTexto}>Quebrar o biscoito</Text>
        </View>
      </TouchableOpacity>
    
    </View>
    

    );
  } 
}


const styles = StyleSheet.create ({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: "center"

  },
  botao:{
    width: 230,
    height: 50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  bntArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: "center"

  },
  bntTexto:{
    marginTop: 10,
    fontSize:18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }


 

});
export default App;




 