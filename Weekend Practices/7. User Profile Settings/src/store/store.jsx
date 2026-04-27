import profileSettingsReducer from "./profileSettingsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { profileSettings: profileSettingsReducer },
});

export default store;
