import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const SingleTop = ({ top }) => {
  const { providerName, skillName, ProviderImg } = top;
  return (
    <div className="space-y-2 text-center bg-gradient-to-br from-[#DD030310] to-[#FA812F10]  px-6 py-10 flex-1 shadow-sm">
      <div className="flex-col flex justify-center items-center">
        <img className="h-[140px] rounded-full" src={ProviderImg} alt="" />
      </div>
      <h1 className="text-xl font-semibold text-indigo-700">{providerName}</h1>
      <p className="text-sm">{skillName}</p>
      <div className="flex justify-center gap-2 items-center">
        <FaFacebookSquare size={20} color="#1877F2" />
        <FaTwitterSquare size={20} color="#1da1f2" />
        <IoLogoLinkedin size={20} color="0e76e8" />
        <FaYoutube size={20} color="FF0000" />
      </div>
    </div>
  );
};

export default SingleTop;
