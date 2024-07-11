const { createSlice } = require("@reduxjs/toolkit");

const initialstate = {
  mode: "dark",
};

const modeSlice = createSlice({
  name: "theme",
  initialstate,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
