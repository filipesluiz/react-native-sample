import {combineReducers} from 'redux';
import useReducer from './userReducer';
import serieReducer from './serieReducer';

export default combineReducers({
    user: useReducer,
    serie: serieReducer
});