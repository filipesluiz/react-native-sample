export const ADD_TODO = 'ADD_TODO'; //named export
export const addTodo = text =>({
    type: ADD_TODO,
    text
}) 
//to the funcion return a object, it's necessery use '(' and ')'
//to import, node reads from index.js. 