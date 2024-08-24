import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useReview } from "../../../app/custom-hooks/Reviews/useReviews";
import { closeModal, openModal } from "../modalSlice";
import { useGetCurrentUserQuery } from "../dashboardSlice";
import { showNotification } from "../headerSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";

const ReviewModelBody = () => {
  const [selectedRating, setSelectedRating] = useState(0); // State to manage selected rating
  const [disabled, setDisabled] = useState(false); // State to manage selected rating
  const {
    data: currentuser,
    refetch,
    isSuccess: isCurrentUserSuccess,
    isLoading: isCurrentUserLoading,
  } = useGetCurrentUserQuery();
  let rewards = currentuser?.data?.data?.rewards;
  const user = currentuser?.data?.data;

  const { extraObject } = useSelector((state) => state.modal);
  const { user: id } = extraObject;
  const dispatch = useDispatch();
  const {
    updateSingleUser,
    refetchUsers,
    updateIsLoading,
    updateIsSuccess,
    updateIsError,
    updateError,
  } = useReview();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("extraObject", extraObject);

  const { postReviewHanlder, data, isLoading, isSuccess, isError, error } =
    useReview();

  const storageData = sessionStorage?.getItem("user");
  const jsonData = JSON?.parse(storageData);
  const trialbalance = jsonData?.trialbalance;
  
  // useEffect(() => {
  //   if (
  //     jsonData?.reviewsUsed === jsonData?.stuckreviews ||
  //     jsonData?.reviewsUsed > jsonData?.stuckreviews
  //   ) {
  //     setDisabled(true);
  //   }
  // }, [jsonData?.reviewsUsed, jsonData?.stuckreviews]);

  const showmodel = (title, bodyType) => {
    dispatch(
      openModal({
        title: "Stock bundle",
        bodyType: MODAL_BODY_TYPES.Review_Restruction_Details,
        extraObject: {},
        size: "md",
      })
    );
  }
  // console.log("jsonData", jsonData);
  const onSubmit = async (data) => {

    // if (trialbalance < extraObject?.price) {
    //   // Use user balance for review submission
    //   if (extraObject?.balance < extraObject?.price) {
    //     showmodel("Low User Balance", "Your User Balance is Low. Please recharge your account.");
    //     return;
    //   }
    // } else {
    //   // Trial balance is available, check trial balance first
    //   if (trialbalance < extraObject?.price) {
    //     showmodel("Low Trial Balance", "Your Trial Balance is Low. Please recharge your account.");
    //     return;
    //   }
    // }



    
    // Condition 1: Trial balance is low
    // if (trialbalance < extraObject?.price && extraObject?.balance < extraObject?.price) {
    //   showmodel("Low Balance", "Your Balance is Low. Please recharge your account.");
    //   return;
    // }

    // Condition 2: Reviews allowed is 0
    if (jsonData?.reviewsAllowed === 0) {
      showmodel("No Reviews Left", "Contact admin, your allowed reviews are finished.");
      return;
    }

    // Condition 3: reviewsAllowed equals stuckreviews
    if (jsonData?.reviewsAllowed === jsonData?.stuckreviews) {
      showmodel();
      return;
    }

     // If none of the above conditions are met, submit the review
  console.log(data);
  const userData = JSON.parse(sessionStorage.getItem("user")) || {};

  // Update the reviewsUsed property
  userData.reviewsUsed = (userData.reviewsUsed || 0) + 1;
  console.log(jsonData);
  sessionStorage.setItem("user", JSON.stringify(userData));

  const dataReview = { ...extraObject, ...data };
  const { photo, title, price, ...payload } = dataReview;

  // Calculate 4% of the price
  const rewardPercentage = 0.04;
  const rewardAmount = price * rewardPercentage;

  // Get the current rewards from sessionStorage
  let currentRewards = parseFloat(sessionStorage.getItem("rewards")) || 0;

  // Add the reward amount to the current rewards
  currentRewards += rewardAmount;
  sessionStorage.setItem("rewards", currentRewards);

  // Adjust the original balance
  let originalBalance =
    parseFloat(sessionStorage.getItem("originalBalance")) || 0;
  let minus = rewardAmount / 2;
  originalBalance -= minus;
  sessionStorage.setItem("originalBalance", originalBalance);

  await postReviewHanlder(payload);
  const balancePayload = { balance: originalBalance };
  await updateSingleUser(id, balancePayload);
};

useEffect(() => {
  if (isSuccess) {
    dispatch(
      showNotification({
        message: "Review Submitted!",
        status: 1,
      })
    );
    refetch();
    sessionStorage.setItem("rewards", rewards);
    sessionStorage.setItem("user", JSON.stringify(user));
    dispatch(closeModal());
  }
}, [isSuccess, refetch]);

// Handle when the balance is low or reviews are finished
if (extraObject?.balance < extraObject?.price && trialbalance < extraObject?.price) {
  return <h1>Your Balance is Low. Please recharge your account</h1>;
}
// if (jsonData?.reviewsAllowed === 0) {
//   return <h1>Contact admin, your allowed reviews are finished</h1>;
// }


  // const onSubmit = async (data) => {
  //   if (
  //     (jsonData?.reviewsAllowed === jsonData?.stuckreviews) ||
  //     trialbalance < extraObject?.price
  // ){
  //     showmodel();
  //   }else{
  //     console.log(data);
  //     const userData = JSON.parse(sessionStorage.getItem("user")) || {};
  
  //     // Update the reviewsUsed property
      
  //     userData.reviewsUsed = (userData.reviewsUsed || 0) + 1;
  //     console.log(jsonData);
  //     sessionStorage.setItem("user", JSON.stringify(userData));
  
  //     const dataReview = { ...extraObject, ...data };
  //     const { photo, title, price, ...payload } = dataReview;
  
  //     // Calculate 4% of the price
  //     const rewardPercentage = 0.04;
  //     const rewardAmount = price * rewardPercentage;
  
  //     // Get the current rewards from sessionStorage
  //     let currentRewards = parseFloat(sessionStorage.getItem("rewards")) || 0;
  
  //     // Add the reward amount to the current rewards
  //     currentRewards += rewardAmount;
  //     sessionStorage.setItem("rewards", currentRewards);
  
  //     // Adjust the original balance
  //     let originalBalance =
  //       parseFloat(sessionStorage.getItem("originalBalance")) || 0;
  //     let minus = rewardAmount / 2;
  //     originalBalance -= minus;
  //     sessionStorage.setItem("originalBalance", originalBalance);
  //     await postReviewHanlder(payload);
  //     const balancePayload = { balance: originalBalance };
  //     await updateSingleUser(id, balancePayload);
  //     // window?.location.reload();
  //   }
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(
  //       showNotification({
  //         message: "Review Submitted!",
  //         status: 1,
  //       })
  //     );
  //     refetch();
  //     sessionStorage.setItem("rewards", rewards);
  //     sessionStorage.setItem("user", JSON.stringify(user));
  //     dispatch(closeModal());
  //     // window.location.reload();
  //   }
  // }, [isSuccess, refetch]);
  // if (extraObject?.balance < extraObject?.price || trialbalance<extraObject?.price) {
  //   return <h1>Your Balance is Low. Please recharge your account</h1>;
  // }
  // if (jsonData?.reviewsAllowed === 0 ) {
  //   return <h1>Contact admin, your allowed reviews are finished</h1>;
  // }

  const handleRatingClick = (value) => {
    setSelectedRating(value);
  };

  return (
    <div>
      <figure>
        <img
          src={extraObject?.photo}
          alt={"title"}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-bold">{extraObject?.title}</h1>
        {/* <h1 className="text-xl font-bold text-gray-500">
          {extraObject?.price}
          <span>{"$"}</span>
        </h1> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rating rating-md">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              {...register("rating", { required: true })}
              value={value}
              className={`mask mask-star-2 ${
                selectedRating >= value ? "bg-orange-400" : "bg-slate-200"
              }`}
              onClick={() => handleRatingClick(value)}
            />
          ))}
        </div>
        <div>
          {errors.rating && (
            <span className="text-red-500">Rating is required</span>
          )}
          <textarea
            {...register("review", { required: true })}
            placeholder="Review"
            className="textarea textarea-bordered textarea-sm w-full"
          ></textarea>
          {errors.review && (
            <span className="text-red-500">Comment is required</span>
          )}
        </div>
        <div>
          <button
            type="submit"

            // onClick={showmodel}
            // disabled
            // disabled={isLoading || disabled}
            className="bg-[#6D4E8A] btn btn-sm btn-primary"
          >
            Submit
            {/* {isLoading ? "Submit..." : "Submit"} */}
          </button>
          {/* {disabled && (
            <p className="text-red-500 mt-2">Please recharge your account</p>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default ReviewModelBody;



