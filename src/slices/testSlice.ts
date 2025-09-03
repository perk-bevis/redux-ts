import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        completed: '',
        id: 0,
        title: '',
        userId: 0
    },
    loading: false,
};

export const fetchTodo = createAsyncThunk(
    'test/fetchTodo',
    async () =>
        await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
            res.json()
        )
)

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        // getData: (state) => {
        //     fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then((response) => response.json())
        //         .then((json) => {
        //             state.data = json;
        //         });
        // },
        clearData: (state) => {
            state.data = {
                completed: '',
                id: 0,
                title: '',
                userId: 0
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            // console.log(state);
            // console.log(action);

            state.data = action.payload
            state.loading = false
        });
    },
});

export const { clearData } = testSlice.actions;

export default testSlice.reducer;
