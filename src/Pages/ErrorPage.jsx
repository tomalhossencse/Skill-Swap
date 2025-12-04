import React from "react";
import { useNavigate } from "react-router";
import Container from "../Components/Container/Container";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-24">
      <div className="flex flex-col justify-center items-center space-y-4 my-4">
        <img
          className="p-6"
          src="https://i.ibb.co.com/Gv9McZnF/Asset-1.png"
          alt=""
        />
        <h1 className="text-4xl text-success font-bold">
          Oops, page not found!
        </h1>
        <p className="text-accent">
          The page you are looking for is not available.
        </p>
        <button onClick={() => navigate(-1)} className="btn-outline">
          Go Back
        </button>
      </div>
    </Container>
  );
};

export default ErrorPage;
