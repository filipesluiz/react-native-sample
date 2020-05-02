const NOVA_SERIE = {
    title:'',
    key: "",
    gender: "",
    rate: 0,
    img:'',        
    description:''
}

import {CREATE} from '../actions';

export default function(state = NOVA_SERIE, action){
    switch(action.type){
        case CREATE:{
            return action.serie ? action.serie : NOVA_SERIE;
        }
        default:
            return state;

    }
}