import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { api } from '../../api';

export type User = {
  id: number;
  name: string;
};

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: build.query<User, string>({
      query: id => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyFetchOneQuery } = userApi;
