import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import {toggleTodo, setEditTodo} from '../actions'

const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditTodo}) => (
    <View>
        {todos.map(item => 
            <TodoListItem key={item.id} todo={item} 
                onPressTodo={() => dispatchToggleTodo(item.id)} 
                onLongPress={() => dispatchSetEditTodo(item)}/>
            )}
    </View>
);

const mapStateToProps = state => {
    const {todos} = state;
    return {todos};
}

export default connect(mapStateToProps, {dispatchToggleTodo: toggleTodo, dispatchSetEditTodo: setEditTodo})(TodoList);

