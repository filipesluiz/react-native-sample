import {combineReducers} from 'redux';
import TodoListReducer from './todoListReducer'


export default combineReducers({
    todos: TodoListReducer
}); //Reducer retorne object with name 'todos'