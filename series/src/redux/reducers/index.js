import {combineReducers} from 'redux';
import useReducer from './userReducer';
import serieReducer from './serieReducer';
import seriesReducer from './seriesReducer';

export default combineReducers({
    user: useReducer,
    serie: serieReducer,
    series: seriesReducer
});