import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/PopulartSkills/SkillCard";
import Container from "../Components/Container/Container";

const AllSkills = () => {
  const SkillData = useLoaderData();
  const [sortType, setSortType] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const uniqueCategories = [...new Set(SkillData.map((item) => item.category))];
  // console.log(SkillData);

  const sortedSkills = [...SkillData].sort((a, b) => {
    if (sortType === "price-low") return a.price - b.price;
    if (sortType === "price-high") return b.price - a.price;
    if (sortType === "rating-high") return b.rating - a.rating;
    if (sortType === "rating-low") return a.rating - b.rating;
    return 0;
  });
  const filterSkills = sortedSkills.filter((skill) => {
    if (categoryFilter && skill.category !== categoryFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div className="my-26">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            All Skills
          </h1>
          <div className="md:flex  justify-between px-4">
            <p className="md:text-2xl text-md text-primary p-4 font-semibold flex-1">
              Skills found : {filterSkills.length}
            </p>
            <div className="flex gap-4 mb-6 flex-2 justify-end">
              {/* Category Filter */}
              <select
                className="select select-bordered mb-4 w-40"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Sorting Dropdown */}
              <select
                className="select select-bordered mb-4 w-48"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating-high">Rating: High → Low</option>
                <option value="rating-low">Rating: Low → High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 lg:p-0 px-6">
            {filterSkills.map((data, index) => (
              <SkillCard data={data} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllSkills;
