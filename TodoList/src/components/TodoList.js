import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import {toggleTodo} from '../actions'

const TodoList = ({todos, dispatchToggleTodo}) => (
    <View>
        {todos.map(item => <TodoListItem key={item.id} todo={item} onPressTodo={() => dispatchToggleTodo(item.id)}
        onLongPress={() => {console.log(item)}}/>)}
    </View>
);

const mapStateToProps = state => {
    const {todos} = state;
    return {todos};
}

export default connect(mapStateToProps, {dispatchToggleTodo: toggleTodo})(TodoList);

