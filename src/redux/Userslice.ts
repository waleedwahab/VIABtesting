import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.userInfo = action.payload.user;
      state.userToken = action.payload.token;
      state.error = null;
      state.success = true;
    },
    logOut: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.success = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
