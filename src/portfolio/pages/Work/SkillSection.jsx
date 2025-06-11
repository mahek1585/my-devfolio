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
    <section className="mx-auto px-6 sm:px-[4rem] py-12 min-h-[688px]">
      <div className="flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[100px] sm:gap-y-16 sm:px-[140px]">
        {skills.map((item, index) => (
          <div key={index} className="w-[249px] h-[328px] flex flex-col items-center text-center">
            <img src={item.image} alt={item.title} className="w-32 h-32 mx-auto" />
            <h3 className="font-semibold leading-10 text-2xl text-[#2D2D2D] pt-[3.5rem]">{item.title}</h3>
            <p className="text-[1rem] leading-[1.6rem] font-normal h-[81px] text-[#2D2D2D]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
