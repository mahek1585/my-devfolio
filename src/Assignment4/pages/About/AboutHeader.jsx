// import React from 'react'
// import photo from "../../../assets/Images/photo.jpg"

// const AboutHeader = () => {
//   return (
//     <section className="h-[33.6rem] bg-[#F9E6F0] flex items-center justify-center md:flex flex-col">
//         <div className="w-[49rem] h-[18.5rem]  flex justify-between md:flex-row md:justify-between md:h-[18.5rem">
            
//             <div>
//                 <div className="w-[12.1rem] h-[12.1rem]">
//                     <img src={photo} className=""/>
//                 </div>
//                 <p className="text-[1.1rem] font-bold leading-7 pt-5">Pablo Designero </p>
//                  <p>Designer & Unicorn Trainer</p>
//             </div>

//             <div className=" h-32 w-lg text-left my-20">
//                 <p className="text-[1.1rem] font-bold mb-2">Bio:</p>
//                 <p className="text-[1rem] font-normal leading-6">
//                     Father of 3 humans, 5 unicorns & 2 dogs, I design since I can remember it.
//                     I often get asked where I get my inspiration from: in everyday’s lil’ details.
//                     And sometimes in leftover food I find in my beard.
//                 </p>
//             </div>
//          </div>

//      </section>
//   )
//  }

//  export default AboutHeader

import React from 'react';
import photo from "../../../assets/Images/photo.jpg";

const AboutHeader = () => {
  return (
    <section className="h-auto bg-[#F9E6F0] flex items-center justify-center py-10 px-4">
      <div className=" max-w-5xl flex flex-col md:flex-row md:justify-between md:h-[18.5rem]">
        
        <div className="flex flex-col items-center md:items-start pr-[70px]">
          <div className="w-[12.1rem] h-[12.1rem]">
            <img src={photo} className="" />
          </div>
          <p className="text-[1.1rem] font-bold leading-7 pt-5 text-center md:text-left">
            Pablo Designero
          </p>
          <p className="text-center md:text-left">Designer & Unicorn Trainer</p>
        </div>

        <div className="mt-8 md:mt-0 md:w-[28rem] text-left">
          <p className="text-[1.1rem] font-bold mb-2">Bio:</p>
          <p className="text-[1rem] font-normal leading-6">
            Father of 3 humans, 5 unicorns & 2 dogs, I design since I can remember it.
            I often get asked where I get my inspiration from: in everyday’s lil’ details.
            And sometimes in leftover food I find in my beard.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHeader;
