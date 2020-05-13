const NEW_SERIE = {
    title:'',
    key: "",
    gender: "police",
    rate: 0,
    img:'',        
    description:''
}

import {SET_FIELD, SET_NEW_SERIE, SET_EDIT_SERIE} from '../actions';

export default function(state = NEW_SERIE, action){
    switch(action.type){
        case SET_FIELD:{
            const newState = {...state};//clone with spread operator
            newState[action.field] = action.value;
            return  newState;
        }
        case SET_NEW_SERIE:{
            return NEW_SERIE;
        }
        case SET_EDIT_SERIE:{
            return action.serie;
        }
        default:
            return state;

    }
}