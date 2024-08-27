import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   // === COMMON REGION ===
   isSubmitting: false,
   activeStep: 0,

   // === LOGIN REGION ===
   loginState: {
      phoneNumber: '',
      password: ''
   },



};

const homeSlice = createSlice({
   name: 'api/home',
   initialState,
   reducers: {
      // === COMMON REGION ===
      setIsSubmitting: (state, action) => {
         const data = action.payload;
         state.isSubmitting = data;
      },


   }
});

export const { setLoginState, setIsSubmitting } =
   homeSlice.actions;

export default homeSlice.reducer;

// === COMMON REGION ===
export const selectIsSubmitting = (state) => state.auth.isSubmitting;
export const selectActiveStep = (state) => state.auth.activeStep;

