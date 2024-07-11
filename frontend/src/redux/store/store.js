import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "redux/slices/modeSlice";

const store = configureStore({
  reducer: modeSlice,
});

export default store;
