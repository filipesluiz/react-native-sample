import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SeriesScreen from '../src/pages/SeriesScreen';
import AddSerieScreen from '../src/pages/AddSerieScreen';
import SerieDetailScreen from '../src/pages/SerieDetailScreen';
import LoginScreen from '../src/pages/LoginScreen';

const Stack = createStackNavigator();

class Router extends React.Component {
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="series" component={SeriesScreen} options={{title:'Séries'}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{title:'Bem Vindo!'}}/>
            <Stack.Screen name="serie" component={SerieDetailScreen} options={({route}) => ({title:route.params.serie.title})}/>
            <Stack.Screen name="addSerie" component={AddSerieScreen} options={{title:'Nova Série'}}/>
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