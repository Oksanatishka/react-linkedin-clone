import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // payload is an object that we pass over it
      state.user = action.payload; 
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
// Selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
