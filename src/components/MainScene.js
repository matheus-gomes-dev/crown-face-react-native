import React from 'react';
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
const logo = require('../../assets/imgs/logo.png');
const btnPlay = require('../../assets/imgs/botao_jogar.png');
const btnAbout = require('../../assets/imgs/sobre_jogo.png');
const btnOthers = require('../../assets/imgs/outros_jogos.png');

export default class MainScene extends React.Component {

  componentWillMount() {
    console.log('my app');
  }

  render() {
    return (
      <View style={styles.mainScene}>

        <View style={styles.gamePresentation}>
          <Image source={logo} />
          <Image source={btnPlay} />
        </View>

        <View style={styles.footer}>
          <TouchableHighlight onPress={() => {Actions.about()}}>
            <Image source={btnAbout} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {Actions.others()}}>
            <Image source={btnOthers} />
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainScene: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  gamePresentation: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
