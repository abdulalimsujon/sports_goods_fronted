import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: "",
  category: "",
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
  },
});

export const { setPrice, setCategory } = filterSlice.actions;
export default filterSlice.reducer;
