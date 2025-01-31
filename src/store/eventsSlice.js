import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchPetalumaEvents } from "../services/api"

export const getEvents = createAsyncThunk("events/getEvents", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchPetalumaEvents()
    return response
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    status: "idle",
    error: null,
    loading:false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.loading=false
        state.events = action.payload
      })
      .addCase(getEvents.rejected, (state, {payload}) => {
        state.status = "failed"
        state.loading=false,
        state.error = payload
      })
  },
})

export default eventsSlice.reducer

