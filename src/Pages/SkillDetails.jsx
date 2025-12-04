import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ratingImg from "../assets/icon-ratings.png";
import reactimg from "../assets/icon-review.png";
import { MdEmail } from "react-icons/md";
import Container from "../Components/Container/Container";
import { TbCoinFilled } from "react-icons/tb";
import SkillNotFoundError from "./SkillNotFoundError";
const SkillDetails = () => {
  const [notFound, setNotFound] = useState(false);
  const [skill, setSkills] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const filterData = data.find((d) => d.skillId == id);
    if (!filterData) {
      setNotFound(true);
      return;
    }
    setSkills(filterData);
  }, [id, data]);
  //   console.log(filterData);
  const {
    category,
    description,
    image,
    price,
    providerEmail,
    providerName,
    rating,
    skillName,
    slotsAvailable,
  } = skill;
  if (notFound) {
    return <SkillNotFoundError />;
  }
  return (
    <Container className="mt-26">
      <div className="md:flex items-start justify-start gap-10 my-10 mx-8 space-y-10">
        <img
          className="shadow-xl w-[500px] rounded-xl md:p-0 p-4 transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-accent-content hover:-translate-y-1"
          src={image}
        />
        <div>
          <div className="border-b-2 border-gray-300 space-y-2 pb-4">
            <h3 className="text-primary md:text-3xl text-2xl font-bold">
              {skillName}
            </h3>
            <p className="text-accent text-left">
              Category : <span className="font-bold">{category}</span>
            </p>
            <button className="text-white text-left btn bg-warning w-full">
              Provided by : <span>{providerName}</span>
            </button>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6 items-start py-6">
            <div className="flex md:flex-col flex-row  justify-between items-center  md:gap-1 gap-6">
              <img className="w-8" src={reactimg} alt="" />
              <h3>slots Available</h3>
              <p className="text-3xl font-extrabold">{slotsAvailable}</p>
            </div>
            <div className="flex md:flex-col flex-row  justify-between items-center md:gap-1 gap-6">
              <img className="w-8" src={ratingImg} alt="" />
              <h3>Average Ratings</h3>
              <p className="text-3xl font-extrabold">{rating}</p>
            </div>
            <div className="flex md:flex-col flex-row  justify-between items-center md:gap-1 gap-2">
              <MdEmail className="text-success" size={40} />
              <h3>Provider Email : </h3>
              <p className="text-xl font-semibold">{providerEmail}</p>
            </div>
          </div>
          <div className="text-left">
            <div className="flex gap-4 btn-small-full">
              <TbCoinFilled size={20} />
              <span> {price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-2">
        <p className="text-accent text-2xl font-bold text-left">
          Description :
        </p>
        <p className="text-left">{description}</p>
      </div>
    </Container>
  );
};

export default SkillDetails;
