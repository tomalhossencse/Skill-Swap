import React from "react";

const SingleHowItworks = ({ d }) => {
  const { title, description, img } = d;
  return (
    <div
      className="flex flex-col justify-center items-center py-6 px-3 space-y-2 
            rounded-xl  bg-accent-content 
            transition transform duration-300 shadow-sm ease-in-out 
            hover:bg-success hover:scale-105 hover:shadow-md"
    >
      <div className="flex items-center justify-center">
        <img className="w-16 m-2" src={img} alt="" />
      </div>
      <h1 className="text-xl font-semibold text-center text-warning">
        {title}
      </h1>
      <p className="text-sm p-3  text-center">{description}</p>
    </div>
  );
};

export default SingleHowItworks;
