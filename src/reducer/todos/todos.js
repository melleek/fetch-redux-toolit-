import { createSlice } from '@reduxjs/toolkit'
import { getUser } from '../../api/todos/todosApi'

const todos = createSlice({
    name: "todos",
    initialState: {
        infoData: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.infoData = action.payload;
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
        })

    },
})


export default todos.reducer