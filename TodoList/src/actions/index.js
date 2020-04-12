export const ADD_TODO = 'ADD_TODO'; //named export
export const addTodo = text =>({
    type: ADD_TODO,
    text
}) 

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
});

export const SET_EDIT_TODO = 'SET_EDIT_TODO';
export const setEditTodo = todo => ({
    type: SET_EDIT_TODO,
    todo
});

//to the funcion return a object, it's necessery use '(' and ')'
//to import, node reads from index.js. 