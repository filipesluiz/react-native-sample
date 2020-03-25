import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const Stack = createStackNavigator();

function AppContainer() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PeoplePage} options={screenOptions.home} />
          <Stack.Screen name="Detail" component={PeopleDetailPage} options={screenOptions.home}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const screenOptions = { 
  home:{
    title:'Pessoas',
    headerTintColor: 'white', /** arrow button back stack navigator **/
    headerStyle:{
      backgroundColor: '#5eb5f2',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      //flexGrow: 1, Essa propriedade faria o texto ocupar todo o Header, mas
      // na nova versão não funciona e precisei utilizar a propriedade abaixo. 
      //headerTitleAlign: 'center'
    },
    headerTitleAlign:'center'
  }  
}

export default AppContainer;