import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    loadOrders(state, { payload }) {
      return payload;
    },
  },
});

export const { loadOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
