import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
  mobileOpen: boolean;
}

export const initialState: HeaderState = {
  mobileOpen: false
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setMobileOpen: (state, action: PayloadAction<boolean>) => ({
      ...state,
      mobileOpen: action.payload
    })
  }
});

export default headerSlice;
