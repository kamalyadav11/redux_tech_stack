import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ButtonCard = (props) => (
  <View style={styles.buttonStyle}>
    <Button onPress={props.onPress} title="Login" />
  </View>
);

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 5,   
    borderColor: '#007aff',   
    marginLeft: 5,
    marginRight: 5
  }
});

export { ButtonCard };
