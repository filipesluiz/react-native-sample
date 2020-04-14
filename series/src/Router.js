import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../src/pages/LoginScreen.js';

const Stack = createStackNavigator();

class Router extends React.Component {
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="login" component={LoginScreen} options={{title:'Bem Vindo!'}}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const screenOptions = {
  title: 'Séries',
  headerStyle: {
    backgroundColor: '#ff5959',
    borderBottomWidth: 2,
    borderBottomColor: '#9c9797',
  }
}

export default Router;