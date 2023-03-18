import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'src/constants/api';

export const deleteImageThunk = createAsyncThunk(
  '/images/delete',
  async (id: number, { rejectWithValue }) => {
    return id;
    try {
      await axios({
        url: `${API}/images/${id}`,
        method: 'DELETE',
      });
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
