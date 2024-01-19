import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: {
        cnt: 0,
        text: "",
        value: "",
        data: [
            {
                id: 1,
                name: "Me",
                number: "kfjnh"
            },
            {
                id: 2,
                name: "You",
                number: "kdl n"
            }
        ]
    },
    reducers: {
        inc: (state, action) => {
            state.cnt++
        },
        dec: (state, action) => {
            state.cnt--
        },
        reset: (state, action) => {
            state.cnt += + action.payload
            state.value = ""
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
        deletE: (state, action) => {
            state.data = state.data.filter((e) => {
                return e.id !== action.payload
            });
        }

    }
})

export const { inc, dec, reset, setValue, deletE } = counter.actions
export default counter.reducer
    