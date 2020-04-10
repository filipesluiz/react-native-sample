import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => (
    <View>
        {todos.map(item => <TodoListItem key={item.id} todo={item}/>)}
    </View>
);

const mapStateToProps = state => {
    const {todos} = state;
    return {todos};
}

export default connect(mapStateToProps)(TodoList);

