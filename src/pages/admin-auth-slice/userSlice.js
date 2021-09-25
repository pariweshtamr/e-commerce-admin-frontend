import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isLoggedIn: false,
  isPending: false,
  userRegistrationResponse: {},
  userLoginResponse: {},
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true;
    },

    responseSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userRegistrationResponse = payload || {};
    },

    loginSuccess: (state, { payload }) => {
      state.userInfo = payload || {};
      state.userLoginResponse = {};
      state.isLoggedIn = true;
      state.isPending = false;
    },

    loginAuto: (state) => {
      state.isLoggedIn = true;
    },

    loginFail: (state, { payload }) => {
      state.isPending = false;
      state.userLoginResponse = payload || {};
    },

    userLogoutSuccess: (state) => {
      state.userInfo = {};
      state.isLoggedIn = false;
    },

    requestFail: (state, { payload }) => {
      state.isPending = false;
      state.userRegistrationResponse = payload || {};
    },
  },
});

const { reducer, actions } = userSlice;

export const {
  requestPending,
  responseSuccess,
  loginSuccess,
  loginAuto,
  loginFail,
  userLogoutSuccess,
  requestFail,
} = actions;

export default reducer;
