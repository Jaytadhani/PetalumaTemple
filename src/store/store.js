import { configureStore } from "@reduxjs/toolkit"
import eventsReducer from "./eventsSlice"
import donationsReducer from "./donationsSlice"

const store = configureStore({
  reducer: {
    events: eventsReducer,
    donations: donationsReducer,

  },
})

export default store

