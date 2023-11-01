import { setHeaders } from '@/utils/helpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (accessToken, thunkAPI) => {
    console.log('hhh');
    // const accessToken = useSelector(state => state.authSlice.accessToken);
    console.log('>', accessToken);
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      //   Toast.show('sign in successful', Toast.SHORT);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      //   Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
