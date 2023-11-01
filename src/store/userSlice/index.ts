import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getProfile } from './actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        console.log('Loading...');
        // You can update the state as needed while the request is pending.
        // For example, set a loading flag or clear any previous errors.
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        console.log('Fulfilled:', action.payload);
        // Update the state with the data from the fulfilled action (action.payload).
      })
      .addCase(getProfile.rejected, (state, action) => {
        console.log('Rejected:', action.error);
        // state.error = action.payload
        // Handle the error, update the state, or perform error-related actions.
      });
  },
});

// export const { setProfile, setError } = userSlice.actions;

export default userSlice.reducer;
