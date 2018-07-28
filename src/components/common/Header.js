import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {props.headerText}
	  </Text>
	</View>
);

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		elevation: 1, 
		// position: 'relative'
	},
  	textStyle: {
		fontSize: 30,
		color: '#000', 
  }
});

export { Header };
