import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { fetchDonations } from "../services/api"

export const getDonations = createAsyncThunk("donations/getDonations", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchDonations()
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const donationsSlice = createSlice({
  name: "donations",
  initialState: {
    donations: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDonations.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.donations = action.payload
      })
      .addCase(getDonations.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export default donationsSlice.reducer

