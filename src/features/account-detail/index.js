import React from "react";
import { useForm } from "react-hook-form";
import InputText from "../../components/Input/InputText"; // Assuming a custom InputText component

const AccountDetail = ({ closeModal }) => {
  const { control, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account-detail-form w-72">
      {/* Title (Optional) */}
      <h2 className="text-lg font-medium mb-4">Edit Account Details</h2>

      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-4">
        <InputText
          name="name"
          labelTitle="Name"
          control={control}
          rules={{ required: "Name is required" }}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <InputText
          name="email"
          labelTitle="Email"
          control={control}
          rules={{ required: "Email is required" }}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <InputText
          name="phone"
          labelTitle="Phone"
          control={control}
          rules={{ required: "Phone is required" }}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {/* Add additional fields here */}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="btn btn-sm btn-outline btn-gray mr-2"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-sm btn-primary px-6">
          Update
        </button>
      </div>
    </form>
  );
};

export default AccountDetail;
