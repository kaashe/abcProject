import { apiSlice } from "../../app/apiSlice";

export const submittedReviewsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubmittedReviews: builder.query({
        query: (id) => ({
          url: `reviews?user=${id}`,
          method: "GET",
        }),
        providesTags: ['submitted-reviews'],
      }),
   
  }),
});
export const { useGetSubmittedReviewsQuery } = submittedReviewsSlice;
