import React from "react";

const TermscondationDetails = () => {
  return (
    <div>
      <div class="max-w-xl mx-auto bg-white  rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Terms and Conditions</h1>
        {/* <ol class="list-decimal list-inside space-y-2"> */}
          {/* <li> */}
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Users must adhere to all guidelines and policies set forth by
                Arkin Hype
              </li>
              <li>
                Any form of dishonest or fraudulent activity will result in
                account suspension or termination.
              </li>
              <li>
                Reviews must be genuine and based on actual product experience.
              </li>
              <li>
                Arkin Hype reserves the right to modify these terms at any time,
                with prior notice to users.
              </li>
            </ul>
          {/* </li> */}
        {/* </ol> */}
      </div>{" "}
    </div>
  );
};

export default TermscondationDetails;
