import { createSlice } from "@reduxjs/toolkit";

import { App } from "../Store/userStore";

const initialState: App = {
  isLoggedIn: false,
  showLogin: false,
  showSignUp: false,
  toggleMenu: false,
  currentUser: undefined,
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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser + "Current user");
    },
  },
});
export const {
  togglelogIn,
  toggleMenuHandler,
  loginComponentHandler,
  signinComponentHandler,
  setCurrentUser,
} = appSlice.actions;

export default appSlice.reducer;
