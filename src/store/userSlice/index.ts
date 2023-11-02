import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from './actions';
import { IInitialState } from './type';

const initialState: IInitialState = {
  profile: null,
  error: null,
  isProfileLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.isProfileLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isProfileLoading = false;
        state.error = null;
        console.log('Fulfilled:', action.payload);
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload || null;
        state.isProfileLoading = false;
      });
  },
});

// export const { setProfile, setError } = userSlice.actions;

export default userSlice.reducer;
