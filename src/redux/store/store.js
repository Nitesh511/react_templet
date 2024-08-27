import { configureStore } from '@reduxjs/toolkit';

import { homeApiSlice } from '../slice/Home/homeApiSlice';
import homeReducer from '../slice/Home/homeSlice';

export const store = configureStore({
   reducer: {
      home: homeReducer,
      [homeApiSlice.reducerPath]: homeApiSlice.reducer
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         immutableCheck: false,
         serializableCheck: false
      }).concat(homeApiSlice.middleware),

   // eslint-disable-next-line no-undef
   devTools: process.env.NODE_ENV === 'development'
});
