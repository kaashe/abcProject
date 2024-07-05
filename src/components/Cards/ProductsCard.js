import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';

function ProductsCard({ productName:title,photo, price, description,_id, colorIndex }) {
  const COLORS = ["", ""];
  const userdata = localStorage.getItem("user");
  const { _id:user } = JSON?.parse(userdata);
  const { balance } = JSON?.parse(userdata);
  const dispatch = useDispatch();
  const openReview = () => {
    dispatch(
      openModal({
        title: "Add Review",
        bodyType: MODAL_BODY_TYPES.OPEN_REVIEW,
        extraObject: {title,photo,price,product:_id,user, balance},
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
          <img src={'success.png'} alt={title} className={`w-full h-48 object-cover`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="stat-desc ">{description}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={openReview}>Review Now</button>          </div>
        </div>
      </div>
  );
}

export default ProductsCard;
