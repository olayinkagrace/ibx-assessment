import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './userSlice'

export default configureStore({
  reducer: {
    user: newsReducer,
    }})