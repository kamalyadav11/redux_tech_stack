import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const bool = true;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Here You will be learning Redux</Text>
        { bool && <Text>Kamal is Checking Conditional Statement</Text> }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
