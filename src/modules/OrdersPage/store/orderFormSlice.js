import { createSlice } from '@reduxjs/toolkit';

const orderFormSlice = createSlice({
  name: 'ordersForm',
  initialState: {
    isShow: false,
    num: '',
  },
  reducers: {
    showOrderForm(state, { payload }) {
      return payload;
    },
    closeOrderForm(state) {
      state.isShow = false;
    },
  },
});

export const { showOrderForm, closeOrderForm } = orderFormSlice.actions;
export default orderFormSlice.reducer;
