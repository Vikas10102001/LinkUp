import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import alertSlice from "./slice/alert";
import userSlice from "./slice/user";
import postSlice from "./slice/post";
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    alert: alertSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});
setupListeners(store.dispatch);
export default store;
export const { useSignupMutation, useSigninMutation } = authApi;
export const { setUser } = userSlice.actions;
export const { setAlert } = alertSlice.actions;
export const { setShowPostModal } = postSlice.actions;
