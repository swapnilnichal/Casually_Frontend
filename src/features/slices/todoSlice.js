import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    total : 0,
}

const todoReducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            let item = {
                id: nanoid(),
                data: action.payload
            }
            state.todos.push(item);
            state.total += action.payload.price;
        },
        removeProduct: (state, action) => {
            // Find the removed item and subtract its price from the total
            const removedItemIndex = state.todos.findIndex((todo) => todo.data.id === action.payload);
            if (removedItemIndex !== -1) {
              state.total -= state.todos[removedItemIndex].data.price;
              state.todos.splice(removedItemIndex, 1);
            }
          },               
    }
})

export const {addTodo,removeProduct} = todoReducer.actions;
export default todoReducer.reducer;