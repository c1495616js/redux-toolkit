import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
  },
});

export default counterSlice;
