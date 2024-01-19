import { configureStore  } from "@reduxjs/toolkit";
import counter from "../reducer/counter/counter";
import todos from "../reducer/todos/todos";

export const store = configureStore ({
    reducer: {
        counter,
        todos
    },

}) 