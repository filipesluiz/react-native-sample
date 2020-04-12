import { SET_TODO_TEXT, SET_EDIT_TODO } from "../actions"

const editTodoReducer = (state = ({id:0, text:'', done:false}), action) => {
    switch(action.type){
        case SET_TODO_TEXT:
            //spread operator or Object.assign. Using spread
            return {
                ...state, text: action.text
            }
        case SET_EDIT_TODO:
            console.log('edit:', action.todo);
            return action.todo;    
        default:
            return state;
    }
}

export default editTodoReducer;