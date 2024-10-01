import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    useruid: null, // Initial state with user details directly at the root level
  },
  reducers: {
    addUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.useruid = action.payload.useruid;
    },
    removeUser: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.useruid = null; // Reset values to null on remove
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
