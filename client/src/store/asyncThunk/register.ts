import { API } from 'src/constants/api';
import { IUserRegister, IUserToken } from 'src/types/user.d';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const register = createAsyncThunk(
  'users/register',
  async (userInfo: IUserRegister, { dispatch, rejectWithValue }) => {
    const { navigate, ...info } = userInfo;
    try {
      const { data } = await axios<IUserToken>({
        url: API + '/auth/registration',
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
