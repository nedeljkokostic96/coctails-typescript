import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice";
import cocktailReducer from "./redux/coctailSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    cocktails: cocktailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
