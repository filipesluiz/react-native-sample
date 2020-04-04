import { ADD_TODO } from "../actions";

const TodoListReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:{
            const list = {
                text: action.text
            }
        }
        default: return state;
    }
};

export default TodoListReducer;