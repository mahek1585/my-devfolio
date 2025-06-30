

import React from 'react';
import grocerry from "../../../assets/Images/grocerry.png";
import pokemon from "../../../assets/Images/pokemon.jpeg";
import clickcount from "../../../assets/Images/clickcount.png";
import chefs from "../../../assets/Images/chefs-delight2.png";
import amazon from "../../../assets/Images/amazon.png";

const workItems = [
  {
    image: pokemon,
    title: "Pokemon API",
    reponame: "Pokemon",
    link: "https://github.com/mahek1585/Pokemon"
  },
  {
    image: clickcount,
    title: "ClickCount Application",
    reponame: "ClickCount",
    link: "https://github.com/mahek1585/ClickCount-Applications"
  },
  {
    image: chefs,
    title: "Chef's Delight",
    reponame: "FoodieHub",
    link: "https://github.com/mahek1585/FoodieHub"
  },
  {
    image: grocerry,
    title: "Apni Grocerry App",
    reponame: "Apni Grocerry",
    link: "https://github.com/mahek1585/Grocerry"
  },
  {
    image: amazon,
    title: "Amazon Home page",
    reponame: "Amazon",
    link: "https://github.com/mahek1585/AmazonHomePage"
  },
];

const LatestWork = () => {
  return (
    <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-14">
        What I've Been Building
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-contain rounded-lg bg-gray-50 mb-6"
            />
            <p className="text-xl font-semibold text-center text-[#2D2D2D]">
              {item.title}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-[#009379] font-semibold text-[1.1rem] hover:underline"
            >
              {item.reponame}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
