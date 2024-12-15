import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: !!localStorage.getItem('token')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;