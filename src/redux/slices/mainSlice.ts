import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  mobileMenu: false,
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    mobileMenuToggle(state, action: PayloadAction<boolean>) {
      state.mobileMenu = action.payload;
    }
    
  }
});

export const { mobileMenuToggle } = mainSlice.actions;

export default mainSlice.reducer;