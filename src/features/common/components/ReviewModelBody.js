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
  // console.log("extraObject", extraObject);

  const { postReviewHanlder, data, isLoading, isSuccess, isError, error } =
    useReview();

  const storageData = localStorage?.getItem("user");
  const jsonData = JSON?.parse(storageData);
  useEffect(() => {
    if (
      jsonData?.reviewsUsed === jsonData?.stuckreviews ||
      jsonData?.reviewsUsed > jsonData?.stuckreviews
    ) {
      setDisabled(true);
    }
  }, [jsonData?.reviewsUsed, jsonData?.stuckreviews]);

  const showmodel = () => {
    if (
      jsonData?.reviewsUsed === jsonData?.stuckreviews ||
      jsonData?.reviewsUsed > jsonData?.stuckreviews
    ) {
      dispatch(
            openModal({
              title: "Stock bundle",
              bodyType: MODAL_BODY_TYPES.Review_Restruction_Details,
              extraObject: {},
              size: "md",
            })
          );
      // alert("Great Shot!");
    }
  }
  // console.log("storageData", jsonData);
  const onSubmit = async (data) => {
    if (
      jsonData?.reviewsUsed === jsonData?.stuckreviews ||
      jsonData?.reviewsUsed > jsonData?.stuckreviews
    ){
      showmodel();
    }else{
      console.log(data);
      const userData = JSON.parse(localStorage.getItem("user")) || {};
  
      // Update the reviewsUsed property
      userData.reviewsUsed = (userData.reviewsUsed || 0) + 1;
      console.log(jsonData);
      localStorage.setItem("user", JSON.stringify(userData));
  
      const dataReview = { ...extraObject, ...data };
      const { photo, title, price, ...payload } = dataReview;
  
      // Calculate 4% of the price
      const rewardPercentage = 0.04;
      const rewardAmount = price * rewardPercentage;
  
      // Get the current rewards from localStorage
      let currentRewards = parseFloat(localStorage.getItem("rewards")) || 0;
  
      // Add the reward amount to the current rewards
      currentRewards += rewardAmount;
      localStorage.setItem("rewards", currentRewards);
  
      // Adjust the original balance
      let originalBalance =
        parseFloat(localStorage.getItem("originalBalance")) || 0;
      let minus = rewardAmount / 2;
      originalBalance -= minus;
      localStorage.setItem("originalBalance", originalBalance);
      await postReviewHanlder(payload);
      const balancePayload = { balance: originalBalance };
      await updateSingleUser(id, balancePayload);
      // window?.location.reload();
    }
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
      localStorage.setItem("rewards", rewards);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(closeModal());
      // window.location.reload();
    }
  }, [isSuccess, refetch]);
  if (extraObject?.balance < extraObject?.price) {
    return <h1>Your Balance is Low Please recharge your Account</h1>;
  }

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
        <h1 className="text-xl font-bold text-gray-500">
          {extraObject?.price}
          <span>{"$"}</span>
        </h1>
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
