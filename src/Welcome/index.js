import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './style';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick() {
    const SELF = this;
    let resultElement = {};
    axios
      .get('http://jsonplaceholder.typicode.com/todos')
      .then(response => {
        resultElement = response;
        SELF.props.navigation.navigate('ListScreen', { data: resultElement.data });
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.onButtonClick();
          }}
          style={styles.btnStyle}
        >
          <Text style={{ color: '#fff' }}>Get Todos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Welcome;
