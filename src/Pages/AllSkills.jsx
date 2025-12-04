import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/PopulartSkills/SkillCard";
import Container from "../Components/Container/Container";

const AllSkills = () => {
  const SkillData = useLoaderData();

  return (
    <div>
      <div className="my-26">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            All Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 lg:p-0 px-6">
            {SkillData.map((data, index) => (
              <SkillCard data={data} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllSkills;
