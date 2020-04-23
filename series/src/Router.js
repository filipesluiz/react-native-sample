import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../src/pages/LoginScreen';
import SeriesScreen from '../src/pages/SeriesScreen';
import SerieDetailScreen from '../src/pages/SerieDetailScreen';

const Stack = createStackNavigator();

class Router extends React.Component {
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="series" component={SeriesScreen} options={{title:'Séries'}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{title:'Bem Vindo!'}}/>
            <Stack.Screen name="serie" component={SerieDetailScreen} options={({route}) => ({title:route.params.serie.title})}/>
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