import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";
// configuring store and books reducer
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});