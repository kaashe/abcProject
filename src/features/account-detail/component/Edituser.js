import React, { useEffect } from "react";
import { useGetUserQuery } from "../accountSlice";
import { useForm } from "react-hook-form";
import FileInput from "../../../components/Input/FileInput";
import InputText from "../../../components/Input/InputText";
import { Controller } from "react-hook-form";
import InputNumber from "../../../components/Input/InputNumber";

const AboutUsDetails  = ({ closeModal }) => {
    const usereditdata = useGetUserQuery();
    const userData = usereditdata?.data?.data?.data;
    console.log("first", usereditdata?.data?.data?.data) 
    const { control, handleSubmit, reset, getValues } = useForm();
    useEffect(() => {
      if (userData) {
        reset(userData);
      }
    }, [userData, reset]);
    const onSubmit=()=>{
      
    }
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="overflow-y-scroll max-h-[65vh] px-1"
  >
      <>
        {/* <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div> */}
      </>
      <>
        <InputText
          name="fullname"
          labelTitle="Full Name"
          containerStyle="mt-4"
          control={control}
          rules={{ required: "Full Name is required" }}
        />
        <InputText
          name="email"
          labelTitle="Email"
          containerStyle="mt-4"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          }}
        />
        {/* {!id && ( */}
          {/* <>
            {" "}
            <InputText
              name="password"
              labelTitle="Password"
              type="password"
              containerStyle="mt-4"
              control={control}
              rules={{ required: "Password is required" }}
            />
            <InputText
              name="passwordConfirm"
              labelTitle="Confirm Password"
              type="password"
              containerStyle="mt-4"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              }}
            />
          </> */}
        {/* <FileInput
          labelTitle="Upload Photo"
          name="photo"
          // onChange={handleImageChange}
          control={control}
          rules={{ required: "Photo is required" }}
          placeholder="Choose image..."
        /> */}
          {/* <InputNumber
            name="balance"
            labelTitle="Balance"
            containerStyle="mt-4"
            control={control}
            rules={{ required: "Balance is required" }}
          /> */}
        <InputNumber
          name="phone"
          labelTitle="Phone"
          containerStyle="mt-4"
          control={control}
          rules={{ required: "Phone number is required" }}
        />
          {/* <InputNumber
            name="cnic"
            labelTitle="CNIC"
            containerStyle="mt-4"
            control={control}
            rules={{ required: "CNIC is required" }}
          /> */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <select {...field} className="select select-bordered w-full mt-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}
        />
        <InputText
          name="address"
          labelTitle="Address"
          containerStyle="mt-4"
          control={control}
          rules={{ required: "Address is required" }}
        />
          {/* <InputText
            name="education"
            labelTitle="Education"
            containerStyle="mt-4"
            control={control}
            rules={{ required: "Education is required" }}
          /> */}
        <div className="modal-action">
          <button
            type="button"
            className="btn btn-sm btn-glass"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          {/* <button
            type="submit"
            className="btn btn-sm btn-primary px-6"
            // disabled={signUpIsLoading || updateIsLoading}
          >
             Update
          </button> */}
        </div>
      </>
  </form>
  );
};

export default AboutUsDetails;
