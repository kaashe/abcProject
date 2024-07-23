import React from "react";

const WithDrawDetails = () => {
  return (
    <div>
      <div class="max-w-xl mx-auto bg-white  rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Withdrawal Instructions</h1>
        <ol class="list-decimal list-inside space-y-2">
          <li>
            <strong>Request Withdrawal</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>Navigate to the withdrawal section in your account.</li>
              <li>Ensure you have completed the required number of reviews.</li>
              <li>
                Select your preferred withdrawal method (USDT TRC20 or USDT
                ERC20).
              </li>
              <li>Submit your withdrawal request.</li>
            </ul>
          </li>
          <li>
            <strong>Processing Time</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Our team will review your request and process it within a
                stipulated time frame.
              </li>
              <li>
                You will receive a confirmation once the withdrawal is complete.
              </li>
            </ul>
          </li>
          <li>
            <strong>Pending Reviews</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                If you have pending reviews, complete them as required by the
                admin.
              </li>
              <li>
                Once completed, you can proceed with the withdrawal process.
              </li>
            </ul>
          </li>
        </ol>
        <h2 class="text-xl font-semibold mt-6 mb-2">
          Account Freeze and Withdrawal Balance
        </h2>
        <ul class="list-disc list-inside pl-6 space-y-1">
          <li>
            Accounts can be temporarily frozen if suspicious activity is
            detected or if the terms of use are violated. During this period,
            you will not be able to perform any actions on your account.
          </li>
          <li>
            If your account is frozen, contact our support team to resolve the
            issue
          </li>
          <li>
            Withdrawal balance can only be processed once all review
            requirements are met and there are no pending issues on your
            account.
          </li>
        </ul>
      </div>{" "}
    </div>
  );
};

export default WithDrawDetails;
