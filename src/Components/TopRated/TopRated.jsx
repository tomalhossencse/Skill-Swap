import React from "react";
import Container from "../Container/Container";
import { useLoaderData } from "react-router";
import SingleTop from "./SingleTop";

const TopRated = () => {
  const providerData = useLoaderData();
  const topRatedProvider = providerData.filter((data) => data.rating > 4.7);
  return (
    <Container className="my-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Top rated Provider
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 justify-between items-center lg:p-0 p-6">
          {topRatedProvider.map((top, index) => (
            <SingleTop top={top} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopRated;
