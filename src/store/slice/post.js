import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    showPostModal: false,
  },
  reducers: {
    setShowPostModal(state, action) {
      return {
        ...state,
        showPostModal: action.payload.showPostModal,
      };
    },
  },
});

export default postSlice;
