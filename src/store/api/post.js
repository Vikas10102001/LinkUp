import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${JSON.parse(localStorage.getItem("auth")).token}`
      );
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      createPost: builder.mutation({
        query: (data) => {
          return {
            url: "/posts",
            body: data,
            method: "POST",
          };
        },
      }),

      getPost: builder.query({
        query: () => {
          return {
            url: "/posts/feed",
            method: "GET",
          };
        },
      }),
    };
  },
});
