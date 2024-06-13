import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    pageTitle: "Home",
    noOfNotifications: 15,
    newNotificationMessage: "",
    newNotificationStatus: 1,
    dashboardStateRoute: "",
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title;
    },
    setDashboardStateRoute: (state, action) => {
      state.dashboardStateRoute = action.payload.stateRoute;
    },
    removeNotificationMessage: (state, action) => {
      state.newNotificationMessage = ""
    },

    showNotification: (state, action) => {
      state.newNotificationMessage = action.payload.message
      state.newNotificationStatus = action.payload.status
    },
  },
});

export const { setPageTitle, removeNotificationMessage, showNotification,setDashboardStateRoute } = headerSlice.actions;

export default headerSlice.reducer;