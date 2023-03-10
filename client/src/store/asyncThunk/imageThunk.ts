import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Image } from 'src/types/photo';
import { API } from 'src/constants/api';

export const imageThunk = createAsyncThunk(
  '/images/get',
  async (counter: number, { rejectWithValue }) => {
    try {
      const { data } = await axios<Image[]>({
        url: API + '/images',
        method: 'GET',
        data: { counter: 'test' },
      }); 
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  } 
);
