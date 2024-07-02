import React, { useState } from "react";

const WithDraw = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 border-r border-gray-300 pr-8">
          <h1 className="text-2xl font-bold mb-4">Withdraw Earnings</h1>
          <p className="mb-6 text-gray-600">
            Withdrawal requests are processed 15th of each month (NET 15).
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="amount">
              Name
            </label>
            <input
              type="text"
              id="amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
              placeholder="Name"
            />
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
                type="text"
                id="amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
                placeholder="$0.00"
              />
            </div>
            <p className="text-gray-500 mt-2">Select a minimum $50 amount.</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Payment Method</label>
            {/* <div className="flex space-x-4"> */}
              <button className="ml-2 mb-2 bg-orange-600 text-white py-2 px-4 hover:bg-orange-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                PAY TO PAYPAL
              </button>
              <button className="ml-2 mb-2 bg-orange-600 text-white py-2 px-4 hover:bg-orange-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                PAYPAL
              </button>
              <button className="ml-2 mb-2 bg-orange-600 border border-gray-300 text-white py-2 px-4 hover:bg-orange-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                PAY TO BANK
              </button>
              <button className="ml-2 mb-2 bg-orange-600 border border-gray-300 text-white py-2 px-4 hover:bg-orange-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                BANK
              </button>
            {/* </div> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="amount">
              Wallet Address
            </label>
            <input
              type="text"
              id="amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
              placeholder="123456789"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="paypal-email">
              Email
            </label>
            <input
              type="email"
              id="paypal-email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>

          <button className="bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            SUBMIT REQUEST
          </button>
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
            <h2 className="text-lg font-bold mb-2">
              PayPal is the safer, easier way to pay
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