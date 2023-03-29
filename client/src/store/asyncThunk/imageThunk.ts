import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Image } from 'src/types/photo';
import { API } from 'src/constants/api';

export const imageThunk = createAsyncThunk(
  '/images/get',
  async (
    refCounter: React.MutableRefObject<number | null>,
    { rejectWithValue }
  ) => {
    if (refCounter.current === null) return ;
    try {
      const { data } = await axios<Image[]>({
        url: API + '/images/all',
        method: 'POST',
        data: { counter: refCounter.current },
      });
      refCounter.current = refCounter.current + 1;
      return data;
    } catch (err) {
      refCounter.current = null;
      return rejectWithValue(err);
    }
  }
);
