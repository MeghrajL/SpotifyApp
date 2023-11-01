// import { setHeaders } from '@/utils/helpers';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getUserProfileAsync = createAsyncThunk(
//   'user/getProfile',
//   async (_, { getState }) => {
//     const accessToken = getState().auth.accessToken;
//     const response = await fetch(`${BASE_URL}/me`, {
//       method: 'GET',
//       headers: setHeaders(accessToken),
//     });
//     const data = await response.json();
//     return data;
//   },
// );
