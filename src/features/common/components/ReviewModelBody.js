import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useReview } from "../../../app/custom-hooks/Reviews/useReviews";
import { closeModal } from "../modalSlice";

const ReviewModelBody = () => {
  const { extraObject } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("extraObject", extraObject);

  const { postReviewHanlder, data, isLoading, isSuccess, isError, error } =
    useReview();
    const onSubmit = async (data) => {
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
      let originalBalance = parseFloat(localStorage.getItem("originalBalance")) || 0;
      let minus = rewardAmount/2;
      originalBalance -= minus;
      localStorage.setItem("originalBalance", originalBalance);
    
      await postReviewHanlder(payload);
      window?.location.reload();
    };
    
  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
    }
  }, [isSuccess]);
  if (extraObject?.balance < extraObject?.price) {
    return (<h1>Your Balance is Low Please recharge your Account</h1>)
  }

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
          <input
            type="radio"
            {...register("rating", { required: true })}
            value="1"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            {...register("rating", { required: true })}
            value="2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            {...register("rating", { required: true })}
            value="3"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            {...register("rating", { required: true })}
            value="4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            {...register("rating", { required: true })}
            value="5"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        {errors.rating && (
          <span className="text-red-500">Rating is required</span>
        )}
        <textarea
          {...register("review", { required: true })}
          placeholder="Review"
          className="textarea textarea-bordered textarea-sm w-full"
        ></textarea>
        {errors.comment && (
          <span className="text-red-500">Comment is required</span>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-sm btn-primary"
        >
          {isLoading ? "Submit..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReviewModelBody;
