import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        userDetails: action.payload,
      };
    },
  },
});

export default userSlice;
