import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/modeSlice";
import globalReducer from "./slices/indexSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    theme: modeReducer,
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export default store;
