import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.me = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.me = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
