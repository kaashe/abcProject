import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { useGetCurrentUserQuery } from "../common/dashboardSlice";
import { useDeleteUserMutation, useGetUserQuery } from "./accountSlice";

const AccountDetail = () => {
  const dispatch = useDispatch();
  const {
    address,
    balance,
    email,
    fullname,
    isApproved,
    phone,
    photo,
    role,
    status,
  } = JSON.parse(sessionStorage.getItem("user"));

  const {
    data: currentuser,
    refetch,
    // isSuccess: isCurrentUserSuccess,
    // isLoading: isCurrentUserLoading,
  } = useGetCurrentUserQuery();
  // console.log("current User", currentuser?.data?.data)
  const userData = currentuser?.data?.data;

  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const confirmDeleteClick = () => {
    dispatch(
      openModal({
        title: "Are you sure you want to delete this account?",
        bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
        // extraObject: { onConfirm: handleDeleteClick },
      })
    );
  };
  const Detailsdata = useGetUserQuery();
  // console.log("dataaaaaa", Detailsdata);
  const AccountData = Detailsdata?.data?.data?.data;
  // console.log("AccountData", AccountData);

  // const handleDeleteClick = async () => {
  //   try {
  //     await deleteUser().unwrap();
  //     // console.log("Account deleted successfully");
  //     dispatch(
  //       openModal({
  //         title: "Are you sure you want to delete this account?",
  //         bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
  //         extraObject: {},
  //       })
  //     );
  //   } catch (error) {
  //     // Handle errors, e.g., show an error message
  //     console.error("Failed to delete account:", error);
  //   }
  // };

  // const handleDeleteClick = () => {
  //   dispatch(
  //     openModal({
  //       title: "Are you sure you want to delete this account?",
  //       bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
  //       extraObject: {},
  //     })
  //   );
  // };
  // if (isCurrentUserLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!isCurrentUserSuccess) {
  //   return <div>Failed to load user data</div>;
  // }
  const EditUser = () => {
    dispatch(
      openModal({
        title: "Edit User",
        bodyType: MODAL_BODY_TYPES.EDIT_USER,
        extraObject: {},
      })
    );
  };
  return (
    <div className="p-6 items-center justify-center">
      <div className="max-w-3xl mx-auto">
        {/* Profile Card */}
        <div className="shadow rounded-lg p-6">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full"
              src={photo ? photo : "/personlogo.png"}
              onError={(e) => (e.target.src = "/personlogo.png")} // Fallback in case the image fails to load
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-[#ea580c]">
                {AccountData?.fullname}
              </h2>
              <p className="text-gray-600">{AccountData?.role}</p>
              <p className="text-gray-600">{AccountData?.address}</p>
            </div>
            {/* <button className="ml-auto bg-[#6D4E8A] text-white px-4 py-2  rounded-lg focus:ring-gray-300">
              Edit
            </button> */}
          </div>
        </div>

        {/* Personal Information */}
        <div className="shadow rounded-lg p-6 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-0">
              Personal Information
            </h3>
            <button
              onClick={EditUser}
              className="w-full sm:w-auto bg-[#6D4E8A] text-white px-4 py-2 rounded-lg focus:ring-gray-300"
            >
              Edit
            </button>
          </div>

          <div className="mt-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">Email Address</label>
                <p className="text-gray-800">{AccountData?.email}</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p className="text-gray-800">{AccountData?.phone}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-0">
              Do you want to delete your account?
            </h3>
            <button
              className="w-full sm:w-auto ml-0 sm:ml-auto bg-[#6D4E8A] text-white px-4 py-2 rounded-lg focus:ring-gray-300"
              onClick={confirmDeleteClick}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>

        {/* Account Details Table */}
        <div className="shadow rounded-lg p-6 mt-1">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-600">
            Account Details
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Required Deposit
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Reward Balance
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pending Review
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Used Review
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total Balance
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    ${userData?.requiredDeposite}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    ${userData?.rewards?.toFixed(2) || "0.00"}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {userData?.reviewsAllowed}
                    {/* {userData?.stuckreviews - userData?.reviewsUsed} */}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    {userData?.reviewsUsed}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    ${userData?.totalBalance?.toFixed(2)}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-green-500">
                    {userData?.status}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
