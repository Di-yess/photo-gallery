import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: null,
  avatar: { link: null },
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearInfo(state) {
      state.id = null;
    },
  },
});

export default userSlice.reducer;
export const { clearInfo } = userSlice.actions;
