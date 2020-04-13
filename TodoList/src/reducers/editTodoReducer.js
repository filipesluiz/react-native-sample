import { SET_TODO_TEXT, SET_EDIT_TODO, UPDATE_TODO, ADD_TODO } from "../actions"

const newTodo = ({id:null, text:'', done:false});

const editTodoReducer = (state = newTodo, action) => {
    switch(action.type){
        case SET_TODO_TEXT:
            //spread operator or Object.assign. Using spread
            return {
                ...state, text: action.text
            }
            case SET_EDIT_TODO:
                console.log('edit:', action.todo);
                return action.todo;    
        case ADD_TODO:
        case UPDATE_TODO:
            return newTodo; 
        default:
            return state;
    }
}

export default editTodoReducer;