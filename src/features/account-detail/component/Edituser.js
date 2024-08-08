import React, { useEffect } from "react";
import { useGetUserQuery, useEditUserMutation } from "../accountSlice";
import { useForm, Controller } from "react-hook-form";
import FileInput from "../../../components/Input/FileInput";
import InputText from "../../../components/Input/InputText";
import InputNumber from "../../../components/Input/InputNumber";
import { showNotification } from "../../common/headerSlice";
import { useDispatch } from "react-redux";
import SelectBox from "../../../components/Input/SelectBox";

const AboutUsDetails = ({ closeModal }) => {
    const usereditdata = useGetUserQuery();
    const userData = usereditdata?.data?.data?.data;

    console.log("Fetched User Data:", userData);

    const { control, handleSubmit, reset, getValues } = useForm();
    const [editUser,  { isLoading, isError, error, isSuccess }] = useEditUserMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData) {
            reset(userData);
            if (isSuccess) {
            dispatch(
              showNotification({
                message: "User Updated!",
                status: 1,
              })
            );
          }
        }
    }, [userData, reset, isSuccess]);

    const onSubmit = async (data) => {
        // console.log("Updated Data:", data);
        try {
            await editUser(data).unwrap();
            // console.log("User updated successfully!");
            closeModal(); // Close the modal after successful update
        } catch (err) {
            console.error("Failed to update user: ", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="overflow-y-scroll max-h-[65vh] px-1"
        >
            <>
                {/* Loading spinner can be uncommented if needed */}
                {isLoading && (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )}
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
                {/* Uncomment password fields if needed */}
                {/* <InputText
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
                /> */}
                <InputNumber
                    name="phone"
                    labelTitle="Phone"
                    containerStyle="mt-4"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                />
                {/* Uncomment CNIC if needed */}
                {/* <InputNumber
                    name="cnic"
                    labelTitle="CNIC"
                    containerStyle="mt-4"
                    control={control}
                    rules={{ required: "CNIC is required" }}
                /> */}
                <SelectBox
            name="action"
            labelTitle={"Select Gender"}
            containerStyle="w-full mt-4"
            placeholder={"Select Gender"}
            labelStyle="my-label-style"
            options={[
              { value: "male", label: "Male" },
              { value: "femmale", label: "female" },
              { value: "other", label: "Other" },
            ]}
            control={control}
            rules={{ required: "Gender is required" }}
          />
                <InputText
                    name="address"
                    labelTitle="Address"
                    containerStyle="mt-4"
                    control={control}
                    rules={{ required: "Address is required" }}
                />
                {/* Uncomment education if needed */}
                {/* <InputText
                    name="education"
                    labelTitle="Education"
                    containerStyle="mt-4"
                    control={control}
                    rules={{ required: "Education is required" }}
                /> */}
                {isError && <p className="text-red-500">{error.message}</p>} {/* Display error message if any */}
                <div className="modal-action">
                    <button
                        type="button"
                        className="btn btn-sm btn-glass"
                        onClick={() => closeModal()}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-sm btn-primary px-6"
                        disabled={isLoading} // Disable button while loading
                    >
                        Update
                    </button>
                </div>
            </>
        </form>
    );
};

export default AboutUsDetails;
