import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line no-undef
const apiLink = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_PROD : process.env.REACT_APP_BACKEND_DEV;

let accessToken = '';

const baseQuery = fetchBaseQuery({
   baseUrl: apiLink,
   crendentials: 'include',
   //credentials: 'same-origin',
   prepareHeaders: (headers) => {
      if (accessToken) {
         headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
   }
});

const refreshAccessToken = async (api, extraOptions) => {
   const modifiedArgs = {
      method: 'POST',
      url: '/UserManagement/GenerateToken',
      body: {
         UserToken: 'b3C70641-b177-4dE9-abf3-blVzZSIsImV4cCI6MTc'
      }
   };
   return await baseQuery(modifiedArgs, api, extraOptions);
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
   const refreshResult = await refreshAccessToken(api, extraOptions);
   if (refreshResult?.data?.tokenString) {
      accessToken = refreshResult.data.tokenString;
      const result = await baseQuery(args, api, extraOptions);

      return result;
   } else if (refreshResult?.data?.code == '101') {
      console.error(refreshResult.message);
   } else console.error(refreshResult?.message || refreshResult?.data?.message || 'An unknown error occurred');
};

export const apiSlice = createApi({
   baseQuery: baseQueryWithReauth,
   endpoints: () => ({})
});
