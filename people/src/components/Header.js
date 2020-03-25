import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
	<View style={style.container}>
		<Text style={style.title}>{props.title}</Text>
	</View>
);

/** Styles **/
const style = StyleSheet.create({
	container:{
		marginTop: 24,
	  	backgroundColor: '#5eb5f2',
	  	alignItems: 'center',
	  	justifyContent: 'center'
	},
	title:{
		fontSize:30,
		color: '#fff'
	}
});

export default Header;//Permite que a variável header seja importada e usada em outro arquivo js