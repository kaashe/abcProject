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
    postReview: builder.mutation({
      query: (initialPost) => ({
        url: "reviews",
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['review'],
    }),
    getReviews: builder.query({
      query: (initialPost) => ({
        url: "reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
  }),
});
export const { useGetProductsQuery,usePostReviewMutation } = dashboardSlice;
