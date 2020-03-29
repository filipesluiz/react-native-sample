import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';

import LoginScreen from './src/pages/LoginScreen.js';

const Stack = createStackNavigator();

function configFirebase(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC07jlc08zjqGMfqWFSWjZY8PP2S4FYJ9c",
    authDomain: "series-sample.firebaseapp.com",
    databaseURL: "https://series-sample.firebaseio.com",
    projectId: "series-sample",
    storageBucket: "series-sample.appspot.com",
    messagingSenderId: "908882369785",
    appId: "1:908882369785:web:ae8ce9c3f899e1bac39628",
    measurementId: "G-ZEJ756N5NG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

function App () {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="login" component={LoginScreen} options={{title:'Bem Vindo!'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );

}

const screenOptions = {
  title: 'Séries',
  headerStyle: {
    backgroundColor: '#ff5959',
    borderBottomWidth: 2,
    borderBottomColor: '#9c9797',
  }
}

export default App;