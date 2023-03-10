import { createSlice } from '@reduxjs/toolkit';
import { ImagesInitState } from 'src/types/photo';
import { errorGuard } from 'src/utils/typeGuards';
import { imageThunk } from '../asyncThunk/imageThunk';

const initialState: ImagesInitState = {
  images: null,
  counter: 0,
  status: null,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // imageThunk
    builder.addCase(imageThunk.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(imageThunk.fulfilled, (state, action) => {
      state.images = action.payload;
      state.counter = state.counter + 1;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(imageThunk.rejected, (state, action) => {
      const typedError = errorGuard(action.payload);
      state.status = 'rejected';
      state.error =
        typeof typedError === 'string' ? typedError : typedError.message;
    });
  },
});

export default imageSlice.reducer;
// export const {} = imageSlice.actions;
