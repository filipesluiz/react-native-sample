import { ADD_TODO } from "../actions";

let id = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:{
            console.log("Reducer add todo lista foi chamado... ", action.text, state);
             const item = {
                 id: id++,
                 text: action.text
             };
            return [...state, item]; // Join array state and Object item. Return new array
        }
        default: return state;
    }
};

export default todoListReducer;