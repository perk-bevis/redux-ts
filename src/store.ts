import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})