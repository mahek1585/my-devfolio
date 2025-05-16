import React from 'react';
import product from "../../../assets/Images/product.png";
import art from "../../../assets/Images/art.png";
import visual from "../../../assets/Images/visual.png";

const skills = [
  {
    image: product,
    title: "Product design",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  },
  {
    image: art,
    title: "Art direction",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  },
  {
    image: visual,
    title: "Visual design",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
  }
];

const SkillSection = () => {
  return (
    <section className="mx-auto px-6 sm:px-[4rem] py-12 min-h-[688px]">
      <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-[125px] sm:px-[140px]">
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
