import { ADD_TODO } from "../actions";

const todoListReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:{
            const list = {
                text: action.text
            }
            return [...state, ...list]; // Join array state and list. Return new array
        }
        default: return state;
    }
};

export default todoListReducer;