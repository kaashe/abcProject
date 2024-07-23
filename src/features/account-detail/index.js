import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

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
  }

    = JSON.parse(localStorage.getItem("user"))
  const handleDeleteClick = () => {
    dispatch(
      openModal({
        title: "Are you sure you want to delete this account?",
        bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
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
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-[#ea580c]">{fullname}</h2>
              <p className="text-gray-600">{role}</p>
              <p className="text-gray-600">{address}</p>
            </div>
            <button className="ml-auto bg-[#6D4E8A] text-white px-4 py-2  rounded-lg focus:ring-gray-300">
              Edit
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="shadow rounded-lg p-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <button className="bg-[#6D4E8A] text-white px-4 py-2  rounded-lg focus:ring-gray-300">
              Edit
            </button>
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
              className="ml-auto bg-[#6D4E8A] text-white px-4 py-2  rounded-lg focus:ring-gray-300"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
