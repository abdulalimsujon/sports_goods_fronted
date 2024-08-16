import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: "",
  category: "",
  brand: "",
  rating: "",
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
  },
});

export const { setPrice, setCategory, setBrand, setRating } =
  filterSlice.actions;
export default filterSlice.reducer;
