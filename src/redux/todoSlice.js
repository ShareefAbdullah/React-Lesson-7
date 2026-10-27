import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [
    { favorite: false, text: "Buy groceries" },
    { favorite: false, text: "Buy a phone" },
    { favorite: false, text: "Buy a car" },
    { favorite: false, text: "Buy a house" },
    { favorite: false, text: "Buy a plot" },
  ],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.todoItems = state.todoItems.filter((_, index) => {
        if (index === action.payload.index) {
          return false;
        }
        return true;
      });
    },
    makeFavorite: (state, action) => {
      state.todoItems = state.todoItems.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        }
        return item;
      });
    },
    addItem: (state, action) => {
      state.todoItems.unshift({
        text: action.payload,
        favorite: false,
      });
    },
  },
});

export const { deleteItem, makeFavorite, addItem } = todoSlice.actions;

export default todoSlice.reducer;
