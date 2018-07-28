import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children} 
    {/* we are going to pass some children elements so we are using props.children */}
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
