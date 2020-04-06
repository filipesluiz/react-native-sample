import { ADD_TODO } from "../actions";

const todoListReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:{
            console.log("Reducer add todo lista foi chamado... ", action.text);
            // const list = {
            //     text: action.text
            // }
            // return [...state, ...list]; // Join array state and list. Return new array
            return state;
        }
        default: return state;
    }
};

export default todoListReducer;