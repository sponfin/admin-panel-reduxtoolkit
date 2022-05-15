import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    dateFrom: '',
    dateTo: '',
    sumFrom: '',
    sumTo: '',
    statusOrder: [],
    isVisibleFilters: false,
  },
  reducers: {
    setValueOrdersFilters(state, { payload }) {
      state.dateFrom = payload.dateFrom;
      state.sumFrom = payload.sumFrom;
      state.sumTo = payload.sumTo;
      state.statusOrder = payload.statusOrder;
    },
    setValueOrdersSearch(state, { payload }) {
      state.search = payload.value;
    },
    clearValueOrdersSearch(state) {
      state.search = '';
    },

    clearAllValueOrdersFilters(state) {
      state.search = '';
      state.dateFrom = '';
      state.dateTo = '';
      state.sumFrom = '';
      state.sumTo = '';
      state.statusOrder = [];
    },
    toggleFilters(state) {
      state.isVisibleFilters = !state.isVisibleFilters;
    },
  },
});

export const {
  setValueOrdersSearch,
  clearValueOrdersSearch,
  setValueOrdersFilters,
  clearAllValueOrdersFilters,
  toggleFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
