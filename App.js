import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const logo = require('./assets/imgs/logo.png');
const btnPlay = require('./assets/imgs/botao_jogar.png');
const btnAbout = require('./assets/imgs/sobre_jogo.png');
const btnOthers = require('./assets/imgs/outros_jogos.png');

export default class App extends React.Component {

  componentWillMount() {
    console.log('my app');
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Image source={logo} />
          <Image source={btnPlay} />
        </View>

        <View>
          <Image source={btnAbout} />
          <Image source={btnOthers} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
