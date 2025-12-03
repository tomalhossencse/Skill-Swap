import React from "react";

const SingleHowItworks = ({ d }) => {
  const { title, description, img } = d;
  return (
    <div className="space-y-2  bg-white px-6 py-10 shadow-sm">
      <div className="flex items-center justify-center">
        <img className="w-16 m-2" src={img} alt="" />
      </div>
      <h1 className="text-xl font-semibold text-center text-red-500">
        {title}
      </h1>
      <p className="text-sm  text-center">{description}</p>
    </div>
  );
};

export default SingleHowItworks;
