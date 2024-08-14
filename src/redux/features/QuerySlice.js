import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filelds: [],
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    AddToQuery: (state, action) => {
      state.filelds.push({ ...action.payload });
    },
  },
});

export const { AddToQuery } = querySlice.actions;

export default querySlice.reducer;
