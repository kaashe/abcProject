import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

const AboutUs = () => {
  const dispatch = useDispatch();

  const openAboutUsModalHandler = () => {
    dispatch(
      openModal({
        // title: "About Us Details",
        bodyType: MODAL_BODY_TYPES.ABOUT_DETAIL,
        extraObject: {},
        size: "lg",
      })
    );
  };
  const openWithDrawModalHandler = () => {
    dispatch(
      openModal({
        // title: "WithDraw Details",
        bodyType: MODAL_BODY_TYPES.WITHDRAW_DETAIL,
        extraObject: {},
        size: "lg",
      })
    );
  };
  const openOurMissionModalHandler = () => {
    dispatch(
      openModal({
        // title: "Our Mission Details",
        bodyType: MODAL_BODY_TYPES.OUR_MISSION_DETAIL,
        extraObject: {},
        size: "lg",
      })
    );
  };
  const openUsesModalHandler = () => {
    dispatch(
      openModal({
        // title: "How To Use",
        bodyType: MODAL_BODY_TYPES.USES_DETAIL,
        extraObject: {},
        size: "lg",
      })
    );
  };
    const openCondationModalHandler = () => {
    dispatch(
      openModal({
        // title: "How To Use",
        bodyType: MODAL_BODY_TYPES.TERMS_CONDATION_DETAIL,
        extraObject: {},
        size: "lg",
      })
    );
  };
  const openStuckBundleModalHandler = () => {
    dispatch(
      openModal({
        // title: "How To Use",
        bodyType: MODAL_BODY_TYPES.Stuck_Bundle_Details,
        extraObject: {},
        size: "lg",
      })
    );
  };

  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">About Us</div>
        <div className="collapse-content">
          <p>
            {" "}
            Welcome to Arkin Hype, your premier destination for earning rewards
            through genuine product reviews. We are dedicated to fostering a
            community where your opinions are valued, and you are rewarded for
            sharing your insights.
          </p>
          <button className="text-[#EA580C]"  onClick={openAboutUsModalHandler}>
            More Details
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Withdraw</div>
        <div className="collapse-content">
          <p>
            You can withdraw your rewards or original balance using USDT TRC20
            and USDT ERC20. To be eligible for withdrawal, you must complete the
            required number of reviews set by the admin. met the requirement,
            you will be notified to complete the necessary reviews first.
          </p>
          <button className="text-[#EA580C]" 
           onClick={openWithDrawModalHandler}
           >
            More Details
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Our Mission</div>
        <div className="collapse-content">
          <p>
            {" "}
            At Arkin Hype, our mission is to bridge the gap between consumers
            and quality products by incentivizing honest feedback. We are
            committed to creating a platform where every review makes a
            difference and every reviewer reaps the benefits.
          </p>
          <Link className="text-[#EA580C]" onClick={openOurMissionModalHandler}>
            More Details
          </Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How To Use</div>
        <div className="collapse-content">
          <p>
            {" "}
            Welcome to Arkin Hype! Follow these simple steps to get started and
            make the most of our platform
          </p>
          <Link className="text-[#EA580C]" onClick={openUsesModalHandler}>
            More Details
          </Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Terms & Conditions
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Usersmust adhere to all guidelines and policies set forth by Arkin
            Hype. Anyformof dishonest or fraudulent activity will result in
            account suspension or termination.
          </p>
          <Link className="text-[#EA580C]" onClick={openCondationModalHandler}>
            More Details
          </Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Stock Bundles
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Congratulations you have received Stock bundle product. This is special stock which is hold by the merchants and this stock
            come randomly by the system and have x10 extra commission for you.
          </p>
          <Link className="text-[#EA580C]" onClick={openStuckBundleModalHandler}>
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
