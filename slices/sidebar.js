import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: false,
};

const sidebar = createSlice({
  name: "sidebarCollapse",
  initialState,
  reducers: {
    setCollapse: (state) => {
      state.collapse = !state.collapse;
    },
  },
});

export const {setCollapse} = sidebar.actions;

export default sidebar.reducer;
