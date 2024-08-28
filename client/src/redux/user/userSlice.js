import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sigInStart: (state) => {
      state.loading = true;
    },
    sigInSuccess: (state, action) => {
      state.currentUser = action.payload;
      (state.loading = false), (state.error = null);
    },
    sigInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { sigInStart, sigInSuccess, sigInFailure } = userSlice.actions;
export default userSlice.reducer
