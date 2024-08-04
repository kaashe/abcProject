import React from "react";

const TermscondationDetails = () => {
  return (
    <div>
      <div class="max-w-xl mx-auto bg-white  rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Terms and Conditions</h1>
        {/* <ol className="list-decimal list-inside space-y-2">
  <li> */}
    <ol className="list-decimal list-inside pl-6 space-y-1">
      <li>
        Withdraw will be processed according to the time of the official duty hours of customer service.
      </li>
      <li>
        Minimum withdraw will be $5.
      </li>
      <li>
        Withdraw will be processed within 4 hours after confirmation from customer service.
      </li>
      <li>
        If you do not complete the reviews of the set minimum, you will not be able to proceed with the withdraw.
      </li>
      <li>
        If you are going to withdraw more than $5000, you need to verify your account by depositing 50% of the total balance in the account.
      </li>
    {/* </ol>
  </li> */}
</ol>

      </div>{" "}
    </div>
  );
};

export default TermscondationDetails;
