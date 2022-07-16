import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service by using a base URL
const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    //creating the user
    signupUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    // login user
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
    // logout user
    logoutUser: builder.mutation({
      query: (payload) => ({
        url: "/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

// eslint-disable-next-line prettier/prettier
export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;


export default appApi;
