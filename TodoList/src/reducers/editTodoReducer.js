import { SET_TODO_TEXT } from "../actions"

const editTodoReducer = (state = ({id:null, text:'', done:false}), action) => {
    switch(action.type){
        case SET_TODO_TEXT:
            //spread operator or Object.assign. Using spread
            return {
                ...state, text: action.text
            }
        default:
            return state;
    }
}

export default editTodoReducer;