import { createSlice } from "@reduxjs/toolkit";

import { App } from "../Store/userStore";

const initialState: App = {
  isLoggedIn: false,
  showLogin: false,
  showSignUp: false,
  toggleMenu: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    togglelogIn: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log(state.isLoggedIn + "loggedin");
    },
    toggleMenuHandler: (state, action) => {
      state.toggleMenu = action.payload;
    },
    loginComponentHandler: (state, action) => {
      state.showLogin = action.payload;
      console.log(state.showLogin + "you are on login page");
    },
    signinComponentHandler: (state, action) => {
      state.showSignUp = action.payload;
      console.log(state.showSignUp + "you are on signup page");
    },
  },
});
export const {
  togglelogIn,
  toggleMenuHandler,
  loginComponentHandler,
  signinComponentHandler,
} = appSlice.actions;

export default appSlice.reducer;
