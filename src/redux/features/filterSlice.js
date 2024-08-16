import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  price: null,
  brand: null,
  rating: null,
  searchTerm: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearAllFilters: (state) => {
      state.category = null;
      state.price = null;
      state.brand = null;
      state.rating = null;
      state.searchTerm = null;
    },
  },
});

export const {
  setPrice,
  setCategory,
  setBrand,
  setRating,
  clearAllFilters,
  setSearchTerm,
} = filterSlice.actions;
export default filterSlice.reducer;
