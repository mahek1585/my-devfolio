
import React from 'react';
import photo from "../../../assets/Images/mahek.jpeg";

const AboutHeader = () => {
  return (
    <section className="h-auto bg-[#F9E6F0] flex items-center justify-center py-10 px-4">
      <div className=" max-w-5xl flex flex-col md:flex-row md:justify-between md:h-[18.5rem]">
        
        <div className="flex flex-col items-center  md:items-start pr-[70px]">
          <div className="w-[12.1rem] h-[12.1rem] rounded-full overflow-hidden shadow-md border-2 border-[#d49dbb]">
            <img src={photo} className="w-full h-full object-cover" alt="my-image" />
          </div>
          <p className="text-[1.1rem] font-bold leading-7 pt-5 text-center md:text-left">
            Mahek Shaikh
          </p>
          <p className="text-center md:text-left">Web Developer & Tech Enthusiast</p>
        </div>

        <div className="mt-8 md:mt-0 md:w-[28rem] text-left">
          <p className="text-[1.1rem] font-bold mb-2">Bio:</p>
          <p className="text-[1rem] font-normal leading-6">
            I'm a passionate web developer with a focus on clean, responsive designs and interactive user experiences.
            I enjoy turning ideas into reality through code, especially using React, Tailwind CSS, and modern tools.
            Outside of coding, I love learning new tech and solving real-world problems through digital solutions.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHeader;
