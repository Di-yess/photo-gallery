import { IUserToken, IUserInfo } from 'src/types/user.d';
import { API } from './../../constants/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  '/user/login',
  async (userInfo: IUserInfo, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios<IUserToken>({
        url: API + '/auth/login',
        method: 'POST',
        data: userInfo,
      });
      localStorage.setItem('token', `Bearer ${data.token}`);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
