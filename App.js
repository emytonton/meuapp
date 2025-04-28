import React, {Component} from "react";
import {View, Text, Image} from 'react-native';

class App extends Component {
  render(){

    let nome = 'Emilly';
    return(
      <View>
        <Text> Ola mundao!</Text>
        <Text style= {{ color:'red', fontSize: 25, margin: 15}}> 
          React!!
        </Text>

        <Image 
          source={{ uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/cavalo.jpg' }} 
          style={{ width: 300, height: 300 }} 
        />

        <Text> {nome} </Text>
        <Text> {nome} </Text>

      </View>
    );
  }
}

export default App;

