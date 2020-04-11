import { ADD_TODO, TOGGLE_TODO } from "../actions";

let id = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
             const item = {
                 id: id++,
                 text: action.text,
                 done: false
             }
             return [...state, item]; // Join array state and Object item. Return new array
        case TOGGLE_TODO:
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        ...item,
                        done: !item.done
                    };//Merge new clone Object with property 'done', replace original object
                }   
                return item;
            });        
        default: return state;
    }
};

export default todoListReducer;