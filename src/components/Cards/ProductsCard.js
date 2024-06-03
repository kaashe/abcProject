import React from 'react';
import TitleCard from './TitleCard';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';

function ProductsCard({ title, icon, price, description, colorIndex }) {
  const COLORS = ["primary", "primary"];

  const dispatch = useDispatch();
  const openReview = () => {
    dispatch(
      openModal({
        title: "Add Review",
        bodyType: MODAL_BODY_TYPES.OPEN_REVIEW,
        extraObject: {title,icon,price},
      })
    );
  };

  const getDescStyle = () => {
    if (description.includes("↗︎")) return "font-bold text-green-700 dark:text-green-300";
    else if (description.includes("↙")) return "font-bold text-rose-500 dark:text-red-400";
    else return "";
  }

  return (
      <div className="card card-compact w-95 bg-base-100 shadow-xl p-1">
        <figure>
          <img src={icon} alt={title} className={`w-full h-48 object-cover`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className={`text-${COLORS[colorIndex % 1]} text-2xl`}>Price:{price}</p>
          <p className={"stat-desc " + getDescStyle()}>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary" onClick={openReview}>Review Now</button>
          </div>
        </div>
      </div>
  );
}

export default ProductsCard;
