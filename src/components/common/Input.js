import React from 'react';
import { TextInput, Text, View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
// const { inputStyle, labelStyle, containerStyle } = styles;

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={styles.inputStyle} 
      onChangeText={onChangeText} //Some important steps
      value={value}
      underlineColorAndroid={'transparent'}
    />
  </View>
);

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    width: width * 0.95,
    lineHeight: 23, 
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 5,
    flex: 1,
    color: '#000'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { Input };
