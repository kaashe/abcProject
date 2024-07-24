import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { useGetCurrentUserQuery } from "../common/dashboardSlice";

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
  } = JSON.parse(localStorage.getItem("user"));

  const {
    data: currentuser,
    refetch,
    // isSuccess: isCurrentUserSuccess,
    // isLoading: isCurrentUserLoading,
  } = useGetCurrentUserQuery();
  // console.log("current User", currentuser?.data?.data)
  const userData = currentuser?.data?.data;

  const handleDeleteClick = () => {
    dispatch(
      openModal({
        title: "Are you sure you want to delete this account?",
        bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
        extraObject: {},
      })
    );
  };
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
              src={photo || "https://via.placeholder.com/150"} 
              // src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-[#ea580c]">{fullname}</h2>
              <p className="text-gray-600">{role}</p>
              <p className="text-gray-600">{address}</p>
            </div>
            <button onClick={EditUser} className="ml-auto bg-[#6D4E8A] text-white px-4 py-2  rounded-lg focus:ring-gray-300">
              Edit
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="shadow rounded-lg p-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            {/* <button className="bg-[#6D4E8A] text-white px-4 py-2 rounded-lg focus:ring-gray-300">
              Edit
            </button> */}
          </div>
          <div className="mt-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">Email Address</label>
                <p className="text-gray-800">{email}</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p className="text-gray-800">{phone}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <h3 className="text-lg font-semibold">Do you want to delete your account?</h3>
            <button
              className="ml-auto bg-[#6D4E8A] text-white px-4 py-2 rounded-lg focus:ring-gray-300"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Account Details Table */}
        <div className="shadow rounded-lg p-6 mt-1">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-600">Account Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required Deposit</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward Balance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Review</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Balance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  {/* <td className="px-6 py-4 whitespace-nowrap">$500</td> */}
                  <td className="px-6 py-4 whitespace-nowrap">${userData?.Deposit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${userData?.rewards}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{userData?.stuckreviews}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${userData?.totalBalance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-500">{userData?.status}</td>
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
