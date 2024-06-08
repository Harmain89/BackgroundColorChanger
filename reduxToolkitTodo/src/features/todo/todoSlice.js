import { createSlice, nanoid } from "@reduxjs/toolkit";


const loadTodos = JSON.parse(localStorage.getItem('todos'));
// console.log(loadTodos);

let initialState = {};

if(loadTodos && loadTodos.length > 0) {

    initialState = {
        todos: loadTodos
    }

}
else {

    initialState = {
        todos: [
            {
                id: 1,
                text: "Hello World"
            }
        ]
    }
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id == action.payload.id) {
                    todo.text = action.payload.text
                }
            });
        }
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;      // These exports are for our components uses.

export default todoSlice.reducer;      // This export is for our store use.