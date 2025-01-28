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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.events = action.payload
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export default eventsSlice.reducer

