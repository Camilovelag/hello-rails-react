import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getGreetings = createAsyncThunk('greetings/getGreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const data = await response.json();
    return data[0].message;
  }
);

const greetingsReducer = createSlice({
  name: 'greetings',
  initialState: {
    message: 'No greetings message.'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => ({
      ...state,
      message: action.payload,
    }));
  },
});

export default greetingsReducer.reducer;
export { getGreetings} ;