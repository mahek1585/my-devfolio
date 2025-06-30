

import React from 'react';
import photo from "../../../assets/Images/mahek.jpeg";

const AboutHeader = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9E6F0] to-[#fdfbfb] py-16 px-6 md:px-24 mt-22">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#d49dbb]">
            <img
              src={photo}
              className="w-full h-full object-cover"
              alt="Mahek Shaikh"
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-[#2d2d2d]">Mahek Shaikh</h2>
          <p className="text-[#6b7280] font-medium mt-1">
            Web Developer & Tech Enthusiast
          </p>
        </div>

        {/* Bio */}
        <div className="text-[#333] max-w-2xl">
          <h3 className="text-xl font-semibold mb-4 text-[#2d2d2d]">About Me</h3>
          <p className="text-base leading-relaxed">
            Hi, I’m a web developer who loves crafting smooth, responsive websites
            that not only look good but feel great to use. I specialize in building
            interactive experiences with React and Tailwind CSS — tools I genuinely
            enjoy working with. Whether it’s transforming a rough idea into a polished
            product or diving into a new tech challenge, I’m all in. When I’m not coding,
            you’ll probably find me exploring the latest in tech or figuring out smarter
            ways to solve real-life problems with code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
