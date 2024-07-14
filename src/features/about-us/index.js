import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">About Us</div>
        <div className="collapse-content">
          <p> Welcome to Arkin Hype, your premier destination for earning rewards through genuine product
            reviews. We are dedicated to fostering a community where your opinions are valued, and you
            are rewarded for sharing your insights.</p>
          <Link className="text-[#EA580C]" to={'/app/about-us'}>More Details</Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Withdraw</div>
        <div className="collapse-content">
          <p>You can withdraw your rewards or original balance using USDT TRC20 and USDT
            ERC20. To be eligible for withdrawal, you must complete the required number of reviews set by
            the admin. met the requirement, you will be notified to complete the necessary
            reviews first.</p>
          <Link className="text-[#EA580C]" to={'/app/withdraw'}>More Details</Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Our Mission</div>
        <div className="collapse-content">
          <p> At Arkin Hype, our mission is to bridge the gap between consumers and quality products by
            incentivizing honest feedback. We are committed to creating a platform where every review
            makes a difference and every reviewer reaps the benefits.</p>
          <Link className="text-[#EA580C]" to={''}>More Details</Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How To Use</div>
        <div className="collapse-content">
          <p>  Welcome to Arkin Hype! Follow these simple steps to get started and make the most of our
            platform</p>
          <Link className="text-[#EA580C]" to={''}>More Details</Link>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Terms & Conditions</div>
        <div className="collapse-content">
          <p>  Usersmust adhere to all guidelines and policies set forth by Arkin Hype. Anyformof dishonest or fraudulent activity will result in account suspension or
            termination.</p>
          <Link className="text-[#EA580C]" to={''}>More Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;