import { createSlice } from '@reduxjs/toolkit';
import { ImagesInitState } from 'src/types/photo';
import { errorGuard } from 'src/utils/typeGuards';
import { imageThunk } from '../asyncThunk/imageThunk';
import { uploadImageThunk } from '../asyncThunk/uploadImageThunk';

const initialState: ImagesInitState = {
  images: [],
  status: null,
  error: null,
  uploadImage: {
    status: null,
    error: null,
  },
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
      state.images.push(...action.payload);
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(imageThunk.rejected, (state, action) => {
      const typedError = errorGuard(action.payload);
      state.status = 'rejected';
      state.error =
        typeof typedError === 'string' ? typedError : typedError.message;
    });

    // upload image
    builder.addCase(uploadImageThunk.pending, (state) => {
      state.uploadImage.status = 'loading';
      state.uploadImage.error = null;
    });
    builder.addCase(uploadImageThunk.fulfilled, (state) => {
      state.uploadImage.status = 'fulfilled';
      state.uploadImage.error = null;
    });
    builder.addCase(uploadImageThunk.rejected, (state, { payload }) => {
      state.uploadImage.status = 'rejected';
      if (typeof payload === 'string') {
        state.uploadImage.error = payload;
      } else {
        state.uploadImage.error = 'unknown error';
      }
    });
  },
});

export default imageSlice.reducer;
// export const {} = imageSlice.actions;
