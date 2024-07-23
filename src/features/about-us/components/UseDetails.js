import React from "react";

const UseDetails = () => {
  return (
    <div>
      <div class="max-w-xl mx-auto bg-white  rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">How to Use Arkin Hype</h1>
        <p>
          Welcome to Arkin Hype! Follow these simple steps to get started and
          make the most of our platform
        </p>
        <ol class="list-decimal list-inside space-y-2">
          <li>
            <strong>Registration</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Visit our registration page and fill out the form with your
                details.
              </li>
              <li>
                Submit the form and wait for approval from our admin team.
              </li>
            </ul>
          </li>
          <li>
            <strong>Account Activation</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                After registration, contact our admin or support team to
                activate your account.
              </li>
              <li>
                Once your account is activated, you can log in and start
                exploring Arkin Hype.{" "}
              </li>
            </ul>
          </li>
          <li>
            <strong>Trial Bonus</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Upon your first login, you will receive a trial bonus which
                lasts for 24 hours.
              </li>
              <li>
                During this period, you can give reviews and earn rewards based
                on a percentage of the product prices.
              </li>
              <li>
                Note: The rewards earned during the trial period cannot be
                withdrawn.
              </li>
            </ul>
          </li>
          <li>
            <strong>Giving Reviews</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Browse through products and select those with prices less than
                your current balance.
              </li>
              <li> Submit your review to earn rewards</li>
              <li>
                The number of reviews you can give in a 24-hour period is set by
                the admin.
              </li>
            </ul>
          </li>
          <li>
            <strong> Recharging Your Account</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                If your balance is insufficient, contact our admin or support
                team to recharge your account.
              </li>
              <li>
                {" "}
                After recharging, you can continue giving reviews and earning
                rewards
              </li>
            </ul>
          </li>
          <li>
            <strong>Withdrawing Funds</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                You can withdraw your rewards or original balance using USDT
                TRC20 and USDT ERC20{" "}
              </li>
              <li>
                To be eligible for withdrawal, you must complete the required
                number of reviews set by the admin.
              </li>
              <li>
                If you haven't met the requirement, you will be notified to
                complete the necessary reviews first
              </li>
            </ul>
          </li>
          <li>
            <strong>Profile Management</strong>
            <ul class="list-disc list-inside pl-6 space-y-1">
              <li>
                Request profile changes such as email or other details by
                contacting our admin or support team.
              </li>
              <li>
                If you wish to delete your account, please contact our support
                team for assistance.
              </li>
            </ul>
          </li>
        </ol>
      </div>{" "}
    </div>
  );
};

export default UseDetails;
