import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    keySort: 'date',
    typeSort: 'desc',
  },
  reducers: {
    setSort(state, { payload }) {
      state.keySort = payload;
      state.typeSort = state.typeSort === 'desc' ? '' : 'desc';
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
