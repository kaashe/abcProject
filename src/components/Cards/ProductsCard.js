import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

function ProductsCard({
  productName: title,
  photo,
  price,
  description,
  _id,
  colorIndex,
}) {
  const COLORS = ["", ""];
  const userdata = sessionStorage.getItem("user");
  const { _id: user } = JSON?.parse(userdata);
  const { balance } = JSON?.parse(userdata);
  const dispatch = useDispatch();
  const openReview = () => {
    dispatch(
      openModal({
        title: "Add Review",
        bodyType: MODAL_BODY_TYPES.OPEN_REVIEW,
        extraObject: { title, photo, price, productId: _id, user, balance },
      })
    );
  };

  // const getDescStyle = () => {
  //   if (description.includes("↗︎")) return "font-bold text-green-700 dark:text-green-300";
  //   else if (description.includes("↙")) return "font-bold text-rose-500 dark:text-red-400";
  //   else return "";
  // }

  return (
    <div className="card card-compact w-95 bg-base-100 shadow-xl p-1">
      <figure>
        <img src={photo} alt={title} className={`w-full h-48 object-cover`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="stat-desc text-sm md:text-base lg:text-lg break-words whitespace-normal ellipsis-multiline">
        {description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm bg-[#6D4E8A] text-white  rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={openReview}
          >
            Review Now
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
