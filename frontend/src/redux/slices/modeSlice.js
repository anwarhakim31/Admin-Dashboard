import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const modeSLice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = modeSLice.actions;
export default modeSLice.reducer;
