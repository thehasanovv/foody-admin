import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [] };

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state,action) => {
      state.categories.push(action.payload);
      /* {[...state,action.payload]} */
    },
    deleteCategory: (state,action) => {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCategories, addCategory, deleteCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
