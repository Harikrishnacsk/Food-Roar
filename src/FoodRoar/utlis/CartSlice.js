import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
      name : 'Cart',
      initialState : {
        item : [],
      },
      reducers : {
        addItem : (state, action) => {
            state.item.push(action.payload)
        },
        removeItem : (state) =>{
            state.item.pop()
        },
        clearItem : (state) => {
            state.item.length = 0
        },
      },
 });

 export const {addItem, removeItem, clearItem} = cartSlice.actions;

 export default cartSlice.reducer;