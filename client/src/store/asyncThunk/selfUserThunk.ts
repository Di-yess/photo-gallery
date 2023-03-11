import { errorGuard } from './../../utils/typeGuards';
import { IUserToken } from 'src/types/user.d';
import { API } from './../../constants/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const selfUserThunk = createAsyncThunk(
  '/auth/self',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<IUserToken>({
        url: API + '/auth/self',
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });
      localStorage.setItem('token', `Bearer ${data.token}`);
      return data;
    } catch (err) {
      const typedError = errorGuard(err);
      return rejectWithValue(
        typeof typedError === 'string' ? typedError : typedError.message
      );
    }
  }
);
