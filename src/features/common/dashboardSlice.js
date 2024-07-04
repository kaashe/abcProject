import { apiSlice } from "../../app/apiSlice";

export const dashboardSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (initialPost) => ({
        url: `products`,
        method: "GET",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
export const { useGetProductsQuery } = dashboardSlice;
