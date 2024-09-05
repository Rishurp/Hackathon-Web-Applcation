// slices/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filteredData: [],
  },
  reducers: {
    addFilter: (state, action) => {
      state.filteredData = action.payload;
    },
    removeFilter: (state, action) => {
      const filterToDelete = action.payload;
      state.filteredData = state.filteredData.filter(
        (f) => f.level !== filterToDelete
      );
    },
  },
});

export const { addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
