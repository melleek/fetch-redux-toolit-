import { createAsyncThunk } from "@reduxjs/toolkit";

let api = "http://localhost:3000/data"


//get 
export const getUser = createAsyncThunk("todos/getUser",
    async function () {
        try {
            let response = await fetch(api)
            let data = await response.json()
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

//addUser 
export const addUser = createAsyncThunk("todos/addUser",
    async function (newUser, { dispatch }) {
        try {
            let response = await fetch(api,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                })
            dispatch(getUser())
        } catch (error) {
            console.log(error);
        }
    }
)


//delete 
export const deleteUser = createAsyncThunk("todos/deleteUser",
    async function (id, { dispatch }) {
        try {
            let response = await fetch(`${api}/${id}`, { method: 'DELETE' })
            dispatch(getUser())
        } catch (error) {
            console.log(error);
        }
    }
)

//edit 
export const editUser = createAsyncThunk("todos/editUser",
    async function (user, { dispatch }) {
        try {
            let response = await fetch(`${api}/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            dispatch(getUser())
        } catch (error) {
            console.log(error);
        }
    }
)

//completed
export const compUser = createAsyncThunk("todos/compUser",
    async function (user, { dispatch }) {
        try {
            let response = await fetch(`${api}/${user.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        comp: !user.comp
                    })
                })
            dispatch(getUser())
        } catch (error) {
            console.log(error);
        }
    }
)