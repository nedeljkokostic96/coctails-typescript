import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  mobileOpen: boolean;
  device: string;
  menuOpen: boolean;
}

export interface Action {
  windowWidth: number;
}

const initialState: AppState = {
  mobileOpen: false,
  device: "",
  menuOpen: false,
};

const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    clickMenuOpen: (state: AppState) => {
      state.menuOpen = !state.menuOpen;
    },
    setMobileWidth: (state: AppState, action: PayloadAction<number>) => {
      state.mobileOpen = action.payload < 700;
      state.device = state.mobileOpen ? "mobile" : "computer";
    },
  },
  extraReducers: {},
});

export const { setMobileWidth, clickMenuOpen } = appSlice.actions;

export default appSlice.reducer;
