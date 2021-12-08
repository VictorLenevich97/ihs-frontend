import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_API } = process.env;

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API,
  }),
  endpoints: () => ({}),
});
