

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Heroimage from "../../../assets/Images/hero-image2.jpg";

const HeroSection = () => {

 



  return (
    <section className="py-16 md:py-24 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 bg-white">
      
      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#009379] text-base md:text-lg font-semibold tracking-wider uppercase">
          Web Developer | Programmer
        </p>

        <h1 className="font-poppins font-extrabold text-[2.5rem] md:text-[5rem] leading-tight tracking-wide bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 text-transparent bg-clip-text">
          Hey, I'm Mahek
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          A passionate web developer building modern websites with React and JavaScript. This portfolio highlights my latest work!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={Heroimage}
          alt="Hero Mahek"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
