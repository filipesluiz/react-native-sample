import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoForm from './components/TodoForm';

export default class TodoListApp extends React.Component {
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>
            <TodoForm/>
          </View>
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
