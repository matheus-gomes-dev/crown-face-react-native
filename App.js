import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MainScene from './src/components/MainScene';
import About from './src/components/About';
import Others from './src/components/Others';

export default class App extends React.Component {

  componentWillMount() {
    console.log('my app');
  }

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='root'>
          <Scene key='mainScene' component = { MainScene } initil title="Cara ou Coroa"/>
          <Scene key='about' component = { About } title="Sobre o jogo"/>
          <Scene key='others' component = { Others } title="Outros jogos"/>
        </Scene>
      </Router>
    );
  }
}
