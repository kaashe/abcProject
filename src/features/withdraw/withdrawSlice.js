import { apiSlice } from "../../app/apiSlice";

export const withdrawSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    withdrawRequest: builder.mutation({
      query: (initialPost) => ({
        url: "withdrawals",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["withdraw"],
    }),
  }),
});
export const { useWithdrawRequestMutation } = withdrawSlice;
