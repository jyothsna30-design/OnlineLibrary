import { createSlice } from "@reduxjs/toolkit";
import booksData from "../utilis/data";

const booksSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // New book first
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;