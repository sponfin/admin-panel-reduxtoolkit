import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageSize: 10,
    activePage: 1,
  },
  reducers: {
    setActivePage(state, { payload }) {
      state.activePage = payload;
    },
  },
});

export const { setActivePage } = paginationSlice.actions;
export default paginationSlice.reducer;
