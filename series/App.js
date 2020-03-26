import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/pages/LoginScreen.js';

const Stack = createStackNavigator();

function App () {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;