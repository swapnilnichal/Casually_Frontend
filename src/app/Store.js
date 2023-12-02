import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/slices/todoSlice";

export const Store = configureStore({
    reducer : todoReducer
})