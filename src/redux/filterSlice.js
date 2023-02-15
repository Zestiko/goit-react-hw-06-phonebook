import { createSlice} from '@reduxjs/toolkit';

const filterInitialState = '';

const filteredSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setSerch: (state, { payload }) => (state = payload),
  },
});
export const { setSerch } = filteredSlice.actions;
export const filtersReducer = filteredSlice.reducer;