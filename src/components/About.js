import React from 'react';
import { Text } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: '#61BD8C' }}>
        Aqui podem ser apresentadas informações sobre o jogo
      </Text>
    )
  }
}