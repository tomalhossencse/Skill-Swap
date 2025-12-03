import React from "react";
import Container from "../Container/Container";
import SingleHowItworks from "./singleHowItworks";
const data = [
  {
    title: "Browse Skills",
    description:
      "Explore a wide range of skills offered by local people — from music, fitness, language learning, to coding help.",
    img: "https://img.icons8.com/color/48/persuasion-skills.png",
  },
  {
    title: "View Details",
    description:
      "Click “View Details” on any skill card to see full information — provider details, price, available slots, and reviews.",
    img: "https://img.icons8.com/fluency/48/details.png",
  },
  {
    title: "Book a Session",
    description:
      " Fill out the short booking form with your name and email to reserve a slot and see a success message after submission.",
    img: "https://img.icons8.com/fluency/48/subscription.png",
  },
  {
    title: "Connect & Learn",
    description:
      "Meet your instructor and start learning! After the session, you can rate your experience to help others.",
    img: "https://img.icons8.com/stickers/100/share-2.png",
  },
];
const HowItWorks = () => {
  return (
    <Container>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        How it works
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:px-8 lg:p-0">
        {data.map((d, index) => (
          <SingleHowItworks d={d} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
