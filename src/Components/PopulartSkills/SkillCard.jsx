import React from "react";
import ratings from "../../assets/icon-ratings.png";
import { Link, useLocation } from "react-router";
const SkillCard = ({ data }) => {
  const location = useLocation();
  const { skillName, rating, price, skillId, image } = data;
  return (
    <div className="bg-base-100 p-6  space-y-2 h-full hover:scale-105 duration-200 ease-in shadow-md rounded-md relative">
      <div className="flex items-center justify-center pt-2">
        <img className="rounded-lg h-[180px]" src={image} alt="" />
      </div>
      <p className="text-[#001931] font-medium text-lg px-4">{skillName}</p>

      <div className="flex bg-blue-800 items-center justify-between py-1 px-3 gap-2 rounded-3xl absolute top-4 left-2">
        <p className="text-yellow-300 font-medium">${price.toFixed(2)}</p>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/gFfrs5L4/vecteezy-red-text-box-abstract-islamic-shape-banner-29208514.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex items-center justify-between py-2 px-3 gap-2 rounded-lg absolute top-4 right-2"
      >
        <img className="w-4" src={ratings} alt="" />
        <p className="text-white font-medium">{rating}</p>
      </div>

      <div className="flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
        <Link
          state={location?.pathname}
          to={`/skill-details/${skillId}`}
          className="font-medium btn w-full bg-black text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
