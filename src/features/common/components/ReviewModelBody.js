import React from "react";
import { useSelector } from "react-redux";

const ReviewModelBody = () => {
  const { extraObject } = useSelector((state) => state.modal);
  return (
    <div>
      <figure>
        <img
          src={extraObject?.icon}
          alt={"title"}
          className={`w-full h-48 object-cover`}
        />
      </figure>
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-bold">{extraObject?.title}</h1>
        <h1 className=" text-xl font-bold text-gray-500">{extraObject?.price}<span>{"$"}</span></h1>
      </div>
      <div className="rating rating-md">
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <textarea
        placeholder="Comment"
        className="textarea textarea-bordered textarea-sm w-full"
      ></textarea>
      <button className="btn btn-sm btn-primary">Submit</button>
    </div>
  );
};

export default ReviewModelBody;
