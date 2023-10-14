import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (signUpData) => ({
        url: "/auth/sign-up",
        method: "POST",
        data: signUpData,
      }),
      invalidatesTags: ["auth"],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useUserSignUpMutation, useUserLoginMutation } = authApi;
