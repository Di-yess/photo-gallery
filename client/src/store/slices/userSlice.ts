import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInitState } from 'src/types/user';
import { login } from '../asyncThunk/login';
import { register } from '../asyncThunk/register';
import { selfUserThunk } from './../asyncThunk/selfUserThunk';

const initialState: UserInitState = {
  id: null,
  name: null,
  email: null,
  avatar: { link: null },
  images: null,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    clearInfo(state) {
      state.id = null;
      state.name = null;
      state.email = null;
      state.avatar = { link: null };
      state.images = null;
      state.status = null;
      state.error = null;

      localStorage.removeItem('token');
    },
  },

  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const { id, name, email, avatar, images } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
      state.images = images;
      state.status = 'fulfilled';
      state.error = null;
    });

    builder.addCase(
      login.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.status = 'rejected';
        state.error = action.payload;
      }
    );

    // register
    builder.addCase(register.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      const { id, name, email, avatar, images } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
      state.images = images;
      state.status = 'fulfilled';
      state.error = null;
    });

    builder.addCase(
      register.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.status = 'rejected';
        state.error = action.payload;
      }
    );

    //self user
    builder.addCase(selfUserThunk.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(selfUserThunk.fulfilled, (state, action) => {
      const { id, name, email, avatar, images } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
      state.images = images;
      state.status = 'fulfilled';
      state.error = null;
    });

    builder.addCase(
      selfUserThunk.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.status = 'rejected';
        state.error =
          typeof action.payload === 'string' ? action.payload : 'Unknow error';
      }
    );
  },
});

export default userSlice.reducer;
export const { clearInfo } = userSlice.actions;
