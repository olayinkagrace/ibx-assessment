import { createSlice } from "@reduxjs/toolkit"

export const newsSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "password",
  },
  reducers: {
    update: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    remove: (state) => {
      state = null;
    },
  },
});
export const { update } = newsSlice.actions;
export default newsSlice.reducer;