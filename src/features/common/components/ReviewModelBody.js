import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useReview } from "../../../app/custom-hooks/Reviews/useReviews";

const ReviewModelBody = () => {
  const { extraObject } = useSelector((state) => state.modal);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(extraObject)
  const {postReviewHanlder, isLoading, isSuccess, isError, error} = useReview();
  const onSubmit =async (data) => {
    
    const dataReview = {...extraObject,...data}
    const {photo,title,price,...payload} = dataReview;

    await postReviewHanlder(payload)
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
        {errors.rating && <span className="text-red-500">Rating is required</span>}
        <textarea
          {...register("review", { required: true })}
          placeholder="Review"
          className="textarea textarea-bordered textarea-sm w-full"
        ></textarea>
        {errors.comment && <span className="text-red-500">Comment is required</span>}
        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ReviewModelBody;
