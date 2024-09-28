import {createSlice, nanoid} from '@reduxjs/toolkit';

// First thing in store is initial state:
const initialState = {
    // Add your initial state here
    todos: [{id: 1, text: "Hello Javed"}]
}
// export todo slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // payload is an object it have anything in value
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { // current state and method in action
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {...todo, text: action.payload.text};
                }
                return todo;
            });
        }
        // update me id milegi and state and property override
    } // in reducer properties and function
})

// we need to export individual reducer properties they will work in components
export const {addTodo, removeTodo, updateTodo} =  todoSlice.actions;

// we need to export reducer to store
export default todoSlice.reducer;