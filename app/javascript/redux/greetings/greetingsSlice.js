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
    message: '',
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.pending, (state) => ({
      ...state,
      message: 'Loading new greeting, please wait...',
      loading: true,
    }));
    builder.addCase(getGreetings.fulfilled, (state, action) => ({
      ...state,
      message: action.payload,
      loading: false,
    }));
    builder.addCase(getGreetings.rejected, (state, action) => ({
      ...state,
      message: 'No greetings messages loaded.',
      loading: false,
      error: action.error.message,
    }));
  },
});

export default greetingsReducer.reducer;
export { getGreetings} ;