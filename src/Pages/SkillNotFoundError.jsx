import React from "react";
import { useNavigate } from "react-router";
import Container from "../Components/Container/Container";
const SkillNotFoundError = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-24">
      <div className="flex flex-col justify-center items-center space-y-4 my-4">
        <img
          className="p-6"
          src="https://i.ibb.co.com/fcj6myR/App-Error.png"
          alt=""
        />
        <h1 className="text-4xl text-success font-semibold">
          OPPS!! SKILLS NOT FOUND
        </h1>
        <p className="text-accent">
          The skill you are requesting is not found on our system. please try
          another skills
        </p>
        <button onClick={() => navigate(-1)} className="btn-outline">
          Go Back
        </button>
      </div>
    </Container>
  );
};

export default SkillNotFoundError;
