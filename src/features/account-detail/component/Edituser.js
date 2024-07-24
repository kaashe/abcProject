import React from "react";
import { useGetUserQuery } from "../accountSlice";

const AboutUsDetails = () => {
    const usereditdata = useGetUserQuery();
    console.log("first", usereditdata) 
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center py-1">
        <h1 className="text-4xl font-bold  text-[#6D4E8A]">User</h1>

      </div>{" "}
    </div>
  );
};

export default AboutUsDetails;
