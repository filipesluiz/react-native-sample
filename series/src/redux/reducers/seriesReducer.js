import {ADD_SERIE_TO_STATE} from '../actions';

export default function(state = [], action){
    switch(action.type){
        case ADD_SERIE_TO_STATE:{
            return state.length === action.series.length ? state : action.series;
        }
        
        default:
            return state;

    }
}