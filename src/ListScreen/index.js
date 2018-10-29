import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

class ListScreen extends Component {
  static renderList(dataObj) {
    if (dataObj && dataObj.length > 0) {
      return dataObj.map((data, i) => {
        const index = i;
        if (data) {
          let icon = 'clear';
          let iconColor = 'red';
          if (data.completed) {
            icon = 'check';
            iconColor = 'green';
          }
          return (
            <View style={styles.listView} key={index}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#000' }}>{data.id}</Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text style={{ fontSize: 14, color: '#000' }}> {data.title.toUpperCase()}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <MaterialIcons name={icon} size={24} color={iconColor} />
              </View>
            </View>
          );
        }
        return null;
      });
    }
    return null;
  }

  static onPostButton() {
    axios
      .post('http://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: 'Testing',
        completed: false,
      })
      .then(response => {
        const resultElement = response;
        // ListScreen.onButtonClick();
        console.log(resultElement.data);
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  }

  // static onButtonClick() {
  //   // const SELF = this;
  //   let resultElement = {};
  //   axios
  //     .get('http://jsonplaceholder.typicode.com/todos')
  //     .then(response => {
  //       resultElement = response;
  //       console.log('ResultElement==', resultElement);
  //     })
  //     .catch(error => {
  //       Alert.alert('Error', error);
  //     });
  // }

  static getDerivedStateFromProps(props, state) {
    console.log(props, '==next==', state);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const SELF = this;
    let dataObj = {};
    if (
      SELF &&
      SELF.props &&
      SELF.props.navigation &&
      SELF.props.navigation.state &&
      SELF.props.navigation.state.params &&
      SELF.props.navigation.state.params.data
    ) {
      dataObj = SELF.props.navigation.state.params.data;
    }

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{ flex: 1, padding: 5 }}
            onPress={() => SELF.props.navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <View style={styles.headerView}>
            <Text style={styles.welcomeText}>List</Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1, padding: 5, alignItems: 'flex-end' }}
            onPress={() => ListScreen.onPostButton()}
          >
            <MaterialIcons name="add" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
          {ListScreen.renderList(dataObj)}
        </ScrollView>
      </View>
    );
  }
}
export default ListScreen;
