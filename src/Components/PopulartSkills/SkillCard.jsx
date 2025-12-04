import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { TbCoinFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router";
import { Md18UpRating } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
const SkillCard = ({ data }) => {
  const location = useLocation();
  const { skillName, rating, price, skillId, image, description } = data;
  return (
    <div
      className="flex flex-col justify-between bg-base-200 p-4 rounded-xl space-y-2 shadow-md
transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-accent-content hover:-translate-y-1"
    >
      <div className="w-full h-[200px]">
        <img className="rounded-xl w-full h-full object-cover" src={image} />
      </div>
      <p className="text-primary font-semibold text-lg px-2">{skillName}</p>

      <div className="flex justify-between px-2">
        <div className="flex items-center text-accent justify-between py-1 px-2 gap-1 rounded-3xl">
          <TbCoinFilled size={20} />
          <p className="font-medium">{price.toFixed(2)}</p>
        </div>
        <div className="flex text-accent items-center justify-between py-2 px-3 gap-1 rounded-lg">
          <FaStar />
          <p className="font-medium">{rating}</p>
        </div>
      </div>
      <p className="px-2 text-gray-400 line-clamp-2">{description}</p>

      <div className="flex w-full items-center justify-center py-2 px-3 gap-2 rounded-lg">
        <Link
          state={location?.pathname}
          to={`/skill-details/${skillId}`}
          className="w-full btn-outline-small"
        >
          View Details
          <HiMiniArrowSmallRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
