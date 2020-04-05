import {combineReducers} from 'redux';
import TodoListReducer from './todoListReducer'


export default combineReducers({
    list: TodoListReducer
});