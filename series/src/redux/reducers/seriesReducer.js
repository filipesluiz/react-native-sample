import {ADD_SERIE_TO_STATE, RESET} from '../actions';

export default function(state = null, action){
    switch(action.type){
        case ADD_SERIE_TO_STATE:
            //return action.series;
            //return state != null && state.length === action.series.length ? state : action.series;
            return state === null || action.reload ? action.series: state;
        case RESET:
            return null;
        default:
            return state;

    }
}