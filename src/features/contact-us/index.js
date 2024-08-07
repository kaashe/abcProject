import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center py-14">
        <h1 className="text-4xl font-bold mb-4 text-custom-purple">
          Contact Us
        </h1>
        <p className="mb-8 lg:w-1/2 mb-8 lg:mb-0">
          We're here to help! If you have any questions, need assistance, or
          want to provide feedback, please feel free to reach out to us. Our
          support team is dedicated to ensuring you have a smooth and rewarding
          experience on Arkin Hype.
        </p>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center "> */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="px-16">
            <button className="bg-[#6D4E8A] border border-white text-white py-4 px-10 text-lg rounded-lg ">
              Get in Touch
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="p-8 rounded-lg">
              <p className="text-1xl font-bold mb-4">
                For general inquiries: info@arkinhype.com
              </p>
              <p className="text-1xl font-bold mb-4">
                For support and assistance: support@arkinhype.com
              </p>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue={"info@arkinhype.com"}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#6D4E8A] text-white py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
