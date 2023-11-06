import { createSlice } from '@reduxjs/toolkit';
import { getPlaylists, getProfile } from './actions';
import { IInitialState } from './type';

const initialState: IInitialState = {
  profile: null,
  error: null,
  isProfileLoading: false,
  playlists: null,
  isError: false,
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
        console.log(action.payload);
        state.profile = action.payload;
        state.isProfileLoading = false;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload || null;
        state.isProfileLoading = false;
        state.isError = true;
      })
      .addCase(getPlaylists.pending, (state, action) => {
        state.isProfileLoading = true;
      })
      .addCase(getPlaylists.fulfilled, (state, action) => {
        state.playlists = action.payload;
        console.log('plist', action.payload);
        state.isProfileLoading = false;
      })
      .addCase(getPlaylists.rejected, (state, action) => {
        state.error = action.payload || null;
        state.isProfileLoading = false;
        state.isError = true;
      });
  },
});

// export const { setProfile, setError } = userSlice.actions;

export default userSlice.reducer;
