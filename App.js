import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
      <Router>
        <Scene key='root'>
          <Scene key='mainScene' component = { MainScene } initil />
          <Scene key='about' component = { About } />
          <Scene key='others' component = { Others } />
        </Scene>
      </Router>
    );
  }
}
