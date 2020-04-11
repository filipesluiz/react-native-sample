import {combineReducers} from 'redux';
import todoListReducer from './todoListReducer';
import editTodoReducer from './editTodoReducer';

export default combineReducers({
    todos: todoListReducer,
    editTodo: editTodoReducer
}); //Reducer retorne object with name 'todos' = array