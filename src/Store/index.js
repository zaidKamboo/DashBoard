import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/dataSlice";

const AppStore = configureStore({
  reducer: {
    dataObj: dataSlice.reducer,
  },
});

export default AppStore;
