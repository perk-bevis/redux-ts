import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./slices/todoSlice";
import testReducer from "./slices/testSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        test: testReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;