


import React from 'react';
import htmlIcon from "../../../assets/Images/html.png";
import jsIcon from "../../../assets/Images/javascript.png";
import reactIcon from "../../../assets/Images/react.png";
import tailwindIcon from "../../../assets/Images/tailwindcss.png";

const skills = [
  {
    image: htmlIcon,
    title: "HTML & CSS",
    description: "I structure and style responsive websites using clean and semantic HTML5 and modern CSS3."
  },
  {
    image: jsIcon,
    title: "JavaScript",
    description: "I build dynamic, interactive websites using JavaScript, including DOM manipulation and API integration."
  },
  {
    image: reactIcon,
    title: "React.js",
    description: "I create reusable components and responsive UIs using React with hooks and state management."
  },
  {
    image: tailwindIcon,
    title: "Tailwind CSS",
    description: "I build sleek and responsive layouts efficiently using Tailwind's utility-first CSS framework."
  }
];

const SkillSection = () => {
  return (
    <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6]">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          My Technical Skills
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          A quick overview of the tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center p-6 border border-gray-200"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
