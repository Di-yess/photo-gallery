import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'src/constants/api';

export const deleteImageThunk = createAsyncThunk(
  '/images/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      await axios({
        url: `${API}/images/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
