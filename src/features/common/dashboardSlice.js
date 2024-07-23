import { apiSlice } from "../../app/apiSlice";

export const dashboardSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (initialPost) => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getUsers: builder.query({
      query: (currentPage = 1) => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    postReview: builder.mutation({
      query: (initialPost) => ({
        url: "reviews",
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['review','users'],
    }),
    getReviews: builder.query({
      query: (initialPost) => ({
        url: "reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    getCurrentUser: builder.query({
      query: (initialPost) => ({
        url: "users/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["review","users"],
    }),
  }),
});
export const { useGetProductsQuery,usePostReviewMutation,useUpdateUserMutation,useGetCurrentUserQuery,useGetUsersQuery } = dashboardSlice;
