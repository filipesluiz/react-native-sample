import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import TodoForm from './components/TodoForm';
import rootReducer from './reducers'; //read from index.js
import TodoList from './components/TodoList';

const store = createStore(rootReducer, devToolsEnhancer()); //devToolsEnhancer is to do debug redux

export default class TodoListApp extends React.Component {
  render(){
        return (
          <Provider store={store}>
            <View style={styles.container}>
              <Text style={styles.titulo}>Minhas Tarefas</Text>
              <TodoForm/>
              <TodoList/>
            </View>
          </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:30
  },
  titulo:{
    fontSize:16,
    marginLeft:5,
    fontWeight: "bold",
    color: '#80c0f2'
  }
});
