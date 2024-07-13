import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="mb-8">Want to know more about what we have to offer? We'd love to hear from you</p>
            <button className="bg-orange-600 border border-white text-white py-2 px-6 rounded hover:bg-orange-900 ">
              CALL US NOW
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className=" p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">We are the Authorized Service Partner of Palo Alto Networks</h2>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKynT5DDyqb9NmtKqZm8ctAwuuxkNg-D8nECqhmnX0TgINTC6g4KoY5dvZWVz4IwubBd8&usqp=CAU" alt="Palo Alto Networks" className="h-16 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;