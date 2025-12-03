import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ratingImg from "../assets/icon-ratings.png";
import reactimg from "../assets/icon-review.png";
import { MdEmail } from "react-icons/md";
import Container from "../Components/Container/Container";
import BookSession from "./BookSession";
const SkillDetails = () => {
  const [skill, setSkills] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const filterData = data.find((d) => d.skillId == id);
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
  return (
    <Container>
      <div className="md:flex items-start justify-start gap-10 my-10 mx-8 space-y-10">
        <img
          className="shadow-xl w-[500px] rounded-xl md:p-0 p-4"
          src={image}
        />
        <div>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-black md:text-3xl text-2xl font-bold">
              {skillName}
            </h3>
            <p className="text-black text-left">
              Category :{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
                {category}
              </span>
            </p>
            <button className="text-white text-left btn bg-amber-400 w-2/3">
              Provided by : <span>{providerName}</span>
            </button>
          </div>
          <div className="flex justify-between gap-4 items-center py-6">
            <div className="flex flex-col justify-center items-center gap-1">
              <img className="w-8" src={reactimg} alt="" />
              <h3>slots Available</h3>
              <p className="text-3xl font-extrabold">{slotsAvailable}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <img className="w-8" src={ratingImg} alt="" />
              <h3>Average Ratings</h3>
              <p className=" text-3xl font-extrabold">{rating}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <MdEmail color="#ff0000" size={40} />
              <h3>Provider Email : </h3>
              <p className="text-xl font-semibold">{providerEmail}</p>
            </div>
          </div>
          <div className="text-left">
            <button className={`btn bg-[#00D390] text-white`}>
              Price : ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-black text-2xl font-bold text-left">Description :</p>
        <p className="text-black text-left">{description}</p>
      </div>
      <BookSession />
    </Container>
  );
};

export default SkillDetails;
