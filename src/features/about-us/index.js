import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Service 1</div>
        <div className="collapse-content">
          <p>We offer</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Service 2</div>
        <div className="collapse-content">
          <p>We offer</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Service 3</div>
        <div className="collapse-content">
          <p>We offer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
