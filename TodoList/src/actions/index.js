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

//to the funcion return a object, it's necessery use '(' and ')'
//to import, node reads from index.js. 