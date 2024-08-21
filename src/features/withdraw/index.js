import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { useForm } from "react-hook-form";
import { useWithdraw } from "../../app/custom-hooks/withdraw/useWithdraw";
import ErrorText from "../../components/Typography/ErrorText";

const WithDraw = ({ closeModal, extraObject }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const dispatch = useDispatch();

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const {
    _id,
    address,
    balance,
    totalBalance,
    reviewsAllowed,
    email,
    fullname,
    isApproved,
    phone,
    photo,
    role,
    status,
  } = JSON.parse(localStorage.getItem("user"));
  console.log("first", reviewsAllowed);

  const { postWithdraw, isLoading, isSuccess, isError, error } = useWithdraw();
  const onSubmit = async (data) => {
    if (data?.amount > balance) {
      setError("amount", {
        type: "manual",
        message: "Amount exceeds available balance",
      });
      return;
    } else if (data?.amount < 5) {
      setError("amount", {
        type: "manual",
        message: "Min 5 is Allowed",
      });
      return;
    }
    const payload = { payment: selectedMethod, ...data };
    console.log(payload);
    await postWithdraw(payload);
    // Handle the withdrawal logic here
    if (Object.keys(errors).length === 0) {
    }
    // closeModal();
  };

  const handleRequestSent = () => {
    dispatch(
      openModal({
        title: "Withdraw request Sent Succesfully",
        bodyType: MODAL_BODY_TYPES.WITHDRAW_REQUEST,
        extraObject: {},
      })
    );
  };
  useEffect(() => {
    if (isSuccess) {
      handleRequestSent();
    } else if (isError) {
      console.log(error, "errrr");
    }
  }, [handleRequestSent]);
  return (
    <div className="flex justify-center items-center p-4">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 border-r border-gray-300 pr-8">
          <h1 className="text-2xl font-bold mb-4">Withdraw Earnings</h1>
          <p className="mb-6 text-gray-600">
            Withdrawal requests are processed 15th of each month (NET 15).
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 ${
                  errors.name ? "input-error" : ""
                }`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-error">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="amount">
                Amount
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 text-gray-600">
                  USD
                </span>
                <input
                  type="number"
                  id="amount"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 ${
                    errors.amount ? "input-error" : ""
                  }`}
                  {...register("amount", {
                    required: "Amount is required",
                    min: { value: 1, message: "Minimum amount is 1" },
                  })}
                />
              </div>
              {errors.amount && (
                <p className="text-error">{errors.amount.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <button
                type="button"
                className={`ml-2 mb-2 py-2 px-4 rounded focus:outline-none focus:ring-2 ${
                  selectedMethod === "USDT TRC20"
                    ? "bg-[#6D4E8A] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handlePaymentMethodClick("USDT TRC20")}
              >
                USDT TRC20
              </button>
              <button
                type="button"
                className={`ml-2 mb-2 py-2 px-4 rounded focus:outline-none focus:ring-2 ${
                  selectedMethod === "USDT ERC20"
                    ? "bg-[#6D4E8A] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handlePaymentMethodClick("USDT ERC20")}
              >
                USDT ERC20
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="W_Address">
                Wallet Address
              </label>
              <input
                type="text"
                id="walletAddress"
                className={`w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 ${
                  errors.walletAddress ? "input-error" : ""
                }`}
                placeholder="123456789"
                {...register("walletAddress", {
                  required: "Wallet Address is required",
                })}
              />
              {errors.walletAddress && (
                <p className="text-error">{errors.walletAddress.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="paypal-email"
              >
                Email
              </label>
              <input
                type="email"
                id="paypal-email"
                className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 ${
                  errors.email ? "input-error" : ""
                }`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className={`py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                reviewsAllowed !== 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#6D4E8A] text-white"
              }`}
              disabled={reviewsAllowed !== 0}
            >
              SUBMIT REQUEST
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block w-1/3 pl-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 018 8v4.586l.707.707a1 1 0 01-.707 1.707H2a1 1 0 01-.707-1.707l.707-.707V10a8 8 0 018-8zm0 2a6 6 0 00-6 6v3.586l-.707.707h13.414l-.707-.707V10a6 6 0 00-6-6z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-2 text-[#ea580c]">
              Total Earnings: {totalBalance?.toFixed(2)}$
            </h2>
            <h2 className="text-lg font-bold mb-2">
              USDT is the safer, easier way to pay
            </h2>
            <p className="text-gray-600">
              No matter where you shop, we keep your financial information
              secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithDraw;
