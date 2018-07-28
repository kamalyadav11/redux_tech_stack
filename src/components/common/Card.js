import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children} 
    {/* props.children is used to display whatever you include 
    between the opening and closing tags when invoking a component. */}
  </View>
);


const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  }
});

export { Card };
