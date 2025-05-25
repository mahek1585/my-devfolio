import React from 'react'
import Heroimage from "../../../assets/Images/hero-image.jpg";

const HeroSection = () => {

  return (
  <section className="py-12 md:py-24 flex flex-col md:flex-row gap-16 md:gap-7 justify-center items-center">
    <div className="text-center md:text-left flex-1 max-w-[34rem] hero-content flex flex-col gap-5 md:gap-10">
        <p className="title text-xl font-semibold">Web Developer | Programmer </p>
        <h1 className="font-semibold text-[2.5rem] md:text-[5rem] leading-[100%] md:leading-[5rem]">Web Development Enthusiast</h1>
        <p className="lead"> A passionate web developer building modern websites with React and JavaScript. This portfolio highlights my latest work!</p>
    </div>
    <div className="hero-image">
        <img src={Heroimage} alt="Hero-image" className="w-[30rem]" />
    </div>

  </section>

  )

}

export default HeroSection

