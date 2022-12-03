import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color : ""
}

const test = createSlice({
  name: "testColor",
  initialState,
  reducers: {
    setCustomeColor : (state,action) => {
        state.color = action.payload
    }
  }
});

export const { setCustomeColor } = test.actions;

export default test.reducer