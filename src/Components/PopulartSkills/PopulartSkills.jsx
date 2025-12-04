import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "./SkillCard";
import Container from "../Container/Container";

const PopulartSkills = () => {
  const SkillData = useLoaderData();
  const latestSkills = SkillData.slice(0, 4);

  return (
    <div className="my-12">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 lg:p-0 px-6">
          {latestSkills.map((data, index) => (
            <SkillCard data={data} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopulartSkills;
