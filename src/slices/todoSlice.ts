import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            text: "learn redux toolkit",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }

            state.todos.push(newTodo)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id != action.payload)

            if (!todo) return

            todo.completed = !todo.completed

        },

        editTodo: (state, action) => {
            const { id, text } = action.payload;

            const todo = state.todos.find((todo) => todo.id === id);

            if (!todo) return;

            todo.text = text;
        },
    }
})

export const {addTodo, deleteTodo ,toggleTodo ,editTodo} = todoSlice.actions

export default todoSlice.reducer