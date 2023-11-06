import { setHeaders } from '@/utils/helpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { me, playlists } from '../../../endpoints';

// import { me, playlists } from './url';

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (accessToken: string, thunkAPI) => {
    try {
      // console.log(`${process.env.API_URL}${me}`);

      const response = await axios.get(`${process.env.API_URL}${me}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const getPlaylists = createAsyncThunk(
  'user/getPlaylists',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}${playlists}${params.limit}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${params.accessToken}`,
          },
        },
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
