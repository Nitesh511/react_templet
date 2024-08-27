import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from 'redux/api';

const baseEndPoint =
   // eslint-disable-next-line no-undef
   process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_PROD : process.env.REACT_APP_BACKEND_DEV;

export const homeApiSlice = apiSlice.injectEndpoints({
   reducerPath: 'api/home',
   baseQuery: fetchBaseQuery({ baseUrl: baseEndPoint }),
   endpoints: (builder) => ({
      managePersonalInfo: builder.mutation({
         query: (credentials) => ({
            url: '/UserManagement/ManagePersonalInfo',
            method: 'POST',
            body: credentials
         })
      })
   })
});

export const { useManagePersonalInfoMutation } = homeApiSlice;
