import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "63701cc1f03239c72c00017f",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
