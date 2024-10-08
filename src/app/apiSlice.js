import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://commerce-api.codematesolution.com/api/v1/",
    baseUrl: "https://arkindemo.kitchhome.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = sessionStorage.getItem("access_token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  refetchOnFocus: false,
  refetchOnReconnect: true,
  tagTypes: ["Login", "sign-up", "products","review","users","user","withdraw","submitted-reviews","editUser"],
  endpoints: (builder) => ({
    // your endpoints here
  }),
});
