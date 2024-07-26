import { apiSlice } from "../../app/apiSlice";

export const accountSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `users/me`,
        method: "GET",
      }),
      providesTags: ["editUser"],
    }),
    editUser: builder.mutation({
      query: (initialPost) => ({
        url: "users/updateMe",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["editUser"],
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: "users/deleteMe",
        method: "DELETE",
      }),
      invalidatesTags: ["editUser"],
    }),
  }),
});

export const { useEditUserMutation, useGetUserQuery, useDeleteUserMutation } = accountSlice;
