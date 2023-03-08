import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk("counter/fetchIncrement", async (value) => {
  console.log(value);
  const response = await axios.put("/counter/increment", { value: value.count });
  return response;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      console.log(state.value);
      console.log(action.payload.data.value);
      state.value = action.payload.data.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
