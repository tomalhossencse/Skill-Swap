import React from "react";
import Container from "../Container/Container";

const TopSkillsCat = () => {
  return (
    <Container>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Explore Top Skill Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Example Category Card */}
            <div className="bg-primary p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://i.ibb.co.com/k2R37N1n/id-6.jpg"
                alt="Technology"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-500 text-sm">Coding, Web Dev, App Dev</p>
            </div>

            <div className="bg-primary p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://i.ibb.co.com/DHyC0RTG/id-1.jpg"
                alt="Music"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Music</h3>
              <p className="text-gray-500 text-sm">Guitar, Piano, Singing</p>
            </div>

            <div className="bg-primary p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://i.ibb.co.com/4gZVthdq/full-shot-man-doing-yoga-mat.jpg"
                alt="Fitness"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fitness</h3>
              <p className="text-gray-500 text-sm">Yoga, Personal Training</p>
            </div>

            <div className="bg-primary p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://i.ibb.co.com/9mwB9jrw/id-10.jpg"
                alt="Writing"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Writing</h3>
              <p className="text-gray-500 text-sm">
                Creative Writing, Blogging
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TopSkillsCat;
