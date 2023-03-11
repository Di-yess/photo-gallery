import { IUserToken, IUserLogin } from 'src/types/user.d';
import { API } from './../../constants/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  '/users/login',
  async (userInfo: IUserLogin, { dispatch, rejectWithValue }) => {
    const { navigate, ...info } = userInfo;
    try {
      const { data } = await axios<IUserToken>({
        url: API + '/auth/login',
        method: 'POST',
        data: info,
      });
      localStorage.setItem('token', `Bearer ${data.token}`);
      navigate('/');
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
