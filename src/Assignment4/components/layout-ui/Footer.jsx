import React from "react";

import vector1 from "../../../assets/Images/vector1.png"
 import vector2 from "../../../assets/Images/vector2.png"
 import vector3 from "../../../assets/Images/vector3.png"
import vector4 from "../../../assets/Images/vector4.png"
 import Be from "../../../assets/Images/Behance.png"


const Footer = () => {
  return (
    <footer className="px-14">
      <div  id ="contact" className=" flex flex-col md:flex-row gap-20 md:gap-[15rem] justify-between border-t border-t-black pt-16">
        <div className="">
          <h2 className="font-semibold text-3xl mb-10">Let’s work together</h2>
          <p className="mb-14">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
           <div className="flex gap-4">
                     <img src={vector1} className="w-9 h-9 cursor-pointer" alt="vector1" />
                     <img src={vector2} className="w-9 h-9 cursor-pointer" alt="vector2" /> 
                     <img src={vector3} className="w-9 h-9 cursor-pointer" alt="vector3" />
                     <img src={vector4} className="w-9 h-9 cursor-pointer" alt="vector4" /> 
                    <img src={Be} className="w-9 h-9 cursor-pointer" alt="vector5" /> 
                 </div>
        </div>
        <form className="flex flex-1 items-start min-w-[32rem]">
          <div className="flex flex-1 flex-col gap-5 ">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <textarea
              name=""
              placeholder="Type your message here"
              rows={8}
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
              id=""
            ></textarea>
            <button
              type="submit"
              className="font-semibold p-6 min-w-[13rem] self-start bg-black text-white cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;