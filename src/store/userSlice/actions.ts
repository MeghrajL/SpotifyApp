import { setHeaders } from '@/utils/helpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (accessToken: string, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/me`, {
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
