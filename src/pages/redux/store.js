import { configureStore } from '@reduxjs/toolkit'
import GroupReducer from './GroupSlice'

export const store = configureStore({
  reducer: {
    group: GroupReducer
  }
})