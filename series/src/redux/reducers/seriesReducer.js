import {ADD_SERIE_TO_STATE} from '../actions';

export default function(state = null, action){
    switch(action.type){
        case ADD_SERIE_TO_STATE:{
            return state != null && state.length === action.series.length ? state : action.series;
        }
        
        default:
            return state;

    }
}