const NOVA_SERIE = {
    title:'',
    key: "",
    gender: "police",
    rate: 0,
    img:'',        
    description:''
}

import {SET_FIELD} from '../actions';

export default function(state = NOVA_SERIE, action){
    switch(action.type){
        case SET_FIELD:{
            const newState = {...state};//clone with spread operator
            newState[action.field] = action.value;
            return  newState;
        }
        default:
            return state;

    }
}