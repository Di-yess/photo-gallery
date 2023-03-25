import { errorGuard } from 'src/utils/typeGuards';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'src/constants/api';

export const uploadImageThunk = createAsyncThunk(
  'images/upload',
  async (imageInfo: FormData, { rejectWithValue }) => {
    try {
      await axios({
        url: `${API}/images`,
        method: 'POST',
        data: imageInfo,
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });
    } catch (err) {
      const typedError = errorGuard(err);
      return rejectWithValue(
        typeof typedError === 'string' ? typedError : typedError.message
      );
    }
  }
);
